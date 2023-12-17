import React, { useState } from "react";
import { SIZES, COLORS } from "../constants/theme";
import MyButton from "../components/customeBtn";
import searchIcon from "../assets/search.png";
import ElectricianCard from "../components/electricianCard";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

const electriciansData = [
  {
    id: 1,
    name: "Ashan Perera",
    age: 34,
    location: "Homagama",
    mobileNo : "073637100",
    imageUrl: require('../assets/e1.png'),
    category: "Electrician",
    experience: "5 Y experience",
    availability: "yes",
    qualification1: "Electrician Certificate Program",
    qualification2: "Electrical Safety Certificate"
  },
  {
    id: 2,
    name: "Deshan Fernando",
    age: 28,
    location: "Kottawa",
    mobileNo : "073637100",
    imageUrl: require('../assets/e9.jpg'),
    category: "House Wiring",
    experience: "3 Y experience",
    availability: "yes",
    qualification1: "House Wiring Certificate Program",
    qualification2: "House wiring Safety Certificate"
  },
  {
    id: 3,
    name: "Sahan Perera",
    age: 35,
    location: "Matara",
    mobileNo : "073637100",
    imageUrl: require('../assets/e6.jpg'),
    category: "A/C Repair",
    experience: "2 Y experience",
    availability: "yes",
    qualification1: "A/C Repair Certificate Program",
    qualification2: "A/C Repair Safety Certificate"
  },

  {
    id: 4,
    name: "Senura dilshan",
    age: 35,
    location: "Galle",
    mobileNo : "073637100",
    imageUrl: require('../assets/e6.jpg'),
    category: "Electrician",
    experience: "1 Y experience",
    availability: "yes",
    qualification1: "Electrician Certificate Program",
    qualification2: "Electrical Safety Certificate"
  },

  {
    id: 5,
    name: "Nimal Perera",
    age: 35,
    location: "Matara",
    mobileNo: "073637100",
    imageUrl: require('../assets/e6.jpg'),
    category: "A/C Repair",
    experience: "7 Y experience",
    availability: "yes",
    qualification1: "Electrician Certificate Program",
    qualification2: "Electrical Safety Certificate"
  },

  {
    id: 6,
    name: "Hashan Perera",
    age: 35,
    location: "Maharagama",
    mobileNo: "073638100",
    imageUrl: require('../assets/e6.jpg'),
    category: "Electrician",
    experience: "5 Y experience",
    availability: "yes",
    qualification1: "Electrician Certificate Program",
    qualification2: "Electrical Safety Certificate"
  },
  
];

const data = [1, 2, 3, 4, 5, 6];
const jobTypes = ["All", "Electrcians", "House Wiring", "A/C Repair"];

export default function Electrcians() {
  const [activeItemType, setActiveItemType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

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
              placeholder="Search electricians..."
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <MyButton iconUrl={searchIcon} dimension="80%" />
          </View>
          <View style={style.tabsContainer} >
            <FlatList
              data={jobTypes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={style.tab(activeItemType, item)}
                  onPress={() => {
                    setActiveItemType(item);
                  }}
                >
                  <Text style={style.tabText(activeItemType, item)}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View>
            <FlatList
              // data={ electriciansData }
              data={electriciansData.filter((electrician) =>
                electrician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                electrician.location.toLowerCase().includes(searchQuery.toLowerCase())
              )}
              renderItem={({ item }) => <ElectricianCard data={ item }/>}
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
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.small,
    borderWidth: 1,
    borderColor: "#3E92CC",
    backgroundColor: activeJobType === item ? "#3E92CC" : "transparent",
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? COLORS.white : "#3E92CC",
  }),
});
