import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ToDoItem = (props) => {
  return (
      <TouchableOpacity activeOpacity={0.6} onPress={props.onDelete}>
    <View style={styles.listItem}>
      <Text>{props.number + 1 + "- " + props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ToDoItem;
