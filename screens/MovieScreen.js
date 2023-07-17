import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MovieScreen = ({ route, navigation }) => {
  return (
    <View>
      <StatusBar style="light" translucent={false} />
      <Text>MovieScreen</Text>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({});
