import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#006064', // Azul petróleo, remete à água e saúde ambiental
        paddingTop: 50,
        paddingBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
    },
    title: {
        color: '#E0F7FA', // Azul claro suave para contraste
        fontSize: 22,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});
