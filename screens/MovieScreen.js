import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";

const { height, width } = Dimensions.get("screen");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * h;

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  return (
    <ScrollView>
      <StatusBar style="light" translucent={false} />
      <View>
        <Image />
      </View>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
  },
});
