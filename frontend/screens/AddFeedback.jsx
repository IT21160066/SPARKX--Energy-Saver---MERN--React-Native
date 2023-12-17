import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/MaterialIcons";
import pr1 from "../assets/pr1.jpg";
import { COLORS, SIZES } from "../constants/theme";

const AddFeedback = ({ route }) => {
  const navigation = useNavigation();
  const electricianData = route.params?.electricianData;

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const hanldeSubmitFeedback = () => {
    // Show the success modal
    toggleModal();

    // Automatically close the modal after 3 seconds (adjust as needed)
    setTimeout(() => {
      toggleModal();
      // Navigate to the next screen
      navigation.navigate("ViewFeedbacks", { electricianData });
    }, 4000); // 3000 milliseconds (3 seconds) delay
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView>
        <View style={{ flex: 1, padding: SIZES.medium}}>
          <View style={styles.container}>
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
            </View>
          </View>

          <View style={styles.profileContainer}>
            <View style={styles.profileImageContainer}>
              <Image
                source={pr1}
                resizeMode="center"
                style={styles.profileImage}
              />
            </View>
          </View>

          <View>
            <TextInput style={styles.inputLarger} placeholder="Add feedback" />
          </View>

          <View style={styles.submitFeedbackContainer}>
            <TouchableOpacity onPress={hanldeSubmitFeedback}>
              <Text style={styles.submitFeedbackButton}>Submit Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.iconContainer}>
            <Icon name="check-circle" size={60} color="#096FCC" />
          </View>
          <Text style={styles.modalTitle}>Feedback Confirmed!</Text>
          <Text style={styles.modalDescription}>
            Your feedback is submitted successfully!
          </Text>
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default AddFeedback;

const styles = StyleSheet.create({
  container: {},
  imageAndContainer0: {
    flexDirection: "cloumn", // Arrange the image and container0 horizontally
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10,
  },
  personImage: {
    width: 200, // Set a fixed width
    height: 200, // Set a fixed height
    resizeMode: "contain",
    borderRadius: SIZES.medium,
    borderWidth: 0.4, // Add border width
    borderColor: "#096FCC",
    marginTop: 5,
    marginBottom: 5,
  },
  container0: {
    flex: 1,
    width: "50%",
    height: 65,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: "#122B5C",
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
  },
  textBlockCard1: {
    fontSize: SIZES.large,
    marginTop: 15,
    color: "#fff",
  },
  submitFeedbackContainer:{
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: 40, 
      backgroundColor: "#096FCC",
      borderRadius: SIZES.small,
      marginTop: 10
  },
  submitFeedbackButton: {
      color: "white",
      fontSize: SIZES.medium,
      textAlign: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 30,
  },
  profileImageContainer: {
    borderRadius: 50,
    borderWidth: 1,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  inputLarger: {
    fontSize: 16,
    borderWidth: 0.4,
    borderColor: "#096FCC",
    borderRadius: 15,
    marginTop: 20,
    paddingVertical: 25, // Adjust the height as needed
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 10,
    height: 120,
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
