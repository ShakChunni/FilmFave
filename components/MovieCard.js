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

const MovieCard = ({
  title,
  poster,
  language,
  voteAverage,
  voteCount,
  size,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <ImageBackground
        style={{
          ...styles.movieCardsContainer,
          width: 230 * size,
          height: 360 * size,
        }}
        source={{ uri: getPoster(poster) }}
      >
        <View style={{ ...styles.imdbContainer, paddingVertical: 3 * size }}>
          <Image
            source={require("../assets/images/icons8-imdb-96.png")}
            style={{
              width: 30,
              height: 30,
              borderBottomLeftRadius: 5,
              height: 20 * size,
              width: 50 * size,
            }}
          />
          <Text
            style={{
              ...styles.imdbRating,
              marginRight: 5 * size,
              fontSize: 14 * size,
            }}
          >
            {voteAverage}
          </Text>
        </View>
        <TouchableNativeFeedback onPress={() => setLiked(!liked)}>
          <Ionicons
            name={liked ? "thumbs-up" : "thumbs-up-outline"}
            size={24 * size}
            color={liked ? "#FB8DA0" : "#FB6B90"}
            style={{ position: "absolute", bottom: 10, right: 10 }}
          />
        </TouchableNativeFeedback>
      </ImageBackground>
      <View
        style={{ ...styles.movieTitle, width: 230 * size }}
        numberOfLines={3}
      >
        <Text style={styles.movieTitleText}>{title}</Text>
        <View style={styles.movieLanguageLike}>
          <Text style={styles.movieLanguageText}>{language}</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="thumbs-up"
              size={15 * size}
              color="#FB4570"
              style={{ marginRight: 2, marginTop: 7 }}
            />
            <Text style={styles.movieRating}>{voteCount}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

MovieCard.defaultProps = {
  size: 1,
};

export default MovieCard;

const styles = StyleSheet.create({
  movieCardsContainer: {
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    width: 230,
    fontFamily: "Bold",
    fontSize: 12,
    marginTop: 5,
    paddingVertical: 2,
  },
  movieTitleText: {
    fontFamily: "Bold",
    fontSize: 14,
    color: "#000000",
    paddingVertical: 1,
  },

  movieLanguageLike: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  movieLanguageText: {
    justifyContent: "space-between",
    fontFamily: "Italic",
    fontSize: 12,
    color: "#FB6B90",
    marginTop: 5,

    paddingVertical: 2,
  },
  movieRating: {
    marginTop: 5,
    paddingVertical: 2,
    fontFamily: "Bold",
    fontSize: 12,
    paddingRight: 5,
    color: "#FB6B90",
  },

  imdbContainer: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    borderBottomEndRadius: 5,
    borderTopRightRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 3,
  },
  imdbRating: {
    fontFamily: "Bold",
    marginRight: 5,
    color: "#EFEBE0",
  },
});
