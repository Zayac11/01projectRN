import React from 'react'
import {Entypo, FontAwesome5} from '@expo/vector-icons'
import TaskContainer from '../Task/TaskContainer'
import {NavigationContainer} from '@react-navigation/native'
import NewsContainer from '../News/NewsContainer'
import Container from '../Container/Container'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'
import {useSelector} from 'react-redux'
import TabBarCustom from './TabBarCustom'

const Tab = createBottomTabNavigator()
const NewsStack = createStackNavigator()
const TasksStack = createStackNavigator()

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
                },
            }}>
            <NewsStack.Screen
                name='Tasks'
                component={TaskContainer}
                options={{title: 'Задачи'}}
            />

        </TasksStack.Navigator>
    )
}

function NewsStackScreen() {
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
                // tabBar={props => {
                //     return <TabBarCustom {...props} />
                // }}
                // screenOptions={({route}) => ({
                //     tabBarIcon: ({focused, color, size}) => {
                //         if(route.name === 'Задачи') {
                //             return (
                //                 <FontAwesome5
                //                     name='tasks'
                //                     size={size}
                //                     color={color}
                //                 />
                //             )
                //         } else if(route.name === 'Новости') {
                //             return (
                //                 <Entypo
                //                     name='news'
                //                     size={size}
                //                     color={color}
                //                 />
                //             )
                //         }
                //     },
                //     animationEnabled: true,
                // })}
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
                {/*<Tab.Screen name='Задачи' component={TasksStackScreen}*/}
                {/*            initialParams={{icon: 'tasks'}}*/}
                {/*            options={{tabBarBadge: tasksLength, tabBarBadgeStyle: {left: 10, top: 0}}} />*/}
                {/*<Tab.Screen name='Новости' component={NewsStackScreen} />*/}
                <Tab.Screen
                    name="Home"
                    component={TasksStackScreen}
                    options={{
                        tabBarButton: (props) => <TabBarCustom label="Задачи" icon='tasks' {...props} />,
                    }}
                />
                <Tab.Screen
                    name="Logger"
                    component={NewsStackScreen}
                    options={{
                        tabBarButton: (props) => <TabBarCustom label="Новости" icon='newspaper' {...props} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabBar
