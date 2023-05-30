import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableNativeFeedback,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const MovieCard = ({title, language, voteAverage, voteCount, poster}) => {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity>
      <View style={styles.movieCardsContainer}>
        <View style={styles.imdbContainer}>
          <Image
            source={require("../assets/images/icons8-imdb-96.png")}
            style={{ width: 35, height: 35, borderBottomLeftRadius: 5 }}
          />
          <Text style={styles.imdbRating}>10.0</Text>
        </View>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "thumbs-up" : "thumbs-up-outline"}
            size={24}
            color={liked ? "#000000" : "#FFFFFF"}
            style={{ position: "absolute", bottom: 10, right: 10 }}
          />
        </TouchableNativeFeedback>
      </View>
      <View style={styles.movieTitle} numberOfLines={3}>
        <Text>Movie name</Text>
        <View style={styles.movieLanguage}>
          <Text style={styles.movieLanguageText}>Language (Rating)</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="thumbs-up"
              size={18}
              color="#000000"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.movieRating}>100%</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;

const styles = StyleSheet.create({
  movieCardsContainer: {
    height: 340,
    width: 230,
    backgroundColor: "pink",
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    width: 230,
    fontFamily: "Italic",
    fontSize: 12,
    color: "#5C5C5C",
    marginTop: 5,
    paddingVertical: 2,
  },
  movieLanguage: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  movieLanguageText: {
    fontFamily: "Bold",
    fontSize: 8,
    color: "#000000",
    marginTop: 5,
    paddingVertical: 2,
  },
  movieRating: {
    fontFamily: "Bold",
    fontSize: 12,
    paddingRight: 5,
  },

  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "Yellow",
    borderBottomEndRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 3,
  },
  imdbRating: {
    fontFamily: "Regular",
    marginRight: 5,
    color: "#000000",
  },
});
