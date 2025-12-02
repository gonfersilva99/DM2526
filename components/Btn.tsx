import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Btn = () => {
  return (
    <Button
      onPress={() => console.log("Pressionei este botão!")}
      title="Submit"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default Btn;

const styles = StyleSheet.create({});
