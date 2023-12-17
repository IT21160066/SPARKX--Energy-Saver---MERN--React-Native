import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { SIZES, COLORS } from "../constants/theme";

const styles = StyleSheet.create({
  
  mainCard:{
    width: 350,
    height: 200,
    display: "flex",
    flexDirection: "row",
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: "#fff",
    margin: 5,
    elevation: 3,
  },

  imageContainer:{
    width: "40%",
    height: "80%",
    marginTop: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderRadius: 15,
    borderColor: "#000",
  },

  personImage: {
    width: "105%",
    height: "100%",
    resizeMode: "contain",
  },

  textBlockCard: {
    fontSize: 13,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    marginBottom: 10,
  },

  textBlockContainer: {
    alignItems: "center",
  },

  buttonMInfo:{
    borderRadius: SIZES.small,
    color: "white",
    fontSize: 16,
    textAlign: "center",
    padding: 5,
    backgroundColor: "#096FCC",
    width: '100%',
    height: 35,
  }

});

export default function ElectricianCard({ data }) {
  
  const navigation = useNavigation();

  const navigateToMoreInfo = () => {
    navigation.navigate("ElectricianMoreInfo", { electricianData: data });
  };

  return (
    <View
      style={styles.mainCard}
    >
      <View
        style={styles.imageContainer}
      >
        <Image
          source={data.imageUrl}
          style={styles.personImage}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.textBlockCard}>Name: {data.name}</Text>
        <Text style={styles.textBlockCard}>Age: {data.age}</Text>
        <Text style={styles.textBlockCard}>Location: {data.location}</Text>
        <Text style={styles.textBlockCard}>Mobile No: {data.mobileNo}</Text>
        <View>
          <TouchableOpacity onPress={navigateToMoreInfo}>
            <Text
              style={styles.buttonMInfo}
            >
              More Info
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
