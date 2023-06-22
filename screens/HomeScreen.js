import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import GenreCards from "../components/GenreCards";
import ItemSeparator from "../components/ItemSeparator";
import { StatusBar } from "expo-status-bar";
import MovieCard from "../components/MovieCard";
import { getNowPlayingMovies } from "../Services/MovieService";

const Genres = ["All", "Action", "Comedy", "Drama", "Horror", "Sci-Fi"];

const HomeScreen = () => {
  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  useEffect(() => {
    getNowPlayingMovies().then((movieResponse) =>
      setNowPlayingMovies(movieResponse.data)
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" translucent={false} backgroundColor="white" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> FilmFave </Text>
        <Text style={styles.headerSubTitle}> View All </Text>
      </View>
      <View style={styles.genreListContainer}>
        <FlatList
          data={Genres}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <GenreCards
              genreName={item}
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
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
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
  },
  headerSubTitle: {
    fontFamily: "Black",
    fontSize: 16,
    color: "#057DFE",
  },
  genreListContainer: {
    paddingVertical: 10,
  },
});
