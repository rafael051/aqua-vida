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
                    name="SobreScreen"
                    component={SobreScreen}
                    options={{ title: 'Sobre o Projeto' }}
                />
                <Stack.Screen
                    name="DesenvolvedoresScreen"
                    component={DesenvolvedoresScreen}
                    options={{ title: 'Equipe Desenvolvedora' }}
                />
                <Stack.Screen
                    name="AjudaScreen"
                    component={AjudaScreen}
                    options={{ title: 'Ajuda e Suporte' }}
                />
                <Stack.Screen
                    name="FormularioScreen"
                    component={FormularioScreen}
                    options={{ title: 'Formulário de Contato' }}
                />

                {/* 📊 Telas com dados temáticos */}
                <Stack.Screen
                    name="ParametrosControleMensalScreen"
                    component={ParametrosControleMensalScreen}
                    options={{ title: 'Qualidade da Água' }}
                />
                <Stack.Screen
                    name="CianobacteriasScreen"
                    component={CianobacteriasScreen}
                    options={{ title: 'Cianobactérias e Toxinas' }}
                />
                <Stack.Screen
                    name="CarroPipaScreen"
                    component={CarroPipaScreen}
                    options={{ title: 'Abastecimento por Carro-Pipa' }}
                />
                <Stack.Screen
                    name="PontosCaptacaoScreen"
                    component={PontosCaptacaoScreen}
                    options={{ title: 'Pontos de Captação' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
