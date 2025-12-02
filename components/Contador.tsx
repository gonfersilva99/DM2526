import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

type ContadorProps = {
  valorInicial: number;
  counter: (value: number) => void;
  count?: number;
};

const Contador = ({ valorInicial, counter, count }: ContadorProps) => {
  return (
    <View>
      <Pressable onPress={() => counter(count + 1)}>
        <Text>Incrementar</Text>
      </Pressable>
    </View>
  );
};

export default Contador;

const styles = StyleSheet.create({});
