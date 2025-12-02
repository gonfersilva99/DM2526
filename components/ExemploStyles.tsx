import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styles } from "../styles/styles";

const ExemploStyles = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text}>TEXTO</Text>
        <Text style={styles.text}>TEXTO</Text>
        <Text style={styles.text}>TEXTO</Text>
      </View>
      <View style={styles.container2}></View>
      <View style={styles.container3}></View>
    </View>
  );
};

export default ExemploStyles;
