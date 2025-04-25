// src/components/Footer.jsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/LayoutStyle';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2025 AquaVida • Dados SISAGUA</Text>
        </View>
    );
}
