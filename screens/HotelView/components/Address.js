import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import { gs, colors } from '../../../styles'

export default function Amenities() {
    return (
        <View>
            <View style={{ backgroundColor: "#000" }}>
                <Image source={require('../../../assets/belarus.png')} resizeMode={"center"} style={{ width: "100%", height: 200, opacity: 0.2 }}></Image>
            </View>
            <View style={styles.pin}>
            </View>
            <View style={styles.addressContainer}>
                <View style={{ marginLeft: 40, marginTop: 36, }}>
                    <Text style={gs.sectionTitle}>Address</Text>
                    <Text style={styles.address}>{`1529 Taylor Street, New York NY\n10011, United States`}</Text>
                    <View style={{marginBottom: 16,}}>
                        <TouchableOpacity style={styles.checkButton}>
                            <Text style={gs.smallText}>Check it</Text>
                            <Entypo name="chevron-right" size={12} color="#fff" style={{marginLeft: 4}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...gs.sectionContainer,
        backgroundColor: colors.darkBg,
    },
    pin: {
        position: "absolute",
        top: 50,
        left: 25,
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: 20 / 2,
        shadowColor: 'red',
        shadowRadius: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        zIndex: 10,
    },
    addressContainer: {
        ...gs.absoluteFull,
        flexDirection: 'row',
        paddingHorizontal: 32,
        paddingVertical: 16,
    },
    address: {
        ...gs.smallText,
        color: colors.darkHl,
        marginTop: 6,
        letterSpacing: 1,
        lineHeight: 20
    },
    checkButton: {
        ...gs.button,
        marginTop: 8,
        paddingVertical: 9,
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
        flexDirection: 'row',
    }
})
