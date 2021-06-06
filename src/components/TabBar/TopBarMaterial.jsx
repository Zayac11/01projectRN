import React from 'react'
import {Entypo, Feather, FontAwesome5} from '@expo/vector-icons'
import {NavigationContainer} from '@react-navigation/native'
import TaskContainer from '../Task/TaskContainer'
import NewsContainer from '../News/NewsContainer'
import Container from '../Container/Container'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'

const Tab = createMaterialBottomTabNavigator()
const NewsStack = createStackNavigator()
const TasksStack = createStackNavigator()

function NewsStackScreen({navigation}) {
    return (
        <NewsStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#694fad'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <NewsStack.Screen
                name='News'
                component={NewsContainer}
                options={{title: 'Новости'}}
            />

            <NewsStack.Screen
                name='Container'
                component={Container}
                options={{title: 'Контейнер'}}
            />
        </NewsStack.Navigator>
    )
}

function TasksStackScreen({navigation}) {
    return (
        <TasksStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#2196f3'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <NewsStack.Screen
                name='Tasks'
                component={TaskContainer}
                options={{title: 'Задачи',
                    // headerLeft: () => (
                    //     <Feather name="menu" size={25} backgroundColor="#694fad" color="white" onPress={() => navigation.openDrawer()} />
                    // )
                }}
            />

        </TasksStack.Navigator>
    )
}

const TabBarTest = (props) => {

    const tasksLength = useSelector(state => state.task.tasks.length)

    return (
        <NavigationContainer>
            <Tab.Navigator
                shifting={true}
                initialRouteName='Task'
                activeColor='#fff'
            >
                <Tab.Screen
                    name='Task'
                    component={TasksStackScreen}
                    options={{
                        tabBarLabel: 'Задачи',
                        tabBarColor: '#2196f3',
                        tabBarIcon: ({color}) => (
                            <FontAwesome5
                                name='tasks'
                                size={26}
                                color={color}
                            />
                        ),
                        tabBarBadge: tasksLength,
                        tabBarBadgeStyle: {left: 10, top: 0},
                    }}
                />
                <Tab.Screen
                    name='News'
                    component={NewsStackScreen}
                    options={{
                        tabBarLabel: 'Новости',
                        tabBarColor: '#694fad',
                        tabBarIcon: ({color}) => (
                            <Entypo
                                name='news'
                                size={26}
                                color={color}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBarTest
