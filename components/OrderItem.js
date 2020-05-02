import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import arrow from '../assets/images/arrow.png';


export const OrderItem = ({ id, completed, navigation, deliveryInfo, summarize, number, products }) => (
    <TouchableOpacity style={styles.wrapper} onPress={() => navigation.navigate('OrderDetails', { ...deliveryInfo, ...summarize, products, number })}>
        <Text style={{ ...styles.idStyle, color: `${completed ? "red" : "green"}` }} > {`№${id}`}</Text>
        <Image source={arrow} style={styles.arrow} />
    </TouchableOpacity >
);

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        marginTop: 10,
        padding: 15,
        alignContent: "center",
        alignItems: "center",
        borderRadius: 15
    },
    arrow: {
        margin: 20,
        width: 10,
        height: 15
    },
    idStyle: {
        fontSize: 21,
        textTransform: "uppercase",
        fontFamily: "Roboto-Medium",
    }
});

