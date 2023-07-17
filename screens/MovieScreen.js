import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const MovieScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} />
      <Text>MovieScreen</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
