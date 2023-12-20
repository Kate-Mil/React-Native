import { AntDesign } from "@expo/vector-icons";
import { Image, View, StyleSheet } from "react-native";

export const AddPhoto = () => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} />
      <AntDesign name="pluscircleo" size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: -60,
    right: 128,

    width: 132,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  icon: {
    position: "relative",
    top: -12,
    left: 117,
    color: "#FF6C00",
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
});
