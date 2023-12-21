import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const ShowPassword = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Показати</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  text: {
    position: "absolute",
    top: -52,
    right: 16,
    color: "#1B4371",
    textAlign: "center",
    fontFamily: "rb-regular",
    fontSize: 16,
  },
});
