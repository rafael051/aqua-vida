import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>AquaVida 💧</Text>
            <Text style={styles.subtitulo}>Monitoramento da Qualidade da Água</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('QualidadeAguaScreen')}
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
                onPress={() => navigation.navigate('DesenvolvedoresScreen')}
            >
                <Text style={styles.buttonText}>Desenvolvedores</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
