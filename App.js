import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import store from './src/redux/redux-store'
import TabBar from './src/components/TabBar/TabBar'
import TabBarTest from './src/components/TabBar/TopBarTest'


const App = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <TabBar />
                <StatusBar style='light' />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App
