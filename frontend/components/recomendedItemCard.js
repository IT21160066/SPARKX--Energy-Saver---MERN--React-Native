import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import LEDBulb from "../assets/LEDBulb.jpg";

import led_panel from "../assets/led_panel.png";

export default function recomendedItemCard() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View
        style={{
          flex: 1,
          width: 220,
          height: 120,
          display: "flex",
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
        }}
      >
        <View
          style={{
            width: 90,
            height: 90,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          <Image
            source={led_panel}
            resizeMode="center"
            style={style.logoImage}
          />
        </View>
        <View style={{ flex: 1, height: "100%" }}>
          <Text style={style.itemName}>Item card</Text>
          <Text style={style.info}>40W</Text>
          <Text style={style.info}>8"-20"</Text>
          <Text style={style.info}>Square shape</Text>
          <Text style={style.info}>Rs 9500-18000</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  logoImage: {
    width: "100%",
    height: "100%",
  },
  itemName: {
    color: "#525151",
    fontSize: 20,
    fontWeight: "700",
  },
  info: {
    color: "grey",
    fontSize: 12,
    fontWeight: "600",
  },
});
