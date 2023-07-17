import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { getMovieID, getPoster } from "../services/MovieService";

const { height, width } = Dimensions.get("screen");

const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;

const MovieScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieID(movieId)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log("Error retrieving movie details:", error);
      });
  }, [movieId]);

  return (
    <ScrollView>
      <StatusBar style="light" translucent={false} />
      {movie && (
        <View style={styles.moviePosterImageContainer}>
          <Image
            style={styles.moviePosterImage}
            resizeMode="cover"
            source={{ uri: getPoster(movie.backdrop_path) }}
          />
        </View>
      )}
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
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    height: setHeight(35),
    width: setWidth(145),
  },
});
