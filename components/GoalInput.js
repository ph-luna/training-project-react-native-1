import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

function GoalInput(props) {

    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = enteredText => setEnteredGoal(enteredText)

    const addGoalInput = () => {
        props.addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }
    
    const cancelAdditionHandler = () => {
        props.onCancel()
        setEnteredGoal('')
    }

    return (
        <Modal visible={ props.visible } animationType="slide">
            <View style={ styles.container }>
                <TextInput 
                    placeholder="Course Goal" 
                    style={ styles.input }
                    onChangeText={ goalInputHandler }
                    value={ enteredGoal }
                    multiline={ true }
                    numberOfLines={ 15 }   
                />
                <View style={ styles.buttonsView }>
                    <View style={ styles.buttons }>
                        <Button title="Cancel" color="red" onPress={ cancelAdditionHandler } />
                    </View>
                    <View style={ styles.buttons }>
                        <Button title="Add" onPress={ addGoalInput } />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginVertical: 10,
        flex: 1,
        backgroundColor: '#eb9234',
    },
    
    input: { 
        borderColor: '#fff',
        borderRadius: 20, 
        borderWidth: 1, 
        padding: 10,
        width: '80%',
        marginBottom: 20,
        color: "#fff",
        textAlignVertical: 'top',
        fontFamily: 'dosis-bold'
    },

    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },

    buttons: {
        width: "30%",
    },

})

export default GoalInput