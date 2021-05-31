import React from 'react'
import {Entypo, FontAwesome5} from '@expo/vector-icons'
import TaskContainer from '../Task/TaskContainer'
import {NavigationContainer} from '@react-navigation/native'
import NewsContainer from '../News/NewsContainer'
import Container from '../Container/Container'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'

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

const TabBar = (props) => {

    const tasksLength = useSelector(state => state.task.tasks.length)

    return (
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
                            options={{tabBarBadge: tasksLength, tabBarBadgeStyle: {left: 10, top: 0}}} />
                <Tab.Screen name='Новости' component={NewsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar
