import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Groups = ({ route, navigation }) => {
  const { id, name } = route.params;
  return (
    <View>
      <Text>Groups</Text>
      <Text>{id}</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({});
