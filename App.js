import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import ToDoItem from "./components/ToDoItem";
import ToDoInput from "./components/ToDoInput";
import ToDoHeader from './components/ToDoHeader';

export default function App() {
  const [toDos, setToDos] = useState([]);

  const addToDoHandler = (toDoTitle) => {
    setToDos((currentToDos) => [
      ...currentToDos,
      { key: Math.random().toString(), value: toDoTitle },
    ]);
  };

  return (
    <View style={styles.screen}>
      <ToDoHeader />
      <ToDoInput onAddToDo={addToDoHandler} />
      {/* in order to use scroll on the specific view component. Use ScrollView instead of View */}
      {/* <ScrollView style={{marginBottom:40}}>
      {toDos.map((toDo) => <View style={styles.listItem} key={toDo}><Text>{toDo}</Text></View>)}
      </ScrollView> */}
      {/* Use flatlist because this only renders items if the screen sees them */}
      <FlatList
        style={{ marginVertical: 40 }}
        data={toDos}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => (
          <ToDoItem title={itemData.item.value} number={itemData.index} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
