import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import idGen from './resources/idGenerator'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, { chave: idGen().toString(), value: enteredGoal }])
  }

  return (
    <View style={ styles.screen }>
      <GoalInput 
        goalInputHandler={goalInputHandler} 
        enteredGoal={enteredGoal} 
        addGoalHandler={addGoalHandler}
      />
      
      <FlatList
        keyExtractor={ (item, index) => item.chave }
        data={ courseGoals } 
        renderItem={ itemData => <GoalItem goalText={ itemData.item.value } />} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // height: '100%',
    // width: '100%', 
    //justifyContent: 'center',
    backgroundColor: 'azure',
  }, 
});
