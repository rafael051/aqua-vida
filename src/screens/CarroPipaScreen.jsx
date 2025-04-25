import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/ScreensStyle';
import { buscarCadastroCarroPipa } from '../services/carroPipaService';
import { formatarData } from '../utils/formatadores';

export default function CarroPipaScreen() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarDados() {
            try {
                const resposta = await buscarCadastroCarroPipa(100, 0);
                setDados(resposta);
            } catch (err) {
                console.error(err);
                setErro('Erro ao carregar os dados de carros-pipa.');
            } finally {
                setCarregando(false);
            }
        }

        carregarDados();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Abastecimento por Carro-Pipa</Text>

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {dados.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.label}>Município:</Text>
                    <Text style={styles.texto}>{item.municipio} - {item.uf}</Text>

                    <Text style={styles.label}>Instituição:</Text>
                    <Text style={styles.texto}>{item.nome_da_instituicao}</Text>

                    <Text style={styles.label}>Placa:</Text>
                    <Text style={styles.texto}>{item.placa}</Text>

                    <Text style={styles.label}>Data de Início da Autorização:</Text>
                    <Text style={styles.texto}>{formatarData(item.data_inicio_de_autorizacao)}</Text>

                    <Text style={styles.label}>Data de Fim da Autorização:</Text>
                    <Text style={styles.texto}>{formatarData(item.data_fim_da_autorizacao)}</Text>

                    <Text style={styles.label}>População Atendida (estimada):</Text>
                    <Text style={styles.texto}>{item.n_de_pessoas_abastecidas_estimativa}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
