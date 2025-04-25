import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function DesenvolvedoresScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>

            <View style={styles.card}>
                <Text style={styles.nome}>Lucas Kenji Miyahira</Text>
                <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nome}>Rafael Rodrigues de Almeida</Text>
                <Text style={styles.funcao}>Desenvolvedor Front-end</Text>
            </View>
        </ScrollView>
    );
}
