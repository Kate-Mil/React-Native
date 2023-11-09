import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

export const Background = ({ children }) => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/bg.png")}
        resizeMode="cover"
      >
        {children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {},
});
