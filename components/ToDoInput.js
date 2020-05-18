import React, {useState} from "react";

import { View, Button, StyleSheet, TextInput } from "react-native";

const ToDoInput = (props) => {
  const [enteredToDo, setEnteredToDo] = useState('');

  const toDoInputHandler = (enteredText) => {
    setEnteredToDo(enteredText);
  }

  return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New ToDo"
          value={enteredToDo}
          onChangeText={toDoInputHandler}
        />
        {/* we should write onPress as arrow function in order to auto bind 'this' keyword and also parameter */}
        <Button title="Add" onPress={() => props.onAddToDo(enteredToDo)} />
      </View>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center'
    },
    input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    }
  });

export default ToDoInput;
