import React from "react";
import { Text, View } from "react-native";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Try editing me! 🎉</Text>
      <RegistrationScreen />
    </View>
  );
};

export default App;
