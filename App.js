import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView, SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import store from './src/redux/redux-store'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import TaskContainer from './src/components/Task/TaskContainer'

const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <SafeAreaView style={styles.container}>
                    <NavigationContainer>
                        <Tab.Navigator
                            tabBarOptions={{
                                // activeTintColor: 'default',
                                inactiveTintColor: 'black',
                                activeBackgroundColor: 'white',
                                tabStyle: {
                                    flex: 1,
                                    justifyContent: 'center',
                                },
                                labelStyle: {
                                    fontSize: 12,
                                }
                            }}
                        >
                            <Tab.Screen name="Задачи" component={TaskContainer} />
                            <Tab.Screen name="Тоже задачи" component={TaskContainer} />
                            {/*<Tab.Screen name="Home" component={Container} />*/}
                        </Tab.Navigator>
                    </NavigationContainer>
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
