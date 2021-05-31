import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Animated} from 'react-native'
import {SafeAreaProvider, initialWindowMetrics} from 'react-native-safe-area-context'
import {Provider, useSelector} from 'react-redux'
import store from './src/redux/redux-store'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import TaskContainer from './src/components/Task/TaskContainer'
import NewsContainer from './src/components/News/NewsContainer'
import Container from './src/components/Container/Container'
import {FontAwesome5, Entypo} from '@expo/vector-icons'

const Tab = createBottomTabNavigator()
const NewsStack = createStackNavigator()

function NewsStackScreen() {
    return (
        <NewsStack.Navigator>
            <NewsStack.Screen
                name='News'
                component={NewsContainer}
                options={{title: 'Новости'}}
            />

            <NewsStack.Screen
                name='Container'
                component={Container}
                options={{title: 'Контейнер'}}
                // headerStyle: {height: 50}, headerTintStyle: {height: 70}, headerTitleStyle: {height: 70}
            />
        </NewsStack.Navigator>
    )
}

const App = () => {

    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Provider store={store}>
                <NavigationContainer>
                    <Tab.Navigator

                        screenOptions={({route}) => ({
                            tabBarIcon: ({focused, color, size}) => {
                                if(route.name === 'Задачи') {
                                    return (
                                        <FontAwesome5
                                            name='tasks'
                                            size={size}
                                            color={color}
                                        />
                                    )
                                } else if(route.name === 'Новости') {
                                    return (
                                        <Entypo
                                            name='news'
                                            size={size}
                                            color={color}
                                        />
                                    )
                                }
                            },
                            animationEnabled: true,
                        })}
                        tabBarOptions={{
                            // activeTintColor: 'blue',
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
                        <Tab.Screen name='Задачи' component={TaskContainer}
                                    options={{tabBarBadge: 2, tabBarBadgeStyle: {left: 10, top: 0}}} />
                        <Tab.Screen name='Новости' component={NewsStackScreen} />
                        {/*<Tab.Screen name="Home" component={Container} />*/}
                    </Tab.Navigator>
                </NavigationContainer>
                <StatusBar backgroundColor={'white'} style='dark' />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App
