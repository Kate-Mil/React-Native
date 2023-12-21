import React from "react";
import { StyleSheet } from "react-native";
import { RegistrationScreen } from "./src/screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { LoginScreen } from "./src/screens/LoginScreen";

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
    // <LoginScreen />
    <RegistrationScreen />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
