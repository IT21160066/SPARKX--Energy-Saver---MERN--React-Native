import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import { Ip } from "../Ip/Ip";
import signupImg from "../assets/signup_from_img.png";
import { SIZES } from "../constants/theme";

export default function RegisterScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    userName: "",
    phone: "",
    email: "",
    password: "",
  });
  const navigation = useNavigation();

  const onCloseModal = () => {
    setModalVisible(false);
    navigation.navigate("Login");
  };

  const register = async () => {
    setIsLoading(true);
    await axios.post(`http://${Ip}:5000/user/register`, user).then((res) => {
      setIsLoading(false);
      setModalVisible(true);
      setUser({
        userName: "",
        phone: "",
        email: "",
        password: "",
      });
    });
  };

  return (
    <View style={style.container}>
      {isLoading && (
        <View style={[style.loadingSpinner, style.horizontal]}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <View style={style.imageContainer}>
        <Image source={signupImg} resizeMode="center" style={style.image} />
      </View>
      <View style={style.titleContainer}>
        <Text style={style.title}> Create account </Text>
      </View>
      <View style={style.form}>
        <View style={style.formItem}>
          <Icon name="person-sharp" style={style.icon} />
          <TextInput
            style={style.input}
            placeholder="Username"
            onChangeText={(e) =>
              setUser((prv) => {
                return {
                  ...prv,
                  userName: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <Icon name="call" style={style.icon} />
          <TextInput
            style={style.input}
            placeholder="Phone"
            onChangeText={(e) =>
              setUser((prv) => {
                return {
                  ...prv,
                  phone: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <Icon name="mail" style={style.icon} />
          <TextInput
            keyboardType="email-address"
            style={style.input}
            placeholder="Email"
            onChangeText={(e) =>
              setUser((prv) => {
                return {
                  ...prv,
                  email: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <Icon name="lock-closed" style={style.icon} />
          <TextInput
            secureTextEntry={!showPassword}
            style={style.input}
            placeholder="Password"
            onChangeText={(e) =>
              setUser((prv) => {
                return {
                  ...prv,
                  password: e,
                };
              })
            }
          />
          <Icon
            name={showPassword ? "eye" : "eye-off"}
            style={style.icon}
            onPress={() => setShowPassword(!showPassword)}
          />
        </View>
        <TouchableOpacity
          style={{
            ...style.formItem,
            ...style.loginBtn,
          }}
          onPress={register}
        >
          <Text style={style.loginText}>REGISTER</Text>
        </TouchableOpacity>
        <Text onPress={() => navigation.navigate("Login")}>
          Already have account?Login
        </Text>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={style.modalContent}>
          <View style={style.iconContainer}>
            <Icon name="checkmark-circle-sharp" size={60} color="#096FCC" />
          </View>
          <Text style={style.modalTitle}>Successful!</Text>
          <Text style={style.modalDescription}>Registration successful!</Text>
          <TouchableOpacity onPress={onCloseModal} style={style.closeButton}>
            <Text style={style.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  image: {
    marginTop: 20,
    width: 300,
    height: "100%",
  },
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
  icon: { fontSize: 25, color: "#16324fba" },
  input: {
    backgroundColor: "transparent",
    flex: 1,
    fontSize: 15,
    marginLeft: 5,
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
