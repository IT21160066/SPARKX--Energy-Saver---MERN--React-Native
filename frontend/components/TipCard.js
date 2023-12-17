import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const style = StyleSheet.create({
  imageContainer: {
    width: 50,
    height: 46,
    position: "relative",
  },
  tipImage: {
    width: "100%",
    height: "100%",
  },
  textCard: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 12,
    fontSize: 18,
    borderRadius: 40,
  },
});

export default function TipCard({ data }) {

  const navigation = useNavigation();

  const navigateToMore = () => {
    navigation.navigate("TipsMoreInfo", { tipsData: data });
  };

  return (
    <TouchableOpacity onPress={navigateToMore}>
     <View style={{
        width: 310,
        height: 60,
        display: "flex",
        flexDirection: "row",
        borderRadius: 40,
        padding: 5,
        borderWidth: 2,
        borderColor: "#132930",
        backgroundColor: "#fff",
        margin: 5,
      }}
    >
      <View style={style.imageContainer}>
        <Image
          source={data.imageUrl}
          resizeMode="center"
          style={style.tipImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={style.textCard}>{data.name}</Text>
      </View>
    </View>
    </TouchableOpacity>
    
  );
}
