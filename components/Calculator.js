import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native";

const Caluclator = () => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(parseInt(x) + parseInt(y));
  };

  const subtract = () => {
    setResult(parseInt(x) - parseInt(y));
  };

  const multiply = () => {
    setResult(parseInt(x) * parseInt(y));
  };

  const divide = () => {
    setResult(parseInt(x) / parseInt(y));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder={x}
        value={x}
        keyboardType="numeric"
        onChangeText={(e) => setX(e)}
      />
      <TextInput
        style={styles.input}
        placeholder={y}
        value={y}
        keyboardType="numeric"
        onChangeText={(e) => setY(e)}
      />
      <Text style={styles.result}>= {result}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={add} >
          <Text style={styles.buttonLabel}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={subtract} >
        <Text style={styles.buttonLabel}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={multiply} >
        <Text style={styles.buttonLabel}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={divide} >
        <Text style={styles.buttonLabel}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 40,
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  list: {
    marginTop: 20,
  },
  button: {
    margin: 40,
    backgroundColor: 'orange',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    margin: 10,
    marginLeft: 100,
    width: 200,
    justifyContent: "center",
    fontSize: 19,
    fontWeight: "bold",
  },
  result: {
    marginLeft: 150,
    marginBottom: 50,
    fontWeight: "bold",
    fontSize: 19,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 180,
  },
  buttonLabel: {
    fontSize: 24,
    fontWeight: "bold",
  }
});

export default Caluclator;
