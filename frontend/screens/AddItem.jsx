import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import loginImg from "../assets/login_form_img.png";
import defaultImage from "../assets/dafaultImage.png";
import { COLORS, SIZES } from "../constants/theme";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";

const AddItem = () => {
  const [item, setItem] = useState({
    itemName: "",
    itemDescriptions: [""],
  });

  const AddItem = () => {};

  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image source={defaultImage} style={style.image} />
      </View>
      <View style={style.form}>
        <View style={style.formItem}>
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={(e) =>
              setItem((prv) => {
                return {
                  ...prv,
                  email: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={(e) =>
              setItem((prv) => {
                return {
                  ...prv,
                  password: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <TextInput
            style={style.input}
            placeholder="Email"
            onChangeText={(e) =>
              setItem((prv) => {
                return {
                  ...prv,
                  email: e,
                };
              })
            }
          />
        </View>
        <View style={style.formItem}>
          <TextInput
            style={style.input}
            placeholder="Password"
            onChangeText={(e) =>
              setItem((prv) => {
                return {
                  ...prv,
                  password: e,
                };
              })
            }
          />
        </View>

        <TouchableOpacity
          style={{
            ...style.formItem,
            ...style.loginBtn,
          }}
          onPress={AddItem}
        >
          <Text style={style.loginText}>Add item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddItem;

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
    padding: 10,
    // backgroundColor: "#415",
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
    objectFit: "fill",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    rowGap: 10,
    columnGap: 5,
    marginTop: 20,
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
    textTransform: "uppercase",
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
});
