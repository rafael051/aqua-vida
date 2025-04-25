import React from 'react';
import { ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>AquaVida 💧</Text>
            <Text style={styles.subtitulo}>Monitoramento da Qualidade da Água</Text>

            {/* 🌟 Primeira Imagem decorativa */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/728/728093.png' }}
                style={{ width: 120, height: 120, alignSelf: 'center', marginVertical: 16 }}
            />

            <Text style={styles.paragrafo}>
                O AquaVida é um aplicativo informativo que reúne dados públicos sobre a qualidade da água para consumo humano no Brasil.
                Navegue pelas seções abaixo e saiba mais sobre os parâmetros, vigilância, abastecimento e captação.
            </Text>

            {/* 🌟 Segunda Imagem decorativa */}
            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2920/2920429.png' }}
                style={{ width: 120, height: 120, alignSelf: 'center', marginVertical: 16 }}
            />

            {/* 📊 Navegação temática de dados SISAGUA */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ParametrosControleMensalScreen')}
            >
                <Text style={styles.buttonText}>Parâmetros Químicos e Bacteriológicos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CianobacteriasScreen')}
            >
                <Text style={styles.buttonText}>Cianobactérias e Toxinas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('CarroPipaScreen')}
            >
                <Text style={styles.buttonText}>Abastecimento por Carro-Pipa</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PontosCaptacaoScreen')}
            >
                <Text style={styles.buttonText}>Pontos de Captação</Text>
            </TouchableOpacity>

            {/* 📄 Páginas institucionais */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('SobreScreen')}
            >
                <Text style={styles.buttonText}>Sobre o Projeto</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('DesenvolvedoresScreen')}
            >
                <Text style={styles.buttonText}>Desenvolvedores</Text>
            </TouchableOpacity>

            {/* 📬 Formulário de contato */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('FormularioScreen')}
            >
                <Text style={styles.buttonText}>Formulário de Contato</Text>
            </TouchableOpacity>

            {/* 🆘 Ajuda e Suporte */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('AjudaScreen')}
            >
                <Text style={styles.buttonText}>Ajuda e Suporte</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
