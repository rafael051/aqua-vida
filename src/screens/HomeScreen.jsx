import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>AquaVida 💧</Text>
            <Text style={styles.subtitulo}>Monitoramento da Qualidade da Água</Text>

            <Text style={styles.paragrafo}>
                O AquaVida é um aplicativo informativo que reúne dados públicos sobre a qualidade da água para consumo humano no Brasil.
                Navegue pelas seções abaixo e saiba mais sobre os parâmetros, tratamento, abastecimento e muito mais.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ParametrosControleMensalScreen')}
            >
                <Text style={styles.buttonText}>Parâmetros Químicos e Bacteriológicos</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('TratamentoScreen')}
            >
                <Text style={styles.buttonText}>Tratamento e Infraestrutura</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('PopulacaoScreen')}
            >
                <Text style={styles.buttonText}>População Abastecida</Text>
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
        </ScrollView>
    );
}
