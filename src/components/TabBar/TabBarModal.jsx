import React, {useRef} from 'react'
import {StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import AddButton from '../Task/AddButton'
import {FontAwesome5} from '@expo/vector-icons'
import withInsets from '../../hoc/withInsets'

const TabBarModal = ({state, descriptors, navigation, insets,}) => {

    const onAdd = () => {
        navigation.navigate('Modal')
    }
    const ref = useRef()

    return (
        <>
            {/* show the AddButton only if it's the first screen (Home screen) */}
            {(state.index === 0) && (
                <AddButton onAdd={onAdd} bottomInset={insets.bottom} />
            )}
            <View style={{height: 55, flexDirection: 'row', backgroundColor: 'white'}}>
                {/* here we are mapping through the routes, defining its labels, configure the onPress functions */}
                {state.routes.map((route, index) => {
                    const {options} = descriptors[route.key]
                    let icon = options.tabBarIcon
                    let label
                    if(options.tabBarLabel === undefined) {
                        if(options.title === undefined) {
                            label = route.name
                        } else {
                            label = options.title
                        }
                    } else {
                        label = options.tabBarLabel
                    }
                    const isFocused = state.index === index

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        })

                        if(!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name)
                        }
                    }

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        })
                    }

                    return (
                        <TouchableOpacity
                            accessibilityRole='button'
                            accessibilityState={isFocused ? {selected: true} : {selected: false}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabButton}
                            key={route.key}
                        >
                            <View
                                style={styles.background}
                                focused={isFocused}
                                label={label}
                                ref={ref}
                            >
                                <View style={{
                                    flex: 1,
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end'
                                }}>

                                    <FontAwesome5 name={icon} size={24} color={isFocused ? '#2196f3' : '#000'} />
                                    <View label={label}>
                                        <Text
                                            style={isFocused ? {color: '#2196f3'} : {color: 'black'}}>{label.charAt(0).toUpperCase() + label.slice(1)}</Text>
                                    </View>
                                </View>

                            </View>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </>

    )
}

export default withInsets(TabBarModal)

const styles = StyleSheet.create({
    tabButton: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    background: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
    },
})
