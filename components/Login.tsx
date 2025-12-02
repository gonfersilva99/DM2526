import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import BtnSwitch from "./BtnSwitch";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.welcomeText}>Bem vindo à minha aplicação</Text>
      <TextInput
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        style={styles.input}
      />
      <Pressable
        onPress={() => console.log("Login credentials", username, password)}
        style={styles.button}
      >
        <Text style={styles.btnText}>Login</Text>
      </Pressable>

      <BtnSwitch />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
