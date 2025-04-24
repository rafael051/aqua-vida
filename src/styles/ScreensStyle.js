// src/styles/ScreensStyle.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F1FAEE',
        padding: 20,
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#006d77',
        textAlign: 'center',
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 16,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },

    label: {
        fontWeight: 'bold',
        color: '#1d3557',
        fontSize: 14,
        marginTop: 8,
    },

    texto: {
        color: '#333',
        fontSize: 14,
        marginBottom: 6,
    },

    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 12,
    },

    button: {
        backgroundColor: '#457b9d',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },

    erro: {
        color: '#e63946',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 14,
    },

    carregando: {
        textAlign: 'center',
        color: '#888',
        fontStyle: 'italic',
        marginVertical: 10,
    },
});

export default styles;
