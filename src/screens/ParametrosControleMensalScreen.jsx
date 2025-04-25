import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/ScreensStyle';
import { buscarParametrosControleMensal } from '../services/parametrosControleMensalService';

export default function ParametrosControleMensalScreen() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarDados() {
            try {
                const resposta = await buscarParametrosControleMensal({ limit: 100 });
                setDados(resposta);
            } catch (err) {
                console.error(err);
                setErro('Erro ao carregar os dados de controle mensal.');
            } finally {
                setCarregando(false);
            }
        }

        carregarDados();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Parâmetros Básicos de Controle Mensal</Text>

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

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
