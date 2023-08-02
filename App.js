import { ScreenHeaderBtn } from "./components";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "./pages/home";
import { COLORS, icons, images } from "./constants";
import DetailJob from "./pages/detailJob";
import JobSearch from "./pages/search";

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
        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            // headerLeft: () => (
            //   <ScreenHeaderBtn
            //     iconUrl={icons.left}
            //     dimension="60%"
            //   ></ScreenHeaderBtn>
            // ),
            headerRight: () => (
              <ScreenHeaderBtn
                iconUrl={icons.share}
                dimension="60%"
              ></ScreenHeaderBtn>
            ),
            headerTitle: "",
          }}
          name="DetailJob"
          component={DetailJob}
        />

        <Stack.Screen
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,
            // headerLeft: () => (
            //   <ScreenHeaderBtn
            //     iconUrl={icons.left}
            //     dimension="60%"
            //     handlePress={() => router.back()}
            //   />
            // ),
            headerTitle: "",
          }}
          name="JobSearch"
          component={JobSearch}
        />
        {/* <Stack.Screen name="Profile" component={Profile} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
