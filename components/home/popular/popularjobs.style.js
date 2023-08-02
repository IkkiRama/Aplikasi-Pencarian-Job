import { StyleSheet } from "react-native";

import { FONT, SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.xLarge,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: SIZES.large,
    // fontFamily: FONT.medium,
    fontWeight: "500",
    color: COLORS.primary,
  },
  headerBtn: {
    fontSize: SIZES.medium,
    // fontFamily: FONT.medium,
    color: COLORS.gray,
    fontWeight: "500",
  },
  cardsContainer: {
    marginTop: SIZES.medium,
  },
});

export default styles;
