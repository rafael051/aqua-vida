// App.js
import 'react-native-gesture-handler';
import React from 'react';
import AppRoutes from './src/routes/AppRoutes'; // ✅ importa o arquivo de rotas modular

export default function App() {
    return <AppRoutes />; // ✅ utiliza apenas o componente de rotas
}
