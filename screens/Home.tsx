import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Groups"
        onPress={() =>
          navigation.navigate("Groups", { name: "Awesome Groups" })
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
