import React, {useRef} from 'react';
import {StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

// const bgColors = {
//     home: '#ffe1c5',
//     logger: '#e5c1e5',
//     documents: '#d7d8f8',
//     menu: '#bce3fa',
// };
//
// const textColors = {
//     home: '#c56b14',
//     logger: '#f37ff3',
//     documents: '#4b458c',
//     menu: '#2d9cdb',
// };

function Tab({label, accessibilityState, onPress, icon}) {

    const focused = accessibilityState.selected;
    // const icon = !focused ? Images.icons[label] : Images.icons[`${label}Focused`];

    // const transition = (
    //     <Transition.Sequence>
    //         <Transition.Out type="fade" durationMs={0} />
    //         <Transition.Change interpolation="easeInOut" durationMs={100} />
    //         <Transition.In type="fade" durationMs={10} />
    //     </Transition.Sequence>
    // );

    const ref = useRef();

    return (
        <TouchableOpacity
            style={{flex:1}}
            onPress={() => onPress()}
        >
            <View
                style={styles.background}
                focused={focused}
                label={label}
                ref={ref}
            >
                <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end'}}>

                    <FontAwesome5 name={icon} size={24} color={focused ? '#2196f3' : '#000'} />
                    <View style={[styles.label]}
                          label={label}>
                        <Text style={focused ? {color: '#2196f3'} : {color: 'black'}}>{label.charAt(0).toUpperCase() + label.slice(1)}</Text>
                    </View>
                </View>

            </View>
        </TouchableOpacity>
    );
}

export default Tab;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,

    },
    label: {

    },
})
