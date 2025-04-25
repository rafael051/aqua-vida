import React from 'react';
import { View, Text, TouchableOpacity, Linking, ScrollView, Image } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function AjudaScreen() {
    const abrirSite = () => {
        Linking.openURL('https://www.gov.br/saude/pt-br');
    };

    const ligar136 = () => {
        Linking.openURL('tel:136');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Precisa de Orientação sobre Saúde Pública?</Text>

            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png' }}
                style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 20 }}
            />

            <TouchableOpacity style={styles.button} onPress={abrirSite}>
                <Text style={styles.buttonText}>Acessar portal do Ministério da Saúde</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={ligar136}>
                <Text style={styles.buttonText}>Ligar para 136</Text>
            </TouchableOpacity>

            <Text style={styles.texto}>O Disque Saúde 136 funciona todos os dias, com informações sobre vacinação, vigilância da água, saneamento e muito mais.</Text>
        </ScrollView>
    );
}
