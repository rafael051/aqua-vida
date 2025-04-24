import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 📂 Screens do projeto AquaVida
import HomeScreen from './src/screens/HomeScreen.jsx';
import QualidadeAguaScreen from './src/screens/QualidadeAguaScreen.jsx';
import TratamentoScreen from './src/screens/TratamentoScreen.jsx';
import PopulacaoScreen from './src/screens/PopulacaoScreen.jsx';
import CianobacteriasScreen from './src/screens/CianobacteriasScreen.jsx';
import CarroPipaScreen from './src/screens/CarroPipaScreen.jsx';
import DesenvolvedoresScreen from './src/screens/DesenvolvedoresScreen.jsx';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ title: 'AquaVida 💧' }}
                />
                <Stack.Screen
                    name="QualidadeAguaScreen"
                    component={QualidadeAguaScreen}
                    options={{ title: 'Qualidade da Água' }}
                />
                <Stack.Screen
                    name="TratamentoScreen"
                    component={TratamentoScreen}
                    options={{ title: 'Tratamento e Infraestrutura' }}
                />
                <Stack.Screen
                    name="PopulacaoScreen"
                    component={PopulacaoScreen}
                    options={{ title: 'População Abastecida' }}
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
                    name="DesenvolvedoresScreen"
                    component={DesenvolvedoresScreen}
                    options={{ title: 'Equipe Desenvolvedora' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
