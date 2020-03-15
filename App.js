import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input}
          />
        <Button title="Add"/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // height: '100%',
    // width: '100%', 
    //justifyContent: 'center',
    // backgroundColor: 'azure',
  },

  input: { 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10,
    width: '80%',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center'
  }
});
