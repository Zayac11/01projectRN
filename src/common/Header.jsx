import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'black',
    },

    title: {
        textAlign: 'center'
    },
})
