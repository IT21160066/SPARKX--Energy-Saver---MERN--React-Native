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
import ViewFeedbackCard from "../components/ViewFeedbackCard";
import { COLORS, SIZES } from "../constants/theme";

const feedbacks = [
  {
    id: 1,
    text: "Great service! John fixed my electrical issues quickly and efficiently.",
  },
  {
    id: 2,
    text: "John was punctual and professional. Highly recommend!",
  },
  {
    id: 3,
    text: "Excellent work by John. He solved a complex electrical problem in my home.",
  },
  {
    id: 4,
    text: "John's services are reasonably priced. I will call him again if needed.",
  },
  // {
  //   id: 5,
  //   text: "John is very knowledgeable about electrical systems. Impressive work!",
  // },
];

const ViewFeedbacks = ({ route }) => {
  const electricianData = route.params?.electricianData;

  const navigation = useNavigation();
  const navigateToAddFeedback = () => {
    navigation.navigate("AddFeedback", { electricianData });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      {/* <ScrollView> */}
      <View style={{ flex: 1, padding: 7 }}>
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
        <View style={styles.flatListContainer}>
          <FlatList
            data={feedbacks}
            renderItem={({ item }) => <ViewFeedbackCard data={item} />}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
          />
        </View>

        <View style={styles.addFeedbackContainer}>
          <TouchableOpacity onPress={navigateToAddFeedback}>
            <Text style={styles.addFeedbackButton}>Add Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};
export default ViewFeedbacks;

const styles = StyleSheet.create({
  container: {
    padding: SIZES.large,
  },
  imageAndContainer0: {
    flexDirection: "row", // Arrange the image and container0 horizontally
    alignItems: "flex-end",
    marginBottom: 25,
    marginLeft: 10,
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
    height: 70,
    flexDirection: "column",
    borderRadius: SIZES.medium,
    alignItems: "center",
    padding: 4,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: "#122B5C",
    marginLeft: 10,
    elevation: 3,
    borderWidth: 0.4,
    borderColor: "#096FCC",
    marginRight: 10,
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
    fontSize: SIZES.large,
    marginLeft: 5,
    marginTop: 20,
    color: "#fff",
  },
  addFeedbackContainer:{
      alignItems: "center",
      justifyContent: "center",
      width: '100%',
      height: 40, 
      backgroundColor: "#096FCC",
      borderRadius: SIZES.small,
      marginTop: 10
  },
  addFeedbackButton: {
    color: "white",
    fontSize: SIZES.medium,
    textAlign: "center",
  },
});
