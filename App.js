import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
import idGen from './resources/idGenerator'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  return Font.loadAsync({
    'dosis-bold': require('./assets/fonts/Dosis-Bold.ttf')
  })
}


export default function App() {
  const [fontData, setFontData] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])
  const [addMode, setAddMode] = useState(false)

  if(!fontData){
    return (
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={ ()=> setFontData(true) }
      />
    )
  }

  const addGoalHandler = goalValue => {
    setCourseGoals(currentGoals => 
      [...currentGoals, { chave: idGen().toString(), value: goalValue }]
    )
    setAddMode(false)
  }
  
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.chave !== goalId)
    })
  }

  const cancelAdditionHandler = () => {
    setAddMode(false)
  }

  return (
    <View style={ styles.screen }>
      <Button title="Add New Goal" onPress={() => setAddMode(true)} />
      <GoalInput
        visible={ addMode }  
        addGoalHandler={ addGoalHandler }
        onCancel={ cancelAdditionHandler }
      />
      
      <FlatList
        keyExtractor={ (item) => item.chave }
        data={ courseGoals } 
        renderItem={ itemData => 
          <GoalItem 
            onDelete={ removeGoalHandler.bind(this, itemData.item.chave) } 
            goalText={ itemData.item.value } 
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1, 
    //justifyContent: 'center',
    backgroundColor: '#9feb34',
    fontFamily: 'dosis-bold',
  }, 
});
