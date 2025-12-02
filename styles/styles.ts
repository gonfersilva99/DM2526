import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "red",
    flexDirection: "column",
  },
  container1: {
    flex: 2,
    backgroundColor: "blue",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container2: { flex: 2, backgroundColor: "green" },
  container3: { flex: 1, backgroundColor: "yellow" },
  text: {
    color: "white",
    fontSize: 30,
  },
});
