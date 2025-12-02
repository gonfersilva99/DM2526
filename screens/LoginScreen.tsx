import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import Login from "../components/Login";
import PopUp from "../components/PopUp";

const LoginScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View>
      <Login />
      <Pressable onPress={() => setIsVisible(true)} style={styles.button}>
        <Text style={styles.btnText}>Show Modal</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => setIsVisible(!isVisible)}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text>Eu sou um modal</Text>

            <Pressable
              onPress={() => setIsVisible(false)}
              style={styles.button}
            >
              <Text style={styles.btnText}>Close Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  btnText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    outlineColor: "gray",
    borderColor: "gray",
    outlineWidth: 2,
    borderWidth: 2,
    margin: 5,
    padding: 5,
    borderRadius: 5,
  },
  welcomeText: {
    fontSize: 30,
    marginVertical: 10,
  },
});
