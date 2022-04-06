import {StyleSheet, View } from "react-native";
import Caluclator from "./components/Calculator";
import Header from "./components/Header";

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <Caluclator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
