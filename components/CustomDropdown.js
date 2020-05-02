import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

import dropdownArrow from "../assets/images/dropdown.png";

export const CustomDropdown = ({ value }) => (
  <View style={styles.wrapper}>
    <View style={styles.row}>
      <Text
        style={{
          ...styles.mark,
          color: `${value === "Активен" ? "green" : "red"}`,
        }}
      >
        •
      </Text>
      <Text style={styles.text}>{value}</Text>
    </View>
    <Image source={dropdownArrow} style={styles.dropdownImg}/>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
    width: "65%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontFamily: "Roboto-Medium",
    fontSize: 18,
  },
  mark: {
    fontSize: 32,
    marginRight: 5,
    lineHeight: 32,
  },
  dropdownImg: {
      width: 10,
      height: 10,
      marginRight: 5
  }
});
