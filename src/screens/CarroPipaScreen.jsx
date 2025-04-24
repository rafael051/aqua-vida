import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ScreensStyle';

export default function CarroPipaScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>Abastecimento por Carro-Pipa</Text>

            <Text style={styles.paragrafo}>
                Em áreas com dificuldade de acesso à rede pública de abastecimento de água, como comunidades rurais ou em situação de emergência, o fornecimento é realizado por carros-pipa.
            </Text>

            <Text style={styles.topico}>• Finalidade:</Text>
            <Text style={styles.paragrafo}>
                Atender populações vulneráveis que não possuem acesso contínuo à água potável.
            </Text>

            <Text style={styles.topico}>• Fiscalização:</Text>
            <Text style={styles.paragrafo}>
                Os carros-pipa devem ser autorizados por órgãos de saúde pública, e sua origem e qualidade da água são controladas.
            </Text>

            <Text style={styles.topico}>• Registro:</Text>
            <Text style={styles.paragrafo}>
                O SISAGUA mantém registros de carros-pipa, suas rotas, responsáveis e população atendida.
            </Text>

            <Text style={styles.topico}>• Importância:</Text>
            <Text style={styles.paragrafo}>
                Garante o acesso emergencial à água, especialmente em períodos de seca ou colapso hídrico.
            </Text>
        </ScrollView>
    );
}
