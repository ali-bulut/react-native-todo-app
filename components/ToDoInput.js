import React, {useState} from "react";

import { View, Button, StyleSheet, TextInput, Modal } from "react-native";

const ToDoInput = (props) => {
  const [enteredToDo, setEnteredToDo] = useState('');

  const toDoInputHandler = (enteredText) => {
    setEnteredToDo(enteredText);
  }

  const addToDoHandler = () => {
    props.onAddToDo(enteredToDo);
    setEnteredToDo('');
  }

  const cancelToDoAdditionHandler = () => {
    props.onCancel();
    setEnteredToDo('');
  }

  return (
      <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="New ToDo"
          value={enteredToDo}
          onChangeText={toDoInputHandler}
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}><Button title="Cancel" color="red" onPress={cancelToDoAdditionHandler}/></View>
        {/* we should write onPress as arrow function in order to auto bind 'this' keyword and also parameter */}
        <View style={styles.button}><Button title="Add" onPress={addToDoHandler} /></View>
        </View>
      </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    input: {
      width: '80%',
      marginBottom: 10,
      borderColor: 'black',
      borderWidth: 1,
      padding: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
  });

export default ToDoInput;
