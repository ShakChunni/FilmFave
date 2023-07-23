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
import { APPEND_TO_RESPONSE as AR } from "../services/APIs";

const { height, width } = Dimensions.get("screen");
const setHeight = (h) => (height / 100) * h;
const setWidth = (w) => (width / 100) * w;
const MovieScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const [movie, setMovie] = useState({});
  useEffect(() => {
    getMovieID(id, `${AR.VIDEOS}`).then((res) => setMovie(res.data));
  }, []);

  return (
    <ScrollView>
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
          <Feather name="chevron-left" size={35} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Share</Text>
      </View>
      <TouchableOpacity
        style={styles.playButtonStyle}
        onPress={() => Linking.openURL(getVideo(movie.videos.results[0].key))}
      >
        <Ionicons name="play-circle" size={60} color="#FFFFFF" />
      </TouchableOpacity>
      <ItemSeparator height={setHeight(37)} />
      <Text>{movie.title}</Text>
    </ScrollView>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
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
});
