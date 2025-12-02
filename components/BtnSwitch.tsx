import { StyleSheet, Switch, Text, View } from "react-native";
import React, { useState } from "react";

const BtnSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Switch
      onValueChange={() => setIsEnabled(!isEnabled)}
      value={isEnabled}
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    />
  );
};

export default BtnSwitch;

const styles = StyleSheet.create({});
