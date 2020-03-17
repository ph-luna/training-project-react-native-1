import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const GoalItem = props => {
    return (
    <View style={ styles.listItem }>
        <Text>{ props.goalText }</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 8   
      }
})

export default GoalItem