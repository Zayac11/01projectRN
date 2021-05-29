import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Container from './src/components/Container/Container'
import {SafeAreaView, SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import store from "./src/redux/redux-store";

const App = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <SafeAreaView style={styles.container}>
                    <Container />
                    <StatusBar backgroundColor={'white'} style='dark' />
                </SafeAreaView>
            </Provider>
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
