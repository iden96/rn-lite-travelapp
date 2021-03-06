import {StyleSheet} from 'react-native'

export const  colors = {
    darkBg: "#222",
    lightBg: "#333",
    darkHl: "#666",
    lightHl: "#888",
    pink: "#ea3372",
    text: "#fff",
    textSec: "#aaa"
}

export const gs = StyleSheet.create({
    rowCenter: {
        flexDirection: "row",
        alignItems: "center"
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    center: {
        alignItems: "center",
        justifyContent: 'center',
    },
    sectionContainer: {
        paddingVertical: 24,
        paddingHorizontal: 32,
        marginBottom: 8,
        backgroundColor: colors.lightBg,
    },
    title: {
        color: colors.text,
        fontSize: 30
    },
    devider: {
        borderBottomColor: "#444",
        borderBottomWidth: 1,
        marginVertical: 24
    },
    sectionTitle: {
        fontWeight: "700",
        color: colors.text,
        fontSize: 15 
    },
    absoluteFull: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%" 
    },
    smallText: {
        fontSize: 12,
        fontWeight: "800",
        color: colors.text
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.pink,
        borderRadius: 100
    }
})