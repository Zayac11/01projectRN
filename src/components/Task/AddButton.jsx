import React, {useState} from 'react'
import {Animated, StyleSheet, Text, TouchableOpacity} from 'react-native'

const AddButton = ({onAdd, bottomInset }) => {

    const [scaleValue] = useState(new Animated.Value(0));
    const onButtonClicked = () => {
        // Don't forget about the callback function for Animated.timing.
        // After we finish scaling, we need to set the scale value back to 0;
        // If we don't do that, when we go back to the Home screen our button will still be scaled
        Animated.timing(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
            duration: 700,
        }).start(() => { scaleValue.setValue(0); });
        onAdd();
    };
    const scaleValueInterpolation = scaleValue.interpolate({
        inputRange: [0, 0.25, 1],
        outputRange: [1, 20, 30],
    });

    return (
        <>
            <Animated.View
                style={[styles.btnContainer,
                    {
                        transform: [{ scale: scaleValueInterpolation }],
                        bottom: 70 + bottomInset,
                    },
                ]}
            />
            <TouchableOpacity
                style={[styles.btnContainer, { bottom: 70 + bottomInset }]}
                onPress={onButtonClicked}
            >
                <Text style={styles.text}>
                    +
                </Text>
            </TouchableOpacity>
        </>
    )
}

export default AddButton

const styles = StyleSheet.create({

    btnContainer: {
        // backgroundColor: '#2196f3',
        backgroundColor: 'navy',
        width: 55,
        height: 55,
        borderRadius: 28,
        position: 'absolute',
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        // bottom: 20,
        zIndex: 1,
        elevation: 1,
    },

    text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
})
