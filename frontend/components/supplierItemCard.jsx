import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import led_panel from "../assets/led_panel.png";

const SupplierItemCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.img} source={led_panel} />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.itemName}>Led bulb</Text>
        <Text style={styles.itemInfo}>Rs 1500</Text>
      </View>
      <View style={styles.rightPanel}>
        <TouchableOpacity>
          <Text style={styles.status}>approved</Text>
        </TouchableOpacity>
        <Text style={styles.Wattage}>100W</Text>
      </View>
    </View>
  );
};

export default SupplierItemCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    position: "relative",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
  },
  imageContainer: {
    height: "100%",
    aspectRatio: 1 / 1,
    objectFit: "fill",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  middleContainer: { display: "flex", flex: 1, marginLeft: 10 },
  rightPanel: {
    height: "100%",
    aspectRatio: 1 / 0.9,
  },
  status: {
    padding: 5,
    backgroundColor: "#30B836",
    textAlign: "center",
    borderRadius: 5,
    fontWeight: "600",
    color: "#fff",
    textTransform: "uppercase",
  },
  Wattage: {
    fontWeight: "500",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "auto",
  },
  itemName: {
    fontSize: 15,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  itemInfo: {
    color: "grey",
  },
});
