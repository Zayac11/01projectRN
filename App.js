import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Container from './src/components/Container/Container'
import {SafeAreaView, SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context'


const App = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <SafeAreaView style={styles.container}>
                <Container />
                <StatusBar backgroundColor={'white'} style='dark' />
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

export default App
