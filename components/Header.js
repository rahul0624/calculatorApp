import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = () => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>Calculator</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: "teal",
    },
    title: {
      textAlign: "center",
      color: "black",
      fontSize: 20,
      fontWeight: "bold",
    },
  });

export default Header;