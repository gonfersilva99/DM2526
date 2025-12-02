import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, [count]);

  return (
    <View>
      <Text>Effect</Text>
      <Text>{count}</Text>
      <Pressable onPress={() => setCount(count + 1)}>
        <Text>Incrementar</Text>
      </Pressable>
    </View>
  );
};

export default Effect;

const styles = StyleSheet.create({});
