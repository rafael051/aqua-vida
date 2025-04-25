// src/routes/AppRoutes.jsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 📂 Telas principais
import HomeScreen from '../screens/HomeScreen';
import SobreScreen from '../screens/SobreScreen';
import DesenvolvedoresScreen from '../screens/DesenvolvedoresScreen';
import FormularioScreen from '../screens/FormularioScreen';
import AjudaScreen from '../screens/AjudaScreen';

// 📘 Telas temáticas de dados SISAGUA
import ParametrosControleMensalScreen from '../screens/ParametrosControleMensalScreen';
import CianobacteriasScreen from '../screens/CianobacteriasScreen';
import CarroPipaScreen from '../screens/CarroPipaScreen';
import PontosCaptacaoScreen from '../screens/PontosCaptacaoScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* 🏠 Navegação principal */}
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'AquaVida 💧' }}
                />
                <Stack.Screen
                    name="Sobre"
                    component={SobreScreen}
                    options={{ title: 'Sobre o Projeto' }}
                />
                <Stack.Screen
                    name="Desenvolvedores"
                    component={DesenvolvedoresScreen}
                    options={{ title: 'Equipe Desenvolvedora' }}
                />
                <Stack.Screen
                    name="Ajuda"
                    component={AjudaScreen}
                    options={{ title: 'Ajuda e Suporte' }}
                />
                <Stack.Screen
                    name="Formulario"
                    component={FormularioScreen}
                    options={{ title: 'Formulário de Contato' }}
                />

                {/* 📊 Telas com dados temáticos */}
                <Stack.Screen
                    name="Qualidade da Água"
                    component={ParametrosControleMensalScreen}
                />
                <Stack.Screen
                    name="Cianobactérias e Toxinas"
                    component={CianobacteriasScreen}
                />
                <Stack.Screen
                    name="Abastecimento por Carro-Pipa"
                    component={CarroPipaScreen}
                />
                <Stack.Screen
                    name="Pontos de Captação"
                    component={PontosCaptacaoScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
