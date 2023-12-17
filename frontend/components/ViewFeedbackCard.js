import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import pr1 from "../assets/pr1.jpg";

export default function recomendedItemCard( {data} ) {

  const navigation = useNavigation();

  const navigateToAddFeedback = () => {
    navigation.navigate("AddFeedback", { feedbacks: data});
  }

    // useEffect(() => {
    // async function loadCustomFont() {
    //   try {
    //     await Font.loadAsync({
    //       "RedHatDisplay-Medium": require("../assets/fonts/RedHatDisplay-Medium.ttf"),
    //       "RedHatDisplay-SemiBold": require("../assets/fonts/RedHatDisplay-SemiBold.ttf"),

    //     });
    //     console.log("Font loaded successfully");
    //   } catch (error) {
    //     console.log("Font loading error:", error);
    //   }
    // }
    // loadCustomFont();
    // }, []);

  return (
  <View style={styles.profileContainer}>
    <View style={styles.profileImageContainer}>
      <Image source={pr1} resizeMode="center" style={styles.profileImage} />
    </View>
    <View style={styles.feedbackContainer}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: SIZES.medium,
          padding: SIZES.small,
          shadowColor: "black",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          backgroundColor: "#fff",
          margin: 5,
          elevation: 3,
          maxWidth: "90%",
          maxHeight:"auto"
        }}
      >
        <Text style={{ color: "black",
                       fontSize: 15, 
                       fontWeight: "400", 
                      //  fontFamily: "RedHatDisplay-Medium" 
                     }}>
        {data.text}</Text>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginLeft: 10
  },
  profileImageContainer: {
    borderRadius: 50,
    borderWidth: 1
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  feedbackContainer: {
    flex: 1,
  },
});