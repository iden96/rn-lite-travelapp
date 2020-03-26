import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { gs, colors } from '../../../styles'

const hotel = {
    name: "Mt. Catlin Hotel",
    price: '$967',
    location: "New York",
    about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus eligendi sint repellat odit sed quisquam quos impedit eos, vel enim autem molestias ab reiciendis, reprehenderit illo rem incidunt, consectetur quaerat!"
}

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>

            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}
            </Text>

            <View style={gs.devider} />

            <Text style={gs.sectionTitle}>About {hotel.name}</Text>
            <Text style={styles.about}>{hotel.about}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    info: {
        color: colors.text,
        fontWeight: "600",
        marginTop: 4,
    },
    about: {
        fontSize: 13,
        fontWeight: "600",
        color: colors.text,
        marginTop: 6,
        lineHeight: 20
    }
})
