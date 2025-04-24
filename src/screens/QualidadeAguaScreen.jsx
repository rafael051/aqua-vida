import React, { useState } from 'react';
import { ScrollView, Text, View, TextInput, Button, Alert } from 'react-native';
import styles from '../styles/ScreensStyle';
import { buscarParametrosControleMensal } from '../services/demasService';

export default function QualidadeAguaScreen() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState(null);

    const [filtroAno, setFiltroAno] = useState('');
    const [filtroMes, setFiltroMes] = useState('');
    const [filtroMunicipio, setFiltroMunicipio] = useState('');

    async function carregarParametros() {
        if (!filtroAno || !filtroMes || !filtroMunicipio) {
            Alert.alert('Atenção', 'Preencha todos os campos para aplicar o filtro.');
            return;
        }

        setCarregando(true);
        setErro(null);

        try {
            const resposta = await buscarParametrosControleMensal(1000, 0);

            const filtrados = resposta.filter(item => {
                const anoOK = String(item.ano_de_referencia) === filtroAno.trim();
                const mesOK = String(item.mes_de_referencia) === filtroMes.trim();
                const municipioOK = item.municipio?.toLowerCase().includes(filtroMunicipio.trim().toLowerCase());
                return anoOK && mesOK && municipioOK;
            });

            if (filtrados.length === 0) {
                Alert.alert('Nenhum resultado', 'Nenhum dado encontrado com os filtros aplicados.');
            }

            setDados(filtrados);
        } catch (error) {
            console.error(error);
            setErro('Erro ao carregar dados da qualidade da água.');
        } finally {
            setCarregando(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Parâmetros Químicos e Bacteriológicos</Text>

            {/* 🔍 Filtros */}
            <TextInput
                placeholder="Ano (ex: 2025)"
                value={filtroAno}
                onChangeText={setFiltroAno}
                keyboardType="numeric"
                style={styles.input}
            />

            <TextInput
                placeholder="Mês (1-12)"
                value={filtroMes}
                onChangeText={setFiltroMes}
                keyboardType="numeric"
                style={styles.input}
            />

            <TextInput
                placeholder="Município (ex: São Paulo)"
                value={filtroMunicipio}
                onChangeText={setFiltroMunicipio}
                style={styles.input}
            />

            <Button title="Aplicar Filtros" onPress={carregarParametros} />

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {dados.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.label}>Parâmetro:</Text>
                    <Text style={styles.texto}>{item.parametro || 'Não informado'}</Text>

                    <Text style={styles.label}>Valor:</Text>
                    <Text style={styles.texto}>{item.valor ?? 'Não informado'}</Text>

                    <Text style={styles.label}>Município:</Text>
                    <Text style={styles.texto}>{item.municipio || 'Desconhecido'} - {item.uf || ''}</Text>

                    <Text style={styles.label}>Forma de Abastecimento:</Text>
                    <Text style={styles.texto}>{item.nome_da_forma_de_abastecimento || 'Não informada'}</Text>

                    <Text style={styles.label}>Ponto de Monitoramento:</Text>
                    <Text style={styles.texto}>{item.ponto_de_monitoramento || 'Não informado'}</Text>

                    <Text style={styles.label}>Referência:</Text>
                    <Text style={styles.texto}>{item.mes_de_referencia}/{item.ano_de_referencia}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
