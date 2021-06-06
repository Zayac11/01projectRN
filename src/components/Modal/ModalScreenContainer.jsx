import React, {useState} from 'react'
import ModalScreen from './ModalScreen'
import {addNewTask} from '../../redux/task-reducer'
import {useDispatch} from 'react-redux'
import {SafeAreaView} from 'react-native-safe-area-context'

const ModalScreenContainer = ({navigation}) => {

    const dispatch = useDispatch()

    const [title, setTitleValue] = useState('')

    const addTask = () => {
        const data = {
            title: title,
            date: (new Date).toLocaleDateString() + ' ' + (new Date).toLocaleTimeString(),
        }
        dispatch(addNewTask(data))
        setTitleValue('')
        navigation.goBack()
    }

    return (
        <SafeAreaView style={{backgroundColor: 'navy', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ModalScreen addTask={addTask} title={title} setTitleValue={setTitleValue}/>
        </SafeAreaView>
    )
}

export default ModalScreenContainer
