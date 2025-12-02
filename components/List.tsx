import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const DATA = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
  {
    id: "4",
    title: "Forth Item",
  },
  {
    id: "5",
    title: "Fifth Item",
  },
];

const List = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      keyExtractor={(item) => item.id}
    />
  );
};

export default List;

const styles = StyleSheet.create({});
