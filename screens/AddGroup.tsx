import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  doc,
  setDoc,
  serverTimestamp,
  updateDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase.config";

const AddGroup = () => {
  const [groupName, setGroupName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [groups, setGroups] = useState<any>();

  const addGroup = async () => {
    try {
      const docRef = await addDoc(collection(db, "group"), {
        groupName: groupName,
        description: description,
      });

      console.log("ID do documento (automaticamente atribuído): ", docRef.id);
      //   const groupRef = doc(db, "group", "vnXgKVcYra1xXmnMecBV");

      //   await setDoc(groupRef, {
      //     groupName: groupName,

      //     timestamp: serverTimestamp(), // Server timestamp​
      //   });
    } catch (e) {
      console.error("Error ao adicionar documento: ", e);
    }
  };

  const deleteGroup = async () => {
    const groupRef = doc(db, "group", "vnXgKVcYra1xXmnMecBV");
    await deleteDoc(groupRef);
  };

  const filterGroup = async () => {
    try {
      const q = query(
        collection(db, "group"),
        where("groupName", "==", filter)
      );

      const querySnapshot = await getDocs(q);

      const results = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(results);
      return results;
    } catch (error) {
      console.error("Erro ao buscar grupos:", error);
      return [];
    }
  };
  const getAllGroups = async () => {
    const querySnapshot = await getDocs(collection(db, "group"));

    const results: any[] = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots​
      results.push(doc.data());
      console.log(doc.id, " => ", doc.data());
    });
    setGroups(results);
  };

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "group"), (snapshot) => {
      const groups = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGroups(groups);
      console.log("Groups: ", groups);
    });

    return () => unsub();
  }, []);
  return (
    <View style={styles.container}>
      <Text>AddGroup</Text>
      <TextInput
        placeholder="Group name"
        style={styles.input}
        onChangeText={setGroupName}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={setDescription}
      />
      <Pressable onPress={() => addGroup()} style={styles.btn}>
        <Text>Submit</Text>
      </Pressable>
      <Pressable onPress={() => deleteGroup()} style={styles.btn}>
        <Text>Delete</Text>
      </Pressable>
      <TextInput
        placeholder="Filter Group"
        style={styles.input}
        onChangeText={setFilter}
      />
      <Pressable onPress={() => filterGroup()} style={styles.btn}>
        <Text>Filter</Text>
      </Pressable>
      <Pressable onPress={() => getAllGroups()} style={styles.btn}>
        <Text>Get all groups</Text>
      </Pressable>
      {groups?.map((item) => (
        <Text>{item.groupName}</Text>
      ))}
    </View>
  );
};

export default AddGroup;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  input: {
    marginVertical: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "blue",
  },
  btn: {
    backgroundColor: "blue",
    padding: 5,
    marginVertical: 5,
  },
});
