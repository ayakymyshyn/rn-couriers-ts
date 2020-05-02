import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const ProductsTable = ({ items, styles }) => {
  return items.map((item, i) => <Row data={item} rowStyle={styles} key={i} />);
};

export const HeaderRow = ({ data, rowStyle }) => (
  <View style={styles.container}>
    {data.map(item => (
      <Text style={rowStyle}>
        {item.toString()}
      </Text>
    ))}
  </View>
);

export const Row = ({ data, rowStyle }) => (
  <View style={styles.container}>
    <Text style={rowStyle}>
      {data.name}
    </Text>
    <Text style={rowStyle} >
      {data.unitValue + data.unit}
    </Text>
    <Text style={rowStyle}>
      {data.price}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
