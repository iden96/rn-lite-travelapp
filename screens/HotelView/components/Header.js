import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { colors } from "../../styles";
import {AntDesign, Entypo} from '@expo/vector-icons'
import {gs} from '../../../styles'

export default function Header() {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/hotel.jpg')} style={{width: "100%", height: 320}}/>

            <View style={styles.topButtons}>
                <AntDesign name="close" size={24} color="#fff" />

                <View style={gs.rowCenter}>
                    <AntDesign name="save" size={24} style={styles.topButtonRight}/>
                    <AntDesign name="sharealt" size={24} style={styles.topButtonRight}/>
                    <Entypo name="dots-three-vertical" size={18} style={styles.topButtonRight}/>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    topButtons: {
        ...gs.rowBetween,
        position: "absolute",
        top: 40,
        left: 32,
        right: 20
        // backgroundColor: colors.darkBg,
    },
    topButtonRight: {
        marginHorizontal: 12,
        color: "#fff"
    }
})
