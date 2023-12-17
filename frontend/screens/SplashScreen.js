import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import sparkX from "../assets/sparkxLogo.png"
import { useNavigation, useRoute } from "@react-navigation/native";

export default function SplashScreen() {

    const navigation = useNavigation();

    return (
        <View>
            <Image source={sparkX} style={styles.cardImage} resizeMode="cover" />
            <TouchableOpacity style={styles.formItem} onPress={() => navigation.navigate("Login")}>
                <Text style={styles.loginText}>Start Journey</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({

    cardImage: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        height: 120,
        marginTop: 300,
        marginLeft: 2
    },
    formItem: {
        width: "75%",
        display: "flex",
        flexDirection: "row",
        padding: 12,
        borderRadius: 10,
        marginTop:180,
        marginLeft:47,
        backgroundColor: "#3E92CC",
        justifyContent: "center",
    },
    loginText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },
})