import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = props => {
    return (
        <View style={ styles.container }>
            <TextInput 
                placeholder="Course Goal" 
                style={ styles.input }
                onChangeText={ props.goalInputHandler }
                value={ props.enteredGoal }
            />
            <Button title="Add" onPress={ props.addGoalHandler } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 10
    },
    
    input: { 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        width: '80%',
    },
})

export default GoalInput