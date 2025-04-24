import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function TratamentoScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Etapas de Tratamento da Água</Text>

            <Text style={styles.paragrafo}>
                A água fornecida à população passa por diversas etapas de tratamento, como:
            </Text>

            <Text style={styles.topico}>• Coagulação e Floculação:</Text>
            <Text style={styles.paragrafo}>
                Substâncias químicas são adicionadas para aglomerar impurezas em flocos.
            </Text>

            <Text style={styles.topico}>• Decantação:</Text>
            <Text style={styles.paragrafo}>
                Os flocos formados se depositam no fundo dos decantadores.
            </Text>

            <Text style={styles.topico}>• Filtração:</Text>
            <Text style={styles.paragrafo}>
                A água passa por filtros de areia, cascalho e carvão ativado para remoção de impurezas restantes.
            </Text>

            <Text style={styles.topico}>• Desinfecção:</Text>
            <Text style={styles.paragrafo}>
                Cloro ou outro agente é adicionado para eliminar microrganismos patogênicos.
            </Text>

            <Text style={styles.topico}>• Fluoretação (opcional):</Text>
            <Text style={styles.paragrafo}>
                Em algumas regiões, adiciona-se flúor para prevenir cáries dentárias.
            </Text>
        </ScrollView>
    );
}
