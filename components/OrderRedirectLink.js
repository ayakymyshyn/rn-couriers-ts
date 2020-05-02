import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

export const OrderRedirectLink = ({
  navigation,
  redirectTo,
  containerStyle,
  leftImgSource,
  leftImgStyles,
  rightImgSource,
  rightImgStyles,
  children,
  data
}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate(redirectTo, {data})}
    style={{ ...styles.linkContainer, ...containerStyle }}
  >
    {leftImgSource && <Image source={leftImgSource} style={leftImgStyles} />}
    {children}
    {rightImgSource && <Image source={rightImgSource} style={rightImgStyles} />}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 15,
  },
  linkText: {
    fontSize: 27,
    color: "#000",
    fontFamily: "Roboto-Medium",
  },
});
