import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Pressable,
} from "react-native";
import { COLORS, icons, images, SIZES, SAFEAREAVIEW } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

export default function About() {
  return (
    <SafeAreaView style={SAFEAREAVIEW.style}>
      <Text>This is About Bitch</Text>
    </SafeAreaView>
  );
}
