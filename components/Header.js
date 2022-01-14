import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

const Header = () => (
        <Text style={styles.header}>Criptocurrencies</Text>
    )

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingVertical: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#EB5401',
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#FFF',
    }
})

export default Header
