import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardUnidade({ formaAbastecimento, municipio, uf, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.nome}>{formaAbastecimento}</Text>
            <Text style={styles.endereco}>{municipio} - {uf}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#E0F7FA',
        borderRadius: 12,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        elevation: 2,
    },
    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#006064',
    },
    endereco: {
        fontSize: 14,
        color: '#004D40',
        marginTop: 4,
    },
});
