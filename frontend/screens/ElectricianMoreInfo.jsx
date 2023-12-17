import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, 
         SafeAreaView, 
         FlatList,
         StyleSheet,
         Image,
         Text,
         TouchableOpacity, 
         ScrollView} from "react-native";
import { SIZES, COLORS } from "../constants/theme";

export default function ElectricianMoreInfo( { route }) {

  // Retrieve the electrician data passed from ElectricianCard
  const electricianData = route.params.electricianData;

  // useEffect(() => {
  // async function loadCustomFont() {
  //   try {
  //     await Font.loadAsync({
  //       "RedHatDisplay-SemiBold": require("../assets/fonts/RedHatDisplay-SemiBold.ttf"),
  //     });
  //     console.log("Font loaded successfully");
  //   } catch (error) {
  //     console.log("Font loading error:", error);
  //   }
  // }
  // loadCustomFont();
  // }, []);

  const navigation = useNavigation();
  const navigateToBooking = () => {
    navigation.navigate("ConfirmBooking", { electricianData});
  }

  const navigateToFeedbacks = () => {
    navigation.navigate("ViewFeedbacks", { electricianData });
  }

  const navigateToRegister = () => {
    navigation.navigate("ElectricianReg", { electricianData });
  }

return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <ScrollView>
      <View style={{ flex: 1, padding: SIZES.large }}>
        <View>
          <Text style={styles.textBlockCard0} >{electricianData.name}</Text>
        </View>
        <View style={styles.imageAndContainer0}>
          <Image
            source={electricianData.imageUrl}
            resizeMode="cover"
            style={styles.personImage}
          />
          <View style={styles.container0}>
            <Text style={styles.textBlockCard1} >{electricianData.category}</Text>
            <Text style={styles.textBlockCard1} >{electricianData.experience}</Text>
          </View>
        </View>
        <View style={styles.container1}>
          <Text style={styles.textBlockCard2} >Name: {electricianData.name}</Text>
          <Text style={styles.textBlockCard2} >Age: {electricianData.age}</Text>
          <Text style={styles.textBlockCard2} >Location: {electricianData.location}</Text>
          <Text style={styles.textBlockCard2} >Mobile No: {electricianData.mobileNo}</Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.topic1} >Availability</Text>
          <Text style={styles.textBlockCard3} >{electricianData.availability}</Text>
        <View>
          
        </View>
          <Text style={styles.topic2} >Qualification/ Experience</Text>
          <Text style={styles.textBlockCard3} >
            {electricianData.qualification1} {electricianData.qualification1} 
          </Text>
        </View>
        <TouchableOpacity
        onPress={navigateToBooking}>
            <Text 
              style={styles.viewBooking}>
                  Book Now
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={navigateToFeedbacks}>
            <Text 
              style={styles.viewFeedbaks}>
                  View Feedbacks
            </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageAndContainer0: {
    flexDirection: "row", // Arrange the image and container0 horizontally
    alignItems: "flex-end"
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
    backgroundColor: "#fff",
    marginTop: 8,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
  },
  container2: {
    width: "100%",
    height: 200,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 3,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    backgroundColor: "#fff",
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
  infoContainer: {
    flex: 1,
  },
  textBlockCard0: {
    fontSize: SIZES.large,
    marginLeft: 5,
    // fontFamily: "RedHatDisplay-SemiBold"
  },
  textBlockCard1: {
    fontSize: SIZES.medium,
    fontWeight: "500",
    marginTop: 15
  },
  textBlockCard2: {
    fontSize: SIZES.medium,
    fontWeight: "400",
    // fontFamily: "RedHatDisplay-SemiBold"
  },
  textBlockCard3: {
    fontSize: SIZES.medium,
    marginTop: 10,
    marginBottom: 15,
    textAlign: "left",
    width: '85%',
    // fontFamily: "RedHatDisplay-SemiBold"
  },
  topic1: {
    fontSize: SIZES.medium,
    fontWeight: "500",
    textAlign: "left",
    width: '90%',
  },
  topic2: {
    fontSize: SIZES.medium,
    fontWeight: "500",
    textAlign: "left",
    width: '90%',
  },
  viewFeedbaks:{
    borderRadius: SIZES.small,
    color: "white",
    fontSize: 16,
    // fontFamily: "RedHatDisplay-SemiBold",
    width: "100%",
    textAlign: "center",
    padding: 5,
    marginTop: 8,
    backgroundColor: "#096FCC",
    lineHeight: 32
  },
  viewBooking:{
    borderRadius: SIZES.small,
    color: "white",
    fontSize: 16,
    // fontFamily: "RedHatDisplay-SemiBold",
    width: '100%',
    textAlign: "center",
    padding: 5,
    marginTop: 8,
    backgroundColor: "#096FCC",
    lineHeight: 32
  }
});