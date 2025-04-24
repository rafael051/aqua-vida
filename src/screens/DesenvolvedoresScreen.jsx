import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function DesenvolvedoresScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>

            <View style={styles.card}>
                <Text style={styles.nome}>Rafael Rodrigues</Text>
                <Text style={styles.funcao}>Desenvolvedor Front-end</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nome}>Ana Souza</Text>
                <Text style={styles.funcao}>Desenvolvedora Mobile</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nome}>Carlos Lima</Text>
                <Text style={styles.funcao}>Designer de UI/UX</Text>
            </View>
        </View>
    );
}
