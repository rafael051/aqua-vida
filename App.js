// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 📂 Telas organizadas
import HomeScreen from './src/screens/HomeScreen';
import SobreScreen from './src/screens/SobreScreen';
import DesenvolvedoresScreen from './src/screens/DesenvolvedoresScreen';
import AjudaScreen from './src/screens/AjudaScreen';
import FormularioScreen from './src/screens/FormularioScreen';
import ParametrosControleMensalScreen from './src/screens/ParametrosControleMensalScreen';
import CianobacteriasScreen from './src/screens/CianobacteriasScreen';
import CarroPipaScreen from './src/screens/CarroPipaScreen';
import PontosCaptacaoScreen from './src/screens/PontosCaptacaoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                {/* 🏠 Telas principais */}
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'AquaVida 💧' }} />
                <Stack.Screen name="Sobre" component={SobreScreen} options={{ title: 'Sobre o Projeto' }} />
                <Stack.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} options={{ title: 'Equipe Desenvolvedora' }} />
                <Stack.Screen name="Ajuda" component={AjudaScreen} options={{ title: 'Ajuda e Suporte' }} />
                <Stack.Screen name="Formulario" component={FormularioScreen} options={{ title: 'Formulário de Contato' }} />

                {/* 📊 Telas temáticas com dados */}
                <Stack.Screen name="Qualidade da Água" component={ParametrosControleMensalScreen} />
                <Stack.Screen name="Cianobactérias e Toxinas" component={CianobacteriasScreen} />
                <Stack.Screen name="Abastecimento por Carro-Pipa" component={CarroPipaScreen} />
                <Stack.Screen name="Pontos de Captação" component={PontosCaptacaoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
