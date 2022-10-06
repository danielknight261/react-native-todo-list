import React from "react";
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Platform } from "react-native";
import Task from "./components/Task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>{/* This is where tasks will go */}</View>
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
      </View>
    </View>
  );
}

// Write a task

<KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.writeTaskWrapper}
>
<TextInput />

<TouchableOpacity>
  <View style={styles.addWrapper}>
    <Text style={styles.addText}>+</Text>
  </View>
</TouchableOpacity>

</KeyboardAvoidingView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edeae1",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
});
