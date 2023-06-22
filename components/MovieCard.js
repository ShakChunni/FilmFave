import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TouchableNativeFeedback,
  ImageBackground,
} from "react-native";

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { getPoster } from "../Services/MovieService";

const MovieCard = ({ title, poster, language, voteAverage, voteCount }) => {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity>
      <ImageBackground
        style={styles.movieCardsContainer}
        source={{ uri: getPoster(poster) }}
      >
        <View style={styles.imdbContainer}>
          <Image
            source={require("../assets/images/icons8-imdb-96.png")}
            style={{ width: 35, height: 35, borderBottomLeftRadius: 5 }}
          />
          <Text style={styles.imdbRating}>{voteAverage}</Text>
        </View>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "thumbs-up" : "thumbs-up-outline"}
            size={24}
            color={liked ? "#EFDCF9" : "#C55FFC"}
            style={{ position: "absolute", bottom: 10, right: 10 }}
          />
        </TouchableNativeFeedback>
      </ImageBackground>
      <View style={styles.movieTitle} numberOfLines={3}>
        <Text>{title}</Text>
        <View style={styles.movieLanguage}>
          <Text style={styles.movieLanguageText}>{language}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="thumbs-up"
              size={18}
              color="#FB4570"
              style={{ marginRight: 5 }}
            />
            <Text style={styles.movieRating}>{voteCount}</Text>
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
    color: "yellow",
  },
});
