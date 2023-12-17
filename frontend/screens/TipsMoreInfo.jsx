import React from "react";
import { View, Text, Image, SafeAreaView, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";

const TipsMoreInfo = ({ route }) => {
  const tipsData = route.params.tipsData;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer1}>
        <Image source={tipsData.imageUrl} style={styles.imageContainer} />
        <Text style={styles.textBlockCard3}>{tipsData.name}</Text>
      </View>

      <View style={styles.infoContainer}>
        {/* Table Row 2: Energy Saving Tips */}
        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard0}>Energy Saving Tips:</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard1}> {tipsData.tip}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard0}>Energy Saving Experience:</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard1}> {tipsData.experience}</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.textBlockCard4}>Ratings:</Text>
        </View>

        <View style={styles.tableRow}>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={tipsData.rating}
            fullStarColor={"#FFD700"}
            starSize={28}
            alignItems="left"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  infoContainer1: {
    alignItems: "center",
    padding: 20,
    marginLeft: 30,
    width: 300,
    borderRadius: 40,
    marginBottom: 40,
  },
  textBlockCard3: {
    fontSize: 36,
  },
  infoContainer: {
    alignItems: "center",
    padding: 20,
    paddingBottom: 40,
    borderWidth: 2,
    marginLeft: 30,
    width: 300,
    borderRadius: 40,
    borderColor: "#16324F",
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textBlockCard0: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  textBlockCard1: {
    fontSize: 18,
    flex: 1,
    textAlign: "center",
  },
  textBlockCard2: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  textBlockCard4: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
});

export default TipsMoreInfo;
