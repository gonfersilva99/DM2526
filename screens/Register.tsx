import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { use, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { app } from "../firebase.config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (email: string, password: string) => {
    try {
      // Gets FirebaseApp and returns Auth object​
      const auth = getAuth(app);
      // Returns Promise < UserCredential >​
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // https://firebase.google.com/docs/reference/js/auth.md#sendemailverification​
      sendEmailVerification(userCred.user);

      // faz coisa depois do registo
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          console.log("User já existe");
          break;

        case "auth/invalid-email":
          console.log("Invalid email");
          break;

        case "auth/operation-not-allowed":
          console.log("Operation not allowed");
          break;

        case "auth/weak-password":
          console.log("Weak password");
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput style={styles.input} onChangeText={setPassword} />
      <Pressable style={styles.btn} onPress={() => register(email, password)}>
        Sign UP
      </Pressable>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    width: "80%",
    paddingHorizontal: 10,
  },
  btn: {
    backgroundColor: "cyan",
    padding: 5,
    borderRadius: 5,
  },
});
