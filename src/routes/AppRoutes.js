import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// Importação das telas
import HomeScreen from '../screens/HomeScreen';
import FormularioScreen from '../screens/FormularioScreen';
import AjudaScreen from '../screens/AjudaScreen';
import DesenvolvedoresScreen from '../screens/DesenvolvedoresScreen';
import CentrosScreen from '../screens/CentrosScreen';
import QualidadeAguaScreen from '../screens/QualidadeAguaScreen'; // ✅ Certifique-se que o caminho está certo

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'AquaVida' }} />
                <Stack.Screen name="Formulario" component={FormularioScreen} />
                <Stack.Screen name="Ajuda" component={AjudaScreen} />
                <Stack.Screen name="Desenvolvedores" component={DesenvolvedoresScreen} />
                <Stack.Screen name="Centros de Saúde" component={CentrosScreen} />
                <Stack.Screen name="QualidadeAgua" component={QualidadeAguaScreen} options={{ title: 'Qualidade da Água' }} /> {/* ✅ Aqui está a rota que causou o erro */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
