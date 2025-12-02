import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";

const BtnPressable = () => {
  return (
    <View>
      <Pressable
        onPress={() => console.log("Press event")}
        onPressIn={() => console.log("PressIn event")}
        onPressOut={() => console.log("PressOut event")}
      >
        <Text>Almost all together</Text>
      </Pressable>

      <Pressable onLongPress={() => console.log("PressLong event")}>
        <Text>LongPress</Text>
      </Pressable>
    </View>
  );
};

export default BtnPressable;

const styles = StyleSheet.create({});
