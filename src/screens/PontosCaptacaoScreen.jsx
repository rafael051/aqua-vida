import React, { useEffect, useState } from 'react';
import {
    ScrollView, View, Text, TextInput, Alert, TouchableOpacity, Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/ScreensStyle';
import { buscarPontosDeCaptacao } from '../services/pontosCaptacaoService';
import { buscarEstados, buscarMunicipiosPorUF } from '../services/ibgeService';

export default function PontosCaptacaoScreen() {
    const [estados, setEstados] = useState([]);
    const [ufSelecionada, setUfSelecionada] = useState('');
    const [municipios, setMunicipios] = useState([]);
    const [cidadeDigitada, setCidadeDigitada] = useState('');
    const [codigoIBGE, setCodigoIBGE] = useState(null);
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

    async function consultarPontos() {
        if (!codigoIBGE) {
            Alert.alert('Atenção', 'Cidade não encontrada ou código IBGE inválido.');
            return;
        }

        const filtros = {
            codigo_ibge: codigoIBGE,
            limit: 1000,
        };

        if (anoReferencia) filtros.ano_de_referencia = anoReferencia;

        setCarregando(true);
        setErro(null);

        try {
            const resposta = await buscarPontosDeCaptacao(filtros);
            setDados(resposta);
        } catch (err) {
            console.error(err);
            setErro('Erro ao carregar os dados de captação de água.');
        } finally {
            setCarregando(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Pontos de Captação de Água</Text>

            {/* 🌊 Imagem 1 - Água represada ou lago */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3512/3512853.png' }}
                style={{ width: 90, height: 90, alignSelf: 'center', marginBottom: 10 }}
            />

            {/* 🚰 Imagem 2 - Conjunto hidráulico ou reservatório */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2449/2449471.png' }}
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

            <Text style={styles.label}>Ano de Referência:</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 2024"
                keyboardType="numeric"
                value={anoReferencia}
                onChangeText={setAnoReferencia}
            />

            <TouchableOpacity style={styles.button} onPress={consultarPontos}>
                <Text style={styles.buttonText}>Consultar</Text>
            </TouchableOpacity>

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {dados.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.label}>Município:</Text>
                    <Text style={styles.texto}>{item.municipio} - {item.uf}</Text>

                    <Text style={styles.label}>Instituição:</Text>
                    <Text style={styles.texto}>{item.nome_da_instituicao || 'Não informada'}</Text>

                    <Text style={styles.label}>Forma de Abastecimento:</Text>
                    <Text style={styles.texto}>{item.nome_da_forma_de_abastecimento || 'Não informada'}</Text>

                    <Text style={styles.label}>Tipo de Captação:</Text>
                    <Text style={styles.texto}>{item.tipo_de_captacao || 'Não informado'}</Text>

                    <Text style={styles.label}>Manancial:</Text>
                    <Text style={styles.texto}>{item.nome_do_manancial_superficial || 'Não informado'}</Text>

                    <Text style={styles.label}>Vazão (L/s):</Text>
                    <Text style={styles.texto}>{item.vazao || 'Não informada'}</Text>

                    <Text style={styles.label}>Latitude / Longitude:</Text>
                    <Text style={styles.texto}>
                        {item.latitude || 'N/A'} / {item.longitude || 'N/A'}
                    </Text>

                    <Text style={styles.label}>Outorga:</Text>
                    <Text style={styles.texto}>{item.outorga === 'S' ? 'Sim' : 'Não'}</Text>

                    <Text style={styles.label}>Ano de Referência:</Text>
                    <Text style={styles.texto}>{item.ano_de_referencia || 'Não informado'}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
