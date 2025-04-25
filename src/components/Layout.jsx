// src/components/Layout.jsx
import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';
import styles from '../styles/LayoutStyle';

export default function Layout({ title, children }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Header title={title} />
            <View style={styles.content}>
                {children}
            </View>
            <Footer />
        </ScrollView>
    );
}
