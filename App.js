import React from "react";
import { Text, View } from "react-native";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "rb-regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "rb-bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "rb-medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RegistrationScreen />
    </View>
  );
};

export default App;
