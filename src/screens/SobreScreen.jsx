import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function SobreScreen() {
    const abrirSiteSISAGUA = () => {
        Linking.openURL('https://www.gov.br/saude/pt-br/composicao/svsa/vigilancia-da-qualidade-da-agua');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Sobre o Projeto</Text>

            <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/481/481777.png' }}
                style={styles.imagemSobre}
            />

            <Text style={styles.paragrafo}>
                O <Text style={{ fontWeight: 'bold' }}>AquaVida</Text> é um aplicativo construído com base em dados públicos do Ministério da Saúde, por meio da API aberta do SISAGUA (Sistema de Informação da Vigilância da Qualidade da Água para Consumo Humano).
            </Text>

            <Text style={styles.paragrafo}>
                Nosso objetivo é promover a <Text style={{ fontWeight: 'bold' }}>conscientização sobre a qualidade da água</Text> no Brasil, reunindo informações sobre sua potabilidade, tratamento, contaminação e distribuição, especialmente em regiões de maior vulnerabilidade.
            </Text>

            <Text style={styles.paragrafo}>
                Através de uma interface intuitiva, é possível consultar:
                {"\n"}• Parâmetros químicos e bacteriológicos analisados mensalmente;
                {"\n"}• Exposição a cianobactérias e toxinas;
                {"\n"}• Condições de tratamento e infraestrutura;
                {"\n"}• Registros de carros-pipa em áreas remotas;
                {"\n"}• Pontos oficiais de captação de água.
            </Text>

            <Text style={styles.paragrafo}>
                Essa iniciativa tem como foco uma <Text style={{ fontWeight: 'bold' }}>questão social crítica</Text>: garantir que todos tenham o direito de acesso à informação e à água segura.
            </Text>

            <Text style={styles.paragrafo}>
                Utilizando dados reais e atualizados, o AquaVida contribui com a fiscalização, o conhecimento popular e o apoio a políticas públicas que envolvem saneamento, saúde ambiental e justiça hídrica.
            </Text>

            <Text style={styles.paragrafo}>
                Este projeto reforça o papel da tecnologia como aliada da cidadania e da saúde pública, em conformidade com os Objetivos de Desenvolvimento Sustentável (ODS 6 – Água Potável e Saneamento).
            </Text>

            <TouchableOpacity style={styles.button} onPress={abrirSiteSISAGUA}>
                <Text style={styles.buttonText}>Acessar Site Oficial do SISAGUA</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
