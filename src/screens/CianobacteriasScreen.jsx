import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from '../styles/ScreensStyle';
import { buscarVigilanciaCianobacterias } from '../services/cianobacteriasService';
import { formatarData } from '../utils/formatadores';

// ✅ Imagens locais
import bacteria from '../assets/bacteria.png';
import virus from '../assets/virus.png';

export default function CianobacteriasScreen() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregarDados() {
            try {
                const resposta = await buscarVigilanciaCianobacterias({ limit: 100, offset: 0 });
                setDados(resposta);
            } catch (err) {
                console.error(err);
                setErro('Erro ao carregar os dados de cianobactérias.');
            } finally {
                setCarregando(false);
            }
        }

        carregarDados();
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Exposição a Cianobactérias e Toxinas</Text>

            {/* 🦠 Imagem 1 - Bactéria ilustrativa */}
            <Image
                source={bacteria}
                style={{ width: 90, height: 90, alignSelf: 'center', marginBottom: 8 }}
            />

            {/* ⚠️ Imagem 2 - Representação de vírus ou toxina */}
            <Image
                source={virus}
                style={{ width: 90, height: 90, alignSelf: 'center', marginBottom: 16 }}
            />

            {carregando && <Text style={styles.carregando}>Carregando...</Text>}
            {erro && <Text style={styles.erro}>{erro}</Text>}

            {dados.map((item, index) => (
                <View key={index} style={styles.card}>
                    <Text style={styles.label}>Município:</Text>
                    <Text style={styles.texto}>{item.municipio} - {item.uf}</Text>

                    <Text style={styles.label}>Parâmetro:</Text>
                    <Text style={styles.texto}>{item.parametro_ciano}</Text>

                    <Text style={styles.label}>Resultado:</Text>
                    <Text style={styles.texto}>{item.resultado}</Text>

                    <Text style={styles.label}>Data da Coleta:</Text>
                    <Text style={styles.texto}>{formatarData(item.data_da_coleta)}</Text>

                    <Text style={styles.label}>Ponto de Coleta:</Text>
                    <Text style={styles.texto}>{item.ponto_de_coleta || 'Não informado'}</Text>

                    <Text style={styles.label}>Procedência da Coleta:</Text>
                    <Text style={styles.texto}>{item.procedencia_da_coleta || 'Não informada'}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
