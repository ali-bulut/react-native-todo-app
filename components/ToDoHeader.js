import React from 'react';

import {View, Text} from 'react-native'

const ToDoHeader = () => {
    return (
        <View style={{ alignItems: "center" }}>
        <Text
          style={{
            fontSize: 30,
            fontStyle: "italic",
            fontFamily: "Times New Roman",
            fontWeight: "500",
          }}
        >
          TODO APP
        </Text>
      </View>
    );
};

export default ToDoHeader;