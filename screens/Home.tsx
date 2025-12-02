import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { app } from "../firebase.config";

const Home = ({ navigation }) => {
  // useEffect(() => {
  //   const fff = async () => {
  //     try {
  //       // Gets FirebaseApp and returns Auth object​
  //       const auth = getAuth(app); // Access to authentication service​
  //       onAuthStateChanged(auth, async (user) => {
  //         // Signin as anonymous​
  //         if (user === null) await signInAnonymously(auth);
  //         // Access to data that does not require personal authentication​
  //         // getPublicData();
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fff();
  // }, []);

  return (
    <View>
      <Text>HOME</Text>
      {/* <Button
        title="Go to Groups"
        onPress={() =>
          navigation.navigate("Groups", { name: "Awesome Groups" })
        }
      /> */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
