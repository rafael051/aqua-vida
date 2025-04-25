import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/ScreensStyle';
import { buscarPontosDeCaptacao } from '../services/pontosCaptacaoService';

export default function PontosCaptacaoScreen() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarDados() {
            try {
                const resposta = await buscarPontosDeCaptacao({ limit: 100 });
                setDados(resposta);
            } catch (err) {
                console.error(err);
                setErro('Erro ao carregar os dados de captação de água.');
            } finally {
                setCarregando(false);
            }
        }

        carregarDados();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Pontos de Captação de Água</Text>

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {dados.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.label}>Município:</Text>
                    <Text style={styles.texto}>{item.municipio} - {item.uf}</Text>

                    <Text style={styles.label}>Instituição:</Text>
                    <Text style={styles.texto}>{item.nome_da_instiuicao}</Text>

                    <Text style={styles.label}>Forma de Abastecimento:</Text>
                    <Text style={styles.texto}>{item.nome_da_forma_de_abastecimento}</Text>

                    <Text style={styles.label}>Tipo de Captação:</Text>
                    <Text style={styles.texto}>{item.tipo_de_captacao}</Text>

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
                    <Text style={styles.texto}>{item.ano_de_referencia}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
