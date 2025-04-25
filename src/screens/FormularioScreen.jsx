import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Linking, Image, ScrollView } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function FormularioScreen() {
    const [nome, setNome] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarFormulario = () => {
        if (!nome.trim() || !mensagem.trim()) {
            Alert.alert('Erro', 'Preencha todos os campos');
            return;
        }

        Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');
        setNome('');
        setMensagem('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Formulário de Contato</Text>

            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747376.png' }}
                style={{ width: 120, height: 120, alignSelf: 'center', marginBottom: 16 }}
            />

            <TextInput
                placeholder="Seu nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder="Digite sua mensagem"
                value={mensagem}
                onChangeText={setMensagem}
                style={[styles.input, { height: 100 }]}
                multiline
            />

            <TouchableOpacity style={styles.button} onPress={enviarFormulario}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
