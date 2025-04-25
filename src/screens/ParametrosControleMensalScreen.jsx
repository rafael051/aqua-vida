import React, { useEffect, useState } from 'react';
import {
    ScrollView, View, Text, TextInput, Alert, TouchableOpacity, Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/ScreensStyle';
import { buscarParametrosControleMensal } from '../services/parametrosControleMensalService';
import { buscarEstados, buscarMunicipiosPorUF } from '../services/ibgeService';

export default function ParametrosControleMensalScreen() {
    const [estados, setEstados] = useState([]);
    const [ufSelecionada, setUfSelecionada] = useState('');
    const [municipios, setMunicipios] = useState([]);
    const [cidadeDigitada, setCidadeDigitada] = useState('');
    const [codigoIBGE, setCodigoIBGE] = useState(null);

    const [mesSelecionado, setMesSelecionado] = useState('');
    const [anoReferencia, setAnoReferencia] = useState('');

    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarEstados() {
            const lista = await buscarEstados();
            setEstados(lista);
        }
        carregarEstados();
    }, []);

    useEffect(() => {
        async function carregarMunicipios() {
            const estado = estados.find(uf => uf.sigla === ufSelecionada);
            if (!estado) return;
            const lista = await buscarMunicipiosPorUF(estado.id);
            setMunicipios(lista);
        }

        if (ufSelecionada) carregarMunicipios();
    }, [ufSelecionada]);

    useEffect(() => {
        if (cidadeDigitada.length >= 3 && municipios.length > 0) {
            const resultado = municipios.find(m =>
                m.nome.toLowerCase() === cidadeDigitada.toLowerCase()
            );
            setCodigoIBGE(resultado ? resultado.codigo_ibge_6 : null);
        } else {
            setCodigoIBGE(null);
        }
    }, [cidadeDigitada, municipios]);

    async function consultarParametros() {
        if (!codigoIBGE) {
            Alert.alert('Atenção', 'Cidade não encontrada ou código IBGE inválido.');
            return;
        }

        const filtros = {
            codigo_ibge: codigoIBGE,
            limit: 1000,
        };

        if (mesSelecionado) filtros.mes_de_referencia = mesSelecionado;
        if (anoReferencia) filtros.ano_de_referencia = anoReferencia;

        setCarregando(true);
        setErro(null);

        try {
            const resposta = await buscarParametrosControleMensal(filtros);
            setDados(resposta);
        } catch (err) {
            console.error(err);
            setErro('Erro ao carregar os dados de controle mensal.');
        } finally {
            setCarregando(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Parâmetros Básicos de Controle Mensal</Text>

            {/* 💧 Imagem 1 - Gota de água */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/728/728093.png' }}
                style={{ width: 90, height: 90, alignSelf: 'center', marginBottom: 8 }}
            />

            {/* 🏞️ Imagem 2 - Qualidade da Água */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4149/4149604.png' }}
                style={{ width: 90, height: 90, alignSelf: 'center', marginBottom: 16 }}
            />

            <Text style={styles.label}>Estado (UF):</Text>
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 12 }}>
                <Picker
                    selectedValue={ufSelecionada}
                    onValueChange={(value) => setUfSelecionada(value)}
                >
                    <Picker.Item label="Selecione um estado" value="" />
                    {estados.map((uf) => (
                        <Picker.Item key={uf.id} label={uf.nome} value={uf.sigla} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Digite a cidade:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: Campinas"
                value={cidadeDigitada}
                onChangeText={setCidadeDigitada}
            />

            <Text style={styles.label}>Mês de Referência:</Text>
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, marginBottom: 12 }}>
                <Picker
                    selectedValue={mesSelecionado}
                    onValueChange={(value) => setMesSelecionado(value)}
                >
                    <Picker.Item label="Selecione o mês" value="" />
                    {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(m => (
                        <Picker.Item key={m} label={m} value={m} />
                    ))}
                </Picker>
            </View>

            <Text style={styles.label}>Ano de Referência:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 2024"
                keyboardType="numeric"
                value={anoReferencia}
                onChangeText={setAnoReferencia}
            />

            <TouchableOpacity style={styles.button} onPress={consultarParametros}>
                <Text style={styles.buttonText}>Consultar</Text>
            </TouchableOpacity>

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {dados.length === 0 && !carregando && !erro && (
                <Text style={styles.carregando}>Nenhum dado encontrado.</Text>
            )}

            {dados.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.label}>Município:</Text>
                    <Text style={styles.texto}>{item.municipio} - {item.uf}</Text>

                    <Text style={styles.label}>Instituição:</Text>
                    <Text style={styles.texto}>{item.nome_da_instituicao}</Text>

                    <Text style={styles.label}>Parâmetro:</Text>
                    <Text style={styles.texto}>{item.parametro}</Text>

                    <Text style={styles.label}>Valor:</Text>
                    <Text style={styles.texto}>{item.valor}</Text>

                    <Text style={styles.label}>Referência:</Text>
                    <Text style={styles.texto}>{item.mes_de_referencia}/{item.ano_de_referencia}</Text>

                    <Text style={styles.label}>Forma de Abastecimento:</Text>
                    <Text style={styles.texto}>{item.nome_da_forma_de_abastecimento}</Text>

                    <Text style={styles.label}>Ponto de Monitoramento:</Text>
                    <Text style={styles.texto}>{item.ponto_de_monitoramento}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
