import React from "react";
import { View, StyleSheet } from "react-native";
import { TextContainer, OrderDetailsText } from "../styles/OrderDetailsStyles";

export const TextRow = ({
  leftSideHeading,
  leftSideData,
  rightSideHeading,
  rightSideData,
  width,
  bottomSpacing
}) => (
    <TextContainer width={width} bottomSpacing={bottomSpacing}>
      <View>
        <OrderDetailsText marginBottom={10}>{leftSideHeading}</OrderDetailsText>
        <OrderDetailsText marginBottom={10}>{leftSideData}</OrderDetailsText>
      </View>
      <View>
        <OrderDetailsText marginBottom={10}>{rightSideHeading}</OrderDetailsText>
        <OrderDetailsText marginBottom={10}>{rightSideData}</OrderDetailsText>
      </View>
    </TextContainer>
  );

export const TextRowHighlighted = ({
  leftSideHeading,
  leftSideData,
  rightSideHeading,
  rightSideData,
  width,
  additionalLeftText,
  additionalRightText,
  bottomSpacing
}) => (
    <TextContainer width={width} bottomSpacing={bottomSpacing}>
      <View>
        <OrderDetailsText>{leftSideHeading}</OrderDetailsText>
        <View style={styles.highlighted}>
          <OrderDetailsText>{leftSideData}</OrderDetailsText>
        </View>
        {additionalLeftText && (
          <OrderDetailsText marginBottom={10}>
            {additionalLeftText}
          </OrderDetailsText>
        )}
      </View>
      <View>
        <OrderDetailsText>{rightSideHeading}</OrderDetailsText>
        <View style={styles.highlighted}>
          <OrderDetailsText>{rightSideData}</OrderDetailsText>
        </View>
        {additionalRightText && (
          <OrderDetailsText>{additionalRightText}</OrderDetailsText>
        )}
      </View>
    </TextContainer>
  );

const styles = {
  highlighted: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
  },
};
