import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LEDBulb from "../assets/LEDBulb.jpg";
import { SIZES } from "../constants/theme";

export default function ItemCard({ data }) {
  const navigation = useNavigation();

  const navigateToMoreInfo = () => {
    navigation.navigate("ItemMoreInfoScreen", { itemData: data });
  };
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={navigateToMoreInfo}>
      <View
        style={{
          width: 150,
          height: 190,
          display: "flex",
          flexDirection: "column",
          borderRadius: SIZES.medium,
          padding: SIZES.small,
          shadowColor: "black",
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          backgroundColor: "#fff",
          margin: 5,
          elevation: 3,
        }}
      >
        <View style={style.imageContainer}>
          <Image
            source={data.image}
            resizeMode="center"
            style={style.logoImage}
          />
        </View>
        <View style={style.content}>
          <Text style={style.itemName}>{data.itemName}</Text>
          <View style={style.infos}>
            <View style={style.contentLeft}>
              <Text style={style.infoTexts}>40W</Text>
              <Text style={style.infoTexts}>Pin Type</Text>
            </View>
            <View style={style.contentRight}>
              <TouchableOpacity>
                <Text style={style.price}>{"Rs 1500"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomColor: "#ededed",
    borderBottomWidth: 1,
  },
  logoImage: {
    width: "80%",
    height: "80%",
  },
  content: {
    marginTop: 5,
    height: "40%",
  },
  infos: {
    display: "flex",
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 0,
  },
  contentLeft: {
    width: "60%",
  },
  contentRight: {
    width: "40%",
    justifyContent: "flex-end",
  },
  itemName: {
    fontSize: 12,
    fontWeight: "600",
    color: "#3b3a3a",
    marginBottom: 5,
    width: "100%",
  },
  infoTexts: {
    fontSize: 12,
    color: "grey",
  },
  price: {
    fontSize: 12,
    color: "white",
    backgroundColor: "#3E92CC",
    paddingLeft: 2,
    paddingRight: 2,
    borderRadius: 3,
  },
});
