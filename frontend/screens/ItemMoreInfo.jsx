import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AsyncStorage } from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import heart_filled from "../assets/heart_filled.png";
import heart_outlined from "../assets/heart_outlined.png";
import { SIZES } from "../constants/theme";

const ItemMoreInfo = ({ route }) => {
  const navigation = useNavigation();
  const { params } = useRoute();

  const [favoriteItem, setFavoriteItem] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);

  const itemData = route.params.itemData;
  let item = params;

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleConfirmBooking = () => {
    // Show the success modal
    toggleModal();

    // Automatically close the modal after 3 seconds (adjust as needed)
    setTimeout(() => {
      toggleModal();
      // Navigate to the next screen
      navigation.navigate("Items");
    }, 4000); // 3000 milliseconds (3 seconds) delay
  };

  const { marker } = route.params;
  return (
    <SafeAreaView
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: "transparent",
        flexDirection: "column",
        position: "relative",
        zIndex: -2,
      }}
    >
      <View
        style={{
          position: "absolute",
          bottom: 0,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: "60%",
          width: "100%",
          backgroundColor: "#16324F",
          zIndex: -1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 350,
            height: 350,
            backgroundColor: "#fff",
            borderRadius: 30,
            position: "absolute",
            top: -280,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={itemData.image}
            resizeMode="center"
            style={style.logoImage}
          />
        </View>
        <View
          style={{
            width: "100%",
            height: "auto",
            marginTop: 60,
            padding: 25,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={style.itemName}>{itemData.itemName}</Text>
            <TouchableOpacity
              onPress={() => {
                setFavoriteItem((p) => !p);
              }}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={favoriteItem ? heart_filled : heart_outlined}
              />
            </TouchableOpacity>
          </View>

          <Text style={style.itemDescriptionTitle}>Wattage</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {itemData.wattage.map((item, index) => (
              <Text style={style.itemDetails} key={index}>
                {item}W /
              </Text>
            ))}
          </View>
          <Text style={style.itemDescriptionTitle}>Holder type</Text>
          <Text style={style.itemDetails}>{itemData.holderType}</Text>
          <Text style={style.itemDescriptionTitle}>Price</Text>
          <Text style={style.itemDetails}>Rs {itemData.price}</Text>
        </View>
        <TouchableOpacity
          style={style.addToCartBtn}
          onPress={handleConfirmBooking}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: 500 }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
      {/* Success Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={style.modalContent}>
          <View style={style.iconContainer}>
            <Icon name="check-circle" size={60} color="#096FCC" />
          </View>
          <Text style={style.modalTitle}>Successful!</Text>
          <Text style={style.modalDescription}>
            {itemData.itemName} has been added successfully.
          </Text>
          <TouchableOpacity onPress={toggleModal} style={style.closeButton}>
            <Text style={style.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ItemMoreInfo;

const style = StyleSheet.create({
  logoImage: {
    width: "85%",
    height: "85%",
  },
  itemName: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "600",
  },
  itemDescriptionTitle: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    marginTop: 10,
  },
  itemDetails: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "400",
    marginTop: 5,
  },
  addToCartBtn: {
    backgroundColor: "#2A628F",
    display: "flex",
    alignItems: "center",
    padding: 10,
    margin: 20,
    marginTop: 0,
    width: "86%",
    borderRadius: 10,
  },
  // Modal styles
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  modalText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  iconContainer: {
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#096FCC",
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#096FCC", // Customize title color
    textAlign: "center", // Center-align the text
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center", // Center-align the text
    color: "#333", // Customize description color
  },
});
