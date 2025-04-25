// src/components/Header.jsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/LayoutStyle';

export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}
