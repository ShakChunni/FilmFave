import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
const setWidth = (w) => (width / 100) * w;

const GenreCards = React.memo(({ genreName, active, onPress }) => {
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
});

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

export default GenreCards;
