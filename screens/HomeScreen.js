import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import GenreCards from "../components/GenreCards";
import ItemSeparator from "../components/ItemSeparator";
import { StatusBar } from "expo-status-bar";
import MovieCard from "../components/MovieCard";
import {
  getNowPlayingMovies,
  getUpComingMovies,
  getGenres,
  getNowPlayingTVShows,
  searchMovies,
} from "../services/MovieService";

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [activeGenre, setActiveGenre] = useState("All");
  const [nowPlayingMovies, setNowPlayingMovies] = useState({});
  const [upComingMovies, setUpComingMovies] = useState({});
  const [nowPlayingTVShows, setNowPlayingTVShows] = useState({});
  const [genres, setGenres] = useState([{ id: 10130, name: "All" }]);
  useEffect(() => {
    getNowPlayingMovies().then((movieResponse) =>
      setNowPlayingMovies(movieResponse.data)
    );
    getUpComingMovies().then((movieResponse) =>
      setUpComingMovies(movieResponse.data)
    );
    getNowPlayingTVShows().then((tvShowResponse) =>
      setNowPlayingTVShows(tvShowResponse.data)
    );
    getGenres().then((genreResponse) =>
      setGenres([...genres, ...genreResponse.data.genres])
    );
  }, []);

  // Function to handle the search when the user types in the search bar
  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() !== "") {
      searchMovies(query)
        .then((response) => setSearchResults(response.data.results))
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    } else {
      setSearchResults([]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#000000" style="light" translucent={false} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> FilmFave </Text>
        <Text style={styles.headerSubTitle}> Welcome, user! </Text>
      </View>
      <View style={styles.genreListContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for movies..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
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
        <FlatList
          data={
            searchQuery.trim() === "" ? nowPlayingMovies.results : searchResults
          }
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
              notLiked={true}
              onPress={() => navigation.navigate("Movie", { id: item.id })}
            />
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> Upcoming Movies </Text>
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
              notLiked={false}
            />
          )}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}> TV Shows </Text>
      </View>
      <View>
        <FlatList
          data={nowPlayingTVShows.results}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }) => (
            <MovieCard
              title={item.name}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              size={0.7}
              notLiked={false}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchBar: {
    padding: 10,
    backgroundColor: "#fff",
  },
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
