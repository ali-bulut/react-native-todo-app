import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredToDo, setEnteredToDo] = useState('');

  const [toDos, setToDos] = useState([]);

  const toDoInputHandler = (enteredText) => {
    setEnteredToDo(enteredText);
  }

  const addToDoHandler = () => {
    setToDos(currentToDos => [...currentToDos, {key: Math.random().toString(), value: enteredToDo}]);
  }

  return (
    <View style={styles.screen}>
      <View style={{alignItems:'center'}}><Text style={{fontSize:30, fontStyle:'italic', fontFamily:'Times New Roman', fontWeight:'500'}}>TODO APP</Text></View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="New ToDo" value={enteredToDo} onChangeText={toDoInputHandler} />
        <Button title="Add" onPress={addToDoHandler} />
      </View>
      {/* in order to use scroll on the specific view component. Use ScrollView instead of View */}
      {/* <ScrollView style={{marginBottom:40}}>
      {toDos.map((toDo) => <View style={styles.listItem} key={toDo}><Text>{toDo}</Text></View>)}
      </ScrollView> */}
      {/* Use flatlist because this only renders items if the screen sees them */}
      <FlatList style={{marginVertical:40}} data={toDos} keyExtractor={(item,index) => item.key} renderItem={itemData => (
        <View style={styles.listItem}><Text>{itemData.index+1 + "- " + itemData.item.value}</Text></View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding:50
  },
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
