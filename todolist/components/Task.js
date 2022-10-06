import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>

        <Text style={styles.itemText}>{props.text}</Text>
      </View>
     <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#ffffff",
        padding: 15,
        borderRadius: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#cd2028",
        opacity: 0.6,
        borderRadius: 6,
        marginRight: 15
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#166c96',
        borderWidth: 2,
        borderRadius: 6
    },
});

export default Task;
