import { StyleSheet, Text, View } from "react-native";
import React from "react";

type SomaProps = {
  num1: number;
  num2: number;
};

const Soma = ({ num1, num2 }: SomaProps) => {
  const resultado = () => num1 + num2;
  const resultado2 = num1 + num2;
  return (
    <View>
      <Text>{num1 + num2}</Text>
    </View>
  );
};

export default Soma;

const styles = StyleSheet.create({});
