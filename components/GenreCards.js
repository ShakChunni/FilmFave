import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";

const { width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const GenreCards = ({ genreName, active, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.cardsStyle,
        backgroundColor: active ? "#EE82EE" : "#000000",
      }}
      activeOpacity={0.5}
      onPress={() => onPress(genreName)}
    >
      <Text
        style={{ ...styles.genreText, color: active ? "#000000" : "#EE82EE" }}
      >
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

export default GenreCards;

const styles = StyleSheet.create({
  cardsStyle: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#fffff",
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FB6B90",
  },
});
