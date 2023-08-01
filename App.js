// import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { COLORS, icons, images, SIZES, SAFEAREAVIEW } from "./constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "./components";
import Home from "./pages/home";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   header: () => null,
      //   animationEnabled: false,
      //   animation: "none",
      // }}
      >
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.menu}
                dimension="60%"
              ></ScreenHeaderBtn>
            ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={images.profile}
                dimension="100%"
              ></ScreenHeaderBtn>
            ),
            headerTitle: "",
          }}
          name="Home"
          component={Home}
          // onLayout={onLayoutRootView}
        />
        {/* <Stack.Screen name="About" component={About} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
