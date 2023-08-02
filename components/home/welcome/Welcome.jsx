import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const JobTypes = [
  "Full-time",
  "Part-time",
  "Freelance",
  "Internship",
  "Temporary",
  "Volunteer",
];

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Rifki</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          ></TextInput>
        </View>
        <TouchableOpacity
          style={styles.searchBtn}
          onPress={() => handleClick()}
        >
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTypes}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                handleClick();
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Welcome;
