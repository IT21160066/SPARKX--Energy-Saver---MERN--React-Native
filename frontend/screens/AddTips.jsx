import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import Icon1 from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/FontAwesome";
import happyEmoji from "../assets/happy.png";
import neutralEmoji from "../assets/neutral.png";
import sadEmoji from "../assets/sad.png";
import smileEmoji from "../assets/smile.png";
import worstEmoji from "../assets/worst.png";
import { COLORS, SIZES } from "../constants/theme";

const experienceOptions = [
  { label: "Select Energy Saving Experience" },
  { label: "Best", emoji: happyEmoji },
  { label: "Good", emoji: smileEmoji },
  { label: "Normal", emoji: neutralEmoji },
  { label: "Bad", emoji: sadEmoji },
  { label: "Worst", emoji: worstEmoji },
];

export default function AddTips({ route }) {
  const [userName, setUserName] = useState("");
  const [selectedExperience, setSelectedExperience] = useState(
    "Select Energy Saving Experience"
  );
  const [suggestion, setSuggestion] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isIncorrect, setIsIncorrect] = useState(false);

  const handleAddTip = () => {
    if (!userName || userName.trim() === "") {
      setErrorMessage("Please enter your name.");
      setShowErrorMessage(true);
      return;
    }

    if (selectedExperience === "Select Energy Saving Experience") {
      setErrorMessage("Please select your experience level.");
      setShowErrorMessage(true);
      return;
    }

    if (!suggestion || suggestion.trim() === "") {
      setErrorMessage("Please enter your suggestion.");
      setShowErrorMessage(true);
      return;
    }

    // If all fields are valid, clear any error messages and show the success modal.
    setShowErrorMessage(false);
    setErrorMessage("");
    setShowSuccessModal(true);
    setIsIncorrect(false);

    // Handle the logic for adding the tip with user's name, experience, and suggestion.
  };

  const handleCancel = () => {
    // Handle the cancel action here.
  };

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image
          source={require("../assets/tips.jpeg")}
          resizeMode="contain"
          style={style.image}
        />
      </View>

      <View style={style.titleContainer}>
        <Text style={style.title}> Add a New Energy Saving Tip </Text>
      </View>
      <View style={style.form}>
        <View style={style.formItem}>
          <Icon
            name="user-circle-o"
            size={20}
            color="black"
            style={style.icon}
          />
          <TextInput
            style={[style.input, isIncorrect && style.incorrectInput]}
            placeholder="Your Name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={style.formItem1}>
          <Icon1
            name="downcircleo"
            size={20}
            color="black"
            style={style.icon1}
          />
          <Picker
            selectedValue={selectedExperience}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedExperience(itemValue)
            }
            style={[style.input1, isIncorrect && style.incorrectInput]}
          >
            {experienceOptions.map((option) => (
              <Picker.Item
                key={option.label}
                label={option.label}
                value={option.label}
                style={style.pick}
              />
            ))}
          </Picker>
        </View>
        <View style={style.formItem}>
          <Icon name="comments" size={20} color="black" style={style.icon} />
          <TextInput
            style={[style.input, isIncorrect && style.incorrectInput]}
            placeholder="Add Your Suggestion"
            value={suggestion}
            onChangeText={(text) => setSuggestion(text)}
            multiline={true}
          />
        </View>
        <TouchableOpacity
          style={{
            ...style.formItem,
            ...style.loginBtn,
          }}
          onPress={handleAddTip}
        >
          <Text style={style.loginText}>SUBMIT</Text>
        </TouchableOpacity>
        <Text
          style={showErrorMessage ? style.errorMessage : { display: "none" }}
        >
          {errorMessage}
        </Text>

        <Modal isVisible={showSuccessModal}>
          <View style={style.successModal}>
            <Text style={style.successMessage}>
              Successfully added! {/* Display success message */}
            </Text>
            <TouchableOpacity
              style={style.closeButton}
              onPress={() => setShowSuccessModal(false)} // Close the modal
            >
              <Text style={style.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    height: "100%",
  },
  imageContainer: {
    width: "100%",
    height: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 25,
    fontWeight: "600",
    color: "#16324F",
    marginBottom: SIZES.xLarge,
  },
  image: { width: 300, height: 300 },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 10,
    columnGap: 5,
  },
  formItem: {
    width: "80%",
    backgroundColor: "#EDEDED",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderRadius: 8,
  },
  formItem1: {
    width: "80%",
    backgroundColor: "#EDEDED",
    // display: "flex",
    flexDirection: "row",
    borderRadius: 8,
  },
  icon: { fontSize: 25, color: "#16324fba" },
  icon1: { fontSize: 25, color: "#16324fba", padding: 12 },
  input: {
    backgroundColor: "transparent",
    flex: 1,
    fontSize: 15,
    marginLeft: 20,
  },
  input1: {
    backgroundColor: "transparent",
    flex: 1,
    fontSize: 15,
    marginLeft: -10,
    color: COLORS.gray,
  },
  loginText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  loginBtn: {
    marginTop: 20,
    backgroundColor: "#16324F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  loadingSpinner: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffffca",
    flex: 1,
    justifyContent: "center",
    zIndex: 5,
  },

  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },

  pick: {
    fontSize: 15,
    borderWidth: 2,
    borderColor: COLORS.gray,
    flex: 1,
    backgroundColor: "transparent",
    padding: 0,
    color: COLORS.gray,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: COLORS.gray,
  },
  successModal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  successMessage: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004225", // Your desired text color
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#16324F", // Your desired button color
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
  },
  errorMessage: {
    color: "red", // Your desired error message color
    marginBottom: 20,
  },
  incorrectInput: {
    borderColor: "red",
    borderWidth: 2,
  },
});
