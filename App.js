import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default () => {
  // Loading the font asynchronously using useFonts hook [10.2.0] naholey kaaaj kore nah :()
  const [loaded] = useFonts({
    Black: require("./assets/fonts/NunitoSans_10pt-Black.ttf"),
    Bold: require("./assets/fonts/NunitoSans_10pt-Bold.ttf"),
    Light: require("./assets/fonts/NunitoSans_10pt-Light.ttf"),
    Regular: require("./assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
    Italic: require("./assets/fonts/NunitoSans_10pt-BoldItalic.ttf"),
    SemiBold: require("./assets/fonts/NunitoSans_10pt-SemiBold.ttf"),
  });
  if (!loaded) {
    // font load nah holey, show the apploading screen
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
