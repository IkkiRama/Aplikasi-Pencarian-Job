import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { COLORS, icons, images, SIZES, SAFEAREAVIEW } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

let JobId;
let SearchTerm;
let OnPressHandler;

function Home({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");

  const onPressHandler = (JOB) => {
    navigation.navigate("DetailJob");
    JobId = JOB.job_id;
  };

  OnPressHandler = onPressHandler;
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                SearchTerm = searchTerm;
                navigation.navigate("JobSearch");
              }
            }}
          ></Welcome>
          <Popularjobs onPressHandler={onPressHandler}></Popularjobs>
          <Nearbyjobs onPressHandler={onPressHandler}></Nearbyjobs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export { Home, JobId, SearchTerm, OnPressHandler };
