import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import bulbImage from "../assets/LEDBulb.jpg";
import SupplierItemCard from "../components/supplierItemCard";
import { SIZES } from "../constants/theme";
const data = [1, 2, 3, 4, 5, 6];

const items = [
  {
    id: 1,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 2,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 3,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 4,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 5,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
];

const SupplierDashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.supplierDetails}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={require("../assets/dilshan.png")} />
        </View>
        <View style={styles.btnsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("AddItem")}>
            <Text style={styles.btn}>Add new item</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.btn}>Add new item</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.itemListContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <SupplierItemCard />}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          showsHorizontalScrollIndicator={false}
          style={{
            padding: SIZES.medium,
            width: "100%",
            // backgroundColor: "#456",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SupplierDashboard;

const styles = StyleSheet.create({
  supplierDetails: {
    height: "40%",
    backgroundColor: "#fff",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    aspectRatio: 1 / 1,
    width: "50%",

    overflow: "hidden",

    padding: 20,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 110,
    objectFit: "fill",
    borderColor: "black",
    borderWidth: 2,
  },
  btnsContainer: {
    width: "50%",
    display: "flex",
    rowGap: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  btn: {
    backgroundColor: "#4483c2",
    color: "white",
    padding: 10,
    borderRadius: 5,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  itemListContainer: {
    height: "60%",
    width: "500",
    backgroundColor: "#16324F",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    overflow: "hidden",
    alignItems: "center",
  },
});
