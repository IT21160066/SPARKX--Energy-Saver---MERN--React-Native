import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";

const ConfirmBooking = ({ route }) => {
  const navigation = useNavigation();
  const electricianData = route.params?.electricianData;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleConfirmBooking = () => {
    toggleModal();

    setTimeout(() => {
      toggleModal();
      navigation.navigate("ElectricianMoreInfo", { electricianData });
    }, 4000);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.large }}>
          {/* Display the selected electrician's data here */}
          <View>
            <Text style={styles.textBlockCard0}>{electricianData.name}</Text>
          </View>
          <View style={styles.imageAndContainer0}>
            <Image
              source={electricianData.imageUrl}
              resizeMode="cover"
              style={styles.personImage}
            />
            <View style={styles.container0}>
              <Text style={styles.textBlockCard1}>
                {electricianData.category}
              </Text>
              <Text style={styles.textBlockCard1}>
                {electricianData.experience}
              </Text>
            </View>
          </View>

          <View>
            <TextInput
              style={styles.inputLarger}
              placeholder="Enter your electric issue *"
            />
            <TextInput style={styles.input} placeholder="Enter your name *" />
            <TextInput
              style={styles.input}
              placeholder="Enter contact no *"
              keyboardType="phone-pad"
            />
            <TextInput style={styles.input} placeholder="Enter address *" />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: 40,
                backgroundColor: "#096FCC",
                borderRadius: SIZES.small,
                marginTop: 30,
              }}
              onPress={handleConfirmBooking}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: SIZES.medium,
                  textAlign: "center",
                }}
              >
                Confirm Booking
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Success Modal */}
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={60} color="#096FCC" />
          </View>
          <Text style={styles.modalTitle}>Booking Confirmed!</Text>
          <Text style={styles.modalDescription}>
            Your booking with {electricianData.name} has been confirmed
            successfully.
          </Text>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ConfirmBooking;

const styles = StyleSheet.create({
  imageAndContainer0: {
    flexDirection: "row", // Arrange the image and container0 horizontally
    alignItems: "flex-end",
    marginBottom: 60,
  },
  personImage: {
    width: 180, // Set a fixed width
    height: 180, // Set a fixed height
    resizeMode: "contain",
    borderRadius: SIZES.medium,
    borderWidth: 0.4, // Add border width
    borderColor: "#096FCC",
  },
  container0: {
    flex: 1,
    width: "50%",
    height: 100,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: "#fff",
    marginLeft: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
  },
  container1: {
    width: "100%",
    height: 100,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: COLORS.white,
    marginTop: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
  },
  imageContainer: {
    width: 200,
    height: 220, // Adjust the height as needed
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  textBlockCard0: {
    fontSize: SIZES.large,
    marginLeft: 5,
  },
  textBlockCard1: {
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginTop: 15,
  },
  input: {
    fontSize: SIZES.medium,
    borderWidth: 0.4,
    borderColor: "#096FCC",
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 15,
    backgroundColor: "#fff",
    elevation: 10,
  },
  inputLarger: {
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: "#096FCC",
    borderRadius: 15,
    paddingVertical: 25, // Adjust the height as needed
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 10,
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
