import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons'
import { gs, colors } from '../../../styles'

const starColors = ["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53", "#8b6f43"]
const profiles = [require('../../../assets/1.jpg'), require('../../../assets/2.jpg'), require('../../../assets/3.jpg')]

const Circles = props => {
    return (
        <View style={styles.circlesContainer}>
            {profiles.map((profileImage, index) => {
                return <Image source={profileImage} key={index} style={[styles.circle, { marginRight: -10, zIndex: profiles.length - index}]}/>
            })}
        </View>
    )
}

export default function Stats() {
    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                <Feather name="sun" size={24} color={colors.darkHl} />

                <View style={{marginLeft: 8,}}>
                    <Text style={styles.title}>22°</Text>
                    <Text style={styles.subTitle}>Sunny</Text>
                </View>
            </View>

            <View>
                <Text style={styles.title}>
                    8.4
                    <Text style={[styles.subTitle, {paddingLeft: 8}]}> &nbsp;&nbsp; +6k Votes</Text>
                </Text>

                <View style={gs.rowCenter}>
                    {starColors.map((color, index) => {
                        return (
                            <Entypo name="star" size={14} color={color} key={index} style={{marginHorizontal: 2}} />
                        )
                    })}
                </View>
            </View>

                <Circles />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        ...gs.rowCenter
    },
    weatherContainer: {
        ...gs.rowCenter,
        paddingRight: 12,
        marginRight: 12,
        borderRightColor: "#444",
        borderRightWidth: 1
    },
    title: {
        color: colors.text,
        fontSize: 18,
        fontWeight: "800"
    },
    subTitle: {
        color: colors.text,
        fontSize: 10,
        fontWeight: "800"
    },
    circlesContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    circle: {
        width: 36,
        height: 36,
        borderRadius: 36/2,
        borderWidth: 2,
        borderColor: colors.lightBg
    }
})
