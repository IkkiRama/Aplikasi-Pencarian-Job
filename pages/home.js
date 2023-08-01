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

export default function Home() {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome></Welcome>
          <Popularjobs></Popularjobs>
          <Nearbyjobs></Nearbyjobs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
