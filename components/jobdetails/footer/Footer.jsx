import React from "react";
import { View, Text, TouchableOpacity, Linking, Image } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url, navigation }) => {
  const onPressHandler = () => {
    navigation.goBack();
    // navigation.replace("Home");
  };
  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.backBtn} onPress={() => onPressHandler()}>
        <Image
          source={icons.chevronLeft}
          resizeMode="contain"
          style={styles.backBtnImage}
        />
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
