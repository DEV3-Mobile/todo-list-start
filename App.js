// import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from 'react-native';
//Task = todo item

export default function App() {

  const taskInputHandler = (enteredText) => {
    console.log(enteredText);
  }
  const addTaskHandler = () => {
    console.log("clicked");
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="add task..."
          style={styles.input}
          clearButtonMode="always"
          onChangeText={taskInputHandler}
        />
        <Button title="ADD" onPress={addTaskHandler} />
      </View>
      <ScrollView>
        <View style={styles.listItem}>
          <Text>Task 1</Text>
        </View>
        <View style={styles.listItem}>
          <Text>Task 2</Text>
        </View>
      </ScrollView>
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 10,//bestaat niet in CSS
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});