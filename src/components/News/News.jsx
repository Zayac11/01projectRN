import React from 'react'
import {Button, View} from 'react-native'

const News = (props) => {



    return (
        <View>
           <Button title='Перейти куда-нибудь' onPress={props.loadScene} />
        </View>
    )
}

export default News
