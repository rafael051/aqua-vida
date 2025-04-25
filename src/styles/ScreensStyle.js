// src/styles/ScreensStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F1FAEE', // Branco gelo
        padding: 20,
        paddingBottom: 40,
    },

    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#006d77', // Verde escuro elegante
        textAlign: 'center',
    },

    subtitulo: {
        fontSize: 18,
        color: '#457b9d',
        textAlign: 'center',
        marginBottom: 16,
        fontWeight: '500',
    },

    paragrafo: {
        fontSize: 16,
        color: '#333',
        textAlign: 'justify',
        marginBottom: 20,
        lineHeight: 24,
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
    },

    label: {
        fontWeight: 'bold',
        color: '#1d3557',
        fontSize: 15,
        marginTop: 8,
    },

    texto: {
        color: '#333',
        fontSize: 15,
        marginBottom: 6,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 16,
        marginBottom: 16,
    },

    inputMensagem: {
        height: 100,
        textAlignVertical: 'top',
    },

    button: {
        backgroundColor: '#457b9d', // Azul bonito
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 0.5,
    },

    erro: {
        color: '#e63946', // vermelho alerta
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
    },

    carregando: {
        textAlign: 'center',
        color: '#999',
        fontStyle: 'italic',
        marginVertical: 12,
    },

    imagemFormulario: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
    },

    imagemSobre: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 20,
    },

    nome: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1d3557',
        textAlign: 'center',
    },

    funcao: {
        fontSize: 16,
        color: '#457b9d',
        textAlign: 'center',
        marginTop: 4,
    },
});

export default styles;
