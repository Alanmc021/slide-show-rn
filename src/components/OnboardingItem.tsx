import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";

export default function OnboardingItem({ item }) {
  const { width } = useWindowDimensions();
  return (
    <>
      <View style={[styles.container, { width }]}>
        <Image
          source={item.image}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  descriptionContainer: {
    flex: 0.3,
  },
  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  },
  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },
});