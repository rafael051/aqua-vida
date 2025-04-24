import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function CianobacteriasScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Exposição a Cianobactérias e Toxinas</Text>

            <Text style={styles.paragrafo}>
                As cianobactérias são micro-organismos aquáticos que podem produzir toxinas prejudiciais à saúde humana e ao meio ambiente, especialmente em águas superficiais como represas e lagos.
            </Text>

            <Text style={styles.topico}>• Quando ocorrem?</Text>
            <Text style={styles.paragrafo}>
                Elas proliferam principalmente em águas paradas e quentes, com excesso de nutrientes como nitrogênio e fósforo.
            </Text>

            <Text style={styles.topico}>• Quais os riscos?</Text>
            <Text style={styles.paragrafo}>
                A ingestão ou contato com água contaminada pode causar problemas como náusea, vômito, diarreia, alergias e, em casos graves, danos ao fígado e sistema nervoso.
            </Text>

            <Text style={styles.topico}>• Como são monitoradas?</Text>
            <Text style={styles.paragrafo}>
                O Ministério da Saúde realiza análises periódicas através do SISAGUA para detectar a presença de toxinas como microcistinas e cilindrospermopsinas.
            </Text>

            <Text style={styles.topico}>• Prevenção:</Text>
            <Text style={styles.paragrafo}>
                O tratamento adequado da água e o controle ambiental de esgotos e fertilizantes evitam o crescimento excessivo dessas bactérias.
            </Text>
        </ScrollView>
    );
}
