import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/icon.png")}
      />
      <Text>My App</Text>
    </View>
  );
};

export default LogoTitle;

const styles = StyleSheet.create({});
