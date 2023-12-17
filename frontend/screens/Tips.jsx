import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import happyEmoji from "../assets/happy.png";
import searchIcon from "../assets/search.png";
import TipCard from "../components/TipCard";
import MyButton from "../components/customeBtn";
import { COLORS, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  textContainer: {
    borderRadius: 40,
  },
  showmoreCard: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
});

const tipsData = [
  {
    id: 1,
    name: "Padmini Priyanka",
    tip: "Switch off lights and electrical appliances when not using them",
    imageUrl: require("../assets/happy.png"),
    experience: "Best",
    rating: 5,
  },
  {
    id: 2,
    name: "Harini Senevirathne",
    tip: "Switch to energy-saving LED light globes",
    imageUrl: require("../assets/happy.png"),
    experience: "Best",
    rating: 4,
  },
  {
    id: 3,
    name: "Nimmi Sureka",
    tip: "Wash your clothes in cold water if possible.",
    imageUrl: require("../assets/happy.png"),
    experience: "Best",
    rating: 3,
  },

  {
    id: 4,
    name: "Nilmi Nelka",
    tip: "Air seal your home.",
    imageUrl: require("../assets/smile.png"),
    experience: "Good",
    rating: 2,
  },

  {
    id: 5,
    name: "Vikum Viraj",
    tip: "Clean or replace all filters in your home regularly.",
    imageUrl: require("../assets/smile.png"),
    experience: "Good",
    rating: 1,
  },

  {
    id: 6,
    name: "Pasidu Parakum",
    tip: "Use your microwave instead of your stove when cooking.",
    imageUrl: require("../assets/neutral.png"),
    experience: "Normal",
    rating: 1,
  },
  {
    id: 7,
    name: "Kusala Gamage",
    tip: "Use natural light when possible.",
    imageUrl: require("../assets/neutral.png"),
    experience: "Normal",
    rating: 2,
  },
  {
    id: 8,
    name: "Anoj Peiris",
    tip: "Turn off heated dry on your dishwasher and air dry instead.",
    imageUrl: require("../assets/sad.png"),
    experience: "Bad",
    rating: 3,
  },
  {
    id: 9,
    name: "Kusala Gamage",
    tip: "Don't leave bathroom or kitchen ventilation fans running longer than necessary.",
    imageUrl: require("../assets/sad.png"),
    experience: "Bad",
    rating: 4,
  },
  {
    id: 10,
    name: "Renuka Hewawasam",
    tip: "Replace your windows.",
    imageUrl: require("../assets/worst.png"),
    experience: "Worst",
    rating: 5,
  },
];

const experienceFilterOptions = [
  { label: "Best", emoji: happyEmoji },
  { label: "Good", emoji: require("../assets/smile.png") },
  { label: "Normal", emoji: require("../assets/neutral.png") },
  { label: "Bad", emoji: require("../assets/sad.png") },
  { label: "Worst", emoji: require("../assets/worst.png") },
];

const jobTypes = ["All", "Show Names According To Experience"];

export default function Tips() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showExperienceOptions, setShowExperienceOptions] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const maxDisplayedTips = 5;
  const sortedTipsData = sortTipsByRating(tipsData);
  function sortTipsByRating(tips) {
    return tips.sort((a, b) => b.rating - a.rating);
  }

  // Function to filter tips based on the selected filter and search query
  const filterTips = (filter, search) => {
    let filteredTips = tipsData;

    if (filter !== "All") {
      filteredTips = filteredTips.filter((tip) => tip.experience === filter);
    }

    if (search) {
      filteredTips = filteredTips.filter((tip) =>
        tip.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return showMore ? filteredTips : filteredTips.slice(0, maxDisplayedTips);
  };

  const displayedTips = filterTips(activeFilter, searchQuery);

  const navigation = useNavigation();
  const navigateToAddTips = () => {
    navigation.navigate("AddTips");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.large }}>
          <View
            style={{
              marginTop: SIZES.large,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextInput
              style={{
                flex: 1,
                fontSize: SIZES.medium,
                color: COLORS.gray,
                backgroundColor: "#fff",
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: SIZES.small,
                padding: SIZES.small,
                height: 48,
              }}
              placeholder="Search by name..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <MyButton iconUrl={searchIcon} dimension="80%" />
          </View>
          <View style={style.tabsContainer}>
            <FlatList
              data={jobTypes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={style.tab(activeFilter, item)}
                  onPress={() => {
                    if (item !== "Show Names According To Experience") {
                      setActiveFilter(item);
                      setShowExperienceOptions(false);
                    } else {
                      setShowExperienceOptions(!showExperienceOptions);
                    }
                  }}
                >
                  <Text style={style.tabText(activeFilter, item)}>
                    {item === "Show Names According To Experience" &&
                    showExperienceOptions
                      ? activeFilter // Display the currently selected filter
                      : item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          {showExperienceOptions && (
            <FlatList
              data={experienceFilterOptions}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={style.experienceFilterOption(activeFilter, item.label)}
                  onPress={() => {
                    setActiveFilter(item.label);
                    setShowExperienceOptions(false);
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={item.emoji}
                      style={{ width: 24, height: 24, marginRight: 8 }}
                    />
                    <Text style={style.tabText(activeFilter, item.label)}>
                      {item.label}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.label}
              contentContainerStyle={{ justifyContent: "center" }}
              showsVerticalScrollIndicator={false}
            />
          )}

          <View>
            <FlatList
              data={displayedTips}
              renderItem={({ item }) => <TipCard data={item} />}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={{ columnGap: SIZES.small }}
              vertical
              showsVerticalScrollIndicator={false}
              style={{
                paddingTop: SIZES.medium,
                paddingBottom: SIZES.medium,
              }}
            />
          </View>
          {tipsData.length > maxDisplayedTips && (
            <TouchableOpacity onPress={() => setShowMore(!showMore)}>
              <View
                style={{
                  width: 200,
                  height: 40,
                  display: "flex",
                  flexDirection: "row",
                  borderRadius: 40,
                  borderWidth: 2,
                  borderColor: "#132930",
                  margin: 5,
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 60,
                  backgroundColor: "#132930",
                  marginBottom: 40,
                }}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.showmoreCard}>
                    {showMore ? "Show Less" : "Show More"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity onPress={navigateToAddTips}>
            <View
              style={{
                width: 310,
                height: 60,
                display: "flex",
                flexDirection: "row",
                borderRadius: 40,
                padding: 2,
                borderColor: "#132930",
                margin: 5,
                marginBottom: 40,
              }}
            >
              <View style={styled.imageContainer}>
                <Image
                  source={require("../assets/plus.png")}
                  style={styled.tipImage}
                  resizeMode="center"
                />
              </View>
              <View style={styless.container}>
                <Text style={styled.textCard}>Add more suggestions here</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
  },

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeFilter, filter) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: activeFilter === filter ? "#3E92CC" : "transparent",
    backgroundColor: activeFilter === filter ? "#3E92CC" : "transparent",
  }),
  experienceFilterOption: (activeFilter, filter) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: activeFilter === filter ? "#3E92CC" : "transparent",
    backgroundColor: activeFilter === filter ? "#3E92CC" : "transparent",
  }),
  tabText: (activeFilter, filter) => ({
    color: activeFilter === filter ? COLORS.white : "#3E92CC",
  }),
});

const styled = StyleSheet.create({
  imageContainer: {
    width: 30,
    height: 51,
    position: "relative",
  },
  tipImage: {
    width: "100%",
    height: "100%",
  },
  textCard: {
    fontSize: 20,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

const styless = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 12,
    fontSize: 18,
  },
});
