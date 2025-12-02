import { StyleSheet, Text, View, Alert, Pressable } from "react-native";
import React from "react";

const PopUp = () => {
  return (
    <Pressable
      onPress={() =>
        Alert.alert(
          "Alert Title",
          "My Alert Msg",
          [
            {
              text: "Ask me later",

              onPress: () => console.log("Ask me later pressed"),
            },

            {
              text: "Cancel",

              onPress: () => console.log("Cancel Pressed"),

              style: "cancel",
            },

            { text: "OK", onPress: () => console.log("OK Pressed") },
          ],

          { cancelable: false }
        )
      }
    >
      <Text>Show Alert</Text>
    </Pressable>
  );
};

export default PopUp;

const styles = StyleSheet.create({});
