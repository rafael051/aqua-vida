import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function PopulacaoScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>População Abastecida</Text>
        </ScrollView>
    );
}
