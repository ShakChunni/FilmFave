import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  Share,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { getMovieID, getPoster, getVideo } from "../services/MovieService";
import ItemSeparator from "../components/ItemSeparator";
import { Ionicons, Feather } from "@expo/vector-icons";
import { appendToResponse } from "../services/APIs";

const { height, width } = Dimensions.get("screen");
const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;
const MovieScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState({});
  const [isCastSelected, setIsCastSelected] = useState(true);

  useEffect(() => {
    getMovieID(id, `${appendToResponse.VIDEOS}, ${appendToResponse.CREDITS}`)
      .then((res) => {
        console.log("Movie Data:", res.data); // Check the movie data

        // Check if credits data exists
        if (res.data.credits) {
          console.log("Credits Data:", res.data.credits); // Check the credits data
          console.log("Cast Members:", res.data.credits.cast); // Check the cast members data
        } else {
          console.log("Credits Data Not Available");
        }

        setMovie(res.data);
      })
      .catch((error) => console.error("Error fetching movie details:", error));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.moviePosterImageContainer}>
        <LinearGradient
          colors={["rgba(0,0,0,0.5)", "rgb(217, 217, 217, 0)"]}
          start={[0, 0.3]}
          style={styles.linearGradient}
        />
        <Image
          style={styles.moviePosterImage}
          resizeMode="cover"
          source={{ uri: getPoster(movie.backdrop_path) }}
        />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.goBack()}
        >
          <Feather name="chevron-left" size={35} color="#EE82EE" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Share</Text>
      </View>
      <TouchableOpacity
        style={styles.playButtonStyle}
        onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}
      >
        <Ionicons name="play-circle" size={60} color="#EE82EE" />
      </TouchableOpacity>
      <ItemSeparator height={setHeight(37)} />
      <View style={styles.movieTitleContainer}>
        <Text style={styles.movieTitle}>
          {movie?.original_title}{" "}
          <Text style={styles.status}>{movie.status}</Text>
        </Text>
        <View style={styles.row}>
          <Image
            source={require("../assets/images/icons8-imdb-96.png")}
            style={{
              borderBottomLeftRadius: 5,
              height: 20,
              width: 40,
            }}
          />
          <Text style={styles.ratingText}>{movie?.vote_average}</Text>
        </View>
      </View>
      <Text style={styles.genreText}>
        {movie?.genres?.map((genre) => genre?.name)?.join(", ")} |{" "}
        {movie?.runtime} Min
      </Text>
      <Text style={styles.genreText}>{movie?.original_language}</Text>
      <View style={styles.overviewContainer}>
        <Text style={styles.overviewTitle}>Overview</Text>
        <Text style={styles.overviewText}>{movie?.overview}</Text>
      </View>
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  status: {
    color: "#E6E6FA",
    fontFamily: "Italic",
    fontSize: 14,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: "center",
    position: "absolute",
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  },
  linearGradient: {
    width: setWidth(100),
    height: setHeight(6),
    position: "absolute",
    top: 0,
    elevation: 9,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    right: 0,
    left: 0,
    top: 50,
    elevation: 20,
    paddingHorizontal: 20,
    position: "absolute",
  },
  headerText: {
    color: "#ffffff",
    fontFamily: "Bold",
    fontSize: 16,
  },
  playButtonStyle: {
    position: "absolute",
    top: 110,
    left: setWidth(50) - 70 / 2,
    elevation: 10,
  },
  movieTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  movieTitle: {
    color: "#EE82EE",
    fontFamily: "Bold",
    fontSize: 18,
    width: setWidth(60),
  },
  ratingText: {
    marginLeft: 5,
    color: "yellow",
    fontFamily: "Black",
    fontSize: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  genreText: {
    color: "#E6E6F8",
    paddingHorizontal: 20,
    paddingTop: 5,
    fontFamily: "Regular",
    fontSize: 13,
  },
  overviewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overviewTitle: {
    color: "#EE82EE",
    fontFamily: "Black",
    fontSize: 18,
  },
  overviewText: {
    color: "#fff",
    paddingVertical: 5,
    fontFamily: "Bold",
    fontSize: 16,
    textAlign: "justify",
  },
});
