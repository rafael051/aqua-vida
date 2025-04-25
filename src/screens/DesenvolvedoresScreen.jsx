import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function DesenvolvedoresScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Equipe de Desenvolvimento</Text>

            {/* 👨‍💻 Imagem 1 - Ilustração de programador */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1055/1055687.png' }} // Programador
                style={{ width: 90, height: 90, alignSelf: 'center', marginBottom: 16 }}
            />

            <View style={styles.card}>
                <Text style={styles.nome}>Lucas Kenji Miyahira</Text>
                <Text style={styles.funcao}>Desenvolvedor Mobile</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.nome}>Rafael Rodrigues de Almeida</Text>
                <Text style={styles.funcao}>Desenvolvedor Front-end</Text>
            </View>

            {/* 💡 Imagem 2 - Criatividade/código */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1006/1006360.png' }} // Criatividade e dev
                style={{ width: 90, height: 90, alignSelf: 'center', marginTop: 16 }}
            />
        </ScrollView>
    );
}
