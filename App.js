import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context'
import {Provider} from 'react-redux'
import store from './src/redux/redux-store'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import TaskContainer from './src/components/Task/TaskContainer'
import NewsContainer from './src/components/News/NewsContainer'
import Container from './src/components/Container/Container'

const Tab = createBottomTabNavigator();
const NewsStack = createStackNavigator();

function NewsStackScreen() {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name="News"
                component={NewsContainer}
                options={{title: 'Новости', }}
            />
            <NewsStack.Screen
                name="Container"
                component={Container}
                options={{title: 'Контейнер',}}
                // headerStyle: {height: 50}, headerTintStyle: {height: 70}, headerTitleStyle: {height: 70}
            />
        </NewsStack.Navigator>
    );
}

const App = () => {
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
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
                            <Tab.Screen name="Новости" component={NewsStackScreen} />
                            {/*<Tab.Screen name="Home" component={Container} />*/}
                        </Tab.Navigator>
                    </NavigationContainer>
                    <StatusBar backgroundColor={'white'} style='dark' />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App
