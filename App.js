import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {initialWindowMetrics, SafeAreaProvider} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import store from './src/redux/redux-store'
import TabBar from './src/components/TabBar/TabBar'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import ModalScreenContainer from './src/components/Modal/ModalScreenContainer'

const RootStack = createStackNavigator()

const opacityTransition = {
    gestureDirection: 'horizontal', // we will swipe right if we want to close the screen;
    transitionSpec: {
        open: {
            animation: 'timing',
        },
        close: {
            animation: 'timing',
            config: {
                duration: 300,
            },
        },
    },
    cardStyleInterpolator: ({current}) => ({
        cardStyle: {
            opacity: current.progress,
        }, // updates the opacity depending on the transition progress value of the current screen
    }),
}

const App = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <NavigationContainer>
                    <RootStack.Navigator headerMode='none' mode='modal' screenOptions={{...opacityTransition}}>
                        <RootStack.Screen name='TabBar' component={TabBar} />
                        <RootStack.Screen name='Modal' component={ModalScreenContainer} />
                    </RootStack.Navigator>
                </NavigationContainer>
                {/*<TabBar />*/}
                <StatusBar backgroundColor={'white'} style='dark' />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App
