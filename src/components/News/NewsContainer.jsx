import React from 'react'
import Header from '../../common/Header'
import News from './News'

const NewsContainer = (props) => {

    const loadScene = () => {
        props.navigation.navigate('Container', {name: 'Передал параметры, чекни плиз'})
    }
    return (
        <>
            <Header title={'News will be here...'} />
            <News loadScene={loadScene} />
        </>
    )
}

export default NewsContainer

