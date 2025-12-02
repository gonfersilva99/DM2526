import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { app } from "../firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (email: string, password: string) => {
    try {
      // https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth​
      const auth = getAuth(app); // Return firebase.auth.Auth object​
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      // https://firebase.google.com/docs/reference/js/auth.user.md#userreload​
      await auth.currentUser.reload(); //Refreshes the user, if signed in​
      // Signed in ​
      // https://firebase.google.com/docs/reference/js/v8/firebase.auth#usercredential​
      const user = userCred.user;
      console.log("User", user);

      // navegar para home

      // ...​
    } catch (error) {
      const errCode = error.code;
      const errMessage = error.message;
      if (errCode === "auth/user-disabled")
        console.log("User disabled", errMessage);
      if (errCode === "auth/invalid-email")
        console.log("Invalid Email", errMessage); // email is not valid
      if (errCode === "auth/user-not-found")
        console.log("User not found", errMessage); //User not found​
      if (errCode === "auth/wrong-password")
        console.log("Wrong password"), errMessage; // Password is not correct​
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Text>Email</Text>
      <TextInput style={styles.input} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput style={styles.input} onChangeText={setPassword} />
      <Pressable style={styles.btn} onPress={() => login(email, password)}>
        Sign UP
      </Pressable>
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
