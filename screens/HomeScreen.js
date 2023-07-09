import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import GenreCards from "../components/GenreCards";
import ItemSeparator from "../components/ItemSeparator";
import { StatusBar } from "expo-status-bar";
import MovieCard from "../components/MovieCard";
import {
  getNowPlayingMovies,
  getUpComingMovies,
  getPoster,
  getGenres,
} from "../services/MovieService";

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upComingMovies, setUpComingMovies] = useState({});
  const [genres, setGenres] = useState([{ id: 10130, name: "All" }]);
  useEffect(() => {
    getNowPlayingMovies().then((movieResponse) =>
      setNowPlayingMovies(movieResponse.data)
    );
    getUpComingMovies().then((movieResponse) =>
      setUpComingMovies(movieResponse.data)
    );
    getGenres().then((genreResponse) =>
      setGenres([...genres, ...genreResponse.data.genres])
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="light" translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> FilmFave </Text>
        <Text style={styles.headerSubTitle}> View All </Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <GenreCards
              genreName={item.name}
              active={item.name === activeGenre ? true : false}
              onPress={setActiveGenre}
            />
          )}
        />
      </View>
      <View>
        <FlatList //movie card
          data={nowPlayingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
            />
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Upcoming </Text>
        <Text style={styles.headerSubTitle}> View All </Text>
      </View>
      <View>
        <FlatList //upcoming movie card
          data={upComingMovies.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              size={0.7}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    paddingVertical: 25,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
  headerTitle: {
    fontFamily: "Italic",
    fontSize: 22,
    color: "#E6E6FA",
  },
  headerSubTitle: {
    fontFamily: "Black",
    fontSize: 16,
    color: "#EE82EE",
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});
