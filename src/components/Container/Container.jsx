import React from 'react'
import {Alert, Button, Image, StyleSheet, Text, View, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'
import {StatusBar} from 'expo-status-bar'
import {useSelector} from 'react-redux'

const Container = () => {

    return (
        <View style={styles.container}>
            <View>
                <Text selectionColor={'red'} selectable={true} accessible={true} accessibilityLabel={'Парарарар'}
                      accessibilityHint={'Что будет если?????'}>Kirill</Text>
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => Alert.alert('SUUUB', 'MESSAGEE', [{text: 'OK', onPress: () => console.log('djashdsaj')}, {text: 'Text text', onPress: () => console.log('Aburdozik')}])}
                    title='Ссюда'

                />
                {/*<Button*/}
                {/*    onPress={() => alert('Okey')}*/}
                {/*    title='okey'*/}
                {/*/>*/}
            </View>
            <View style={styles.button}>
                <Button
                    // for ios only
                    onPress={() => Alert.prompt('textich', 'bbomm', text => console.log(text))}
                    title='promt'
                />
            </View>
            <TouchableWithoutFeedback onPress={() => alert('Kartinka')}>
                <Image blurRadius={3} source={{
                    width: 200,
                    height: 100,
                    uri:'https://st.depositphotos.com/1760224/3660/i/600/depositphotos_36606389-stock-photo-sport-success-on-sunset-background.jpg'
                }}

                />
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
    },

    button: {
        marginBottom: 30,
    }
})
