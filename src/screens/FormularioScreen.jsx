import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import styles from '../styles/ScreensStyle';

export default function FormularioScreen() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const enviarFormulario = () => {
        if (!nome.trim() || !telefone.trim() || !email.trim() || !mensagem.trim()) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        if (!email.includes('@')) {
            Alert.alert('Erro', 'Por favor, insira um email válido.');
            return;
        }

        Alert.alert('Sucesso', 'Mensagem enviada com sucesso!');

        // Limpar campos
        setNome('');
        setTelefone('');
        setEmail('');
        setMensagem('');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Formulário de Contato</Text>

            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747376.png' }}
                style={styles.imagemFormulario}
            />

            <TextInput
                placeholder="Seu nome"
                value={nome}
                onChangeText={setNome}
                style={styles.input}
            />

            <TextInput
                placeholder="Seu telefone"
                value={telefone}
                onChangeText={setTelefone}
                keyboardType="phone-pad"
                style={styles.input}
            />

            <TextInput
                placeholder="Seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
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
