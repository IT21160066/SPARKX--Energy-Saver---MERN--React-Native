import React, { useEffect, useState } from "react";
import { SIZES, COLORS } from "../constants/theme";
import MyButton from "../components/customeBtn";
import searchIcon from "../assets/search.png";
import ItemCard from "../components/itemCard";
import RecomendedItemCard from "../components/recomendedItemCard";
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
import bulbImage from "../assets/LEDBulb.jpg";
import led_panel from "../assets/led_panel.png";
import high_power from "../assets/17-High-Power.jpg";
import garden_led from "../assets/gardenLED.jpg";

const data = [1, 2, 3, 4, 5, 6];
const jobTypes = ["All", "Latest", "Popular"];
const items = [
  {
    id: 1,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 2,
    image: led_panel,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 3,
    image: high_power,
    itemName: "High power LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 4,
    image: garden_led,
    itemName: "Garden Lamp",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
  {
    id: 5,
    image: bulbImage,
    itemName: "LED Bulb",
    wattage: [15, 30, 40, 50],
    price: 2000,
    holderType: "pin-type / skrew-type",
  },
];

export default function Home() {
  const [activeItemType, setActiveItemType] = useState("All");
  const [searchQuery, setSearch] = useState("");
  const [list, setList] = useState([items]);

  const filterTips = (search) => {
    let filterItems = items;

    if (search) {
      filterItems = filterItems.filter((item) =>
        item.itemName.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filterItems;
  };

  const displayedItems = filterTips(searchQuery);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.large }}>
          <Text
            style={{
              fontSize: SIZES.xLarge,

              fontWeight: 600,
            }}
          >
            Items
          </Text>
          <View
            style={{
              marginTop: SIZES.large,
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
              // gap: "10px",
            }}
          >
            <TextInput
              onChangeText={(value) => setSearch(value)}
              style={{
                flex: 1,
                fontSize: SIZES.medium,
                color: COLORS.gray,
                backgroundColor: "#fff",
                borderStyle: "solid",
                borderWidth: 2,
                borderColor: "#3E92CC",
                borderRadius: SIZES.small,
                padding: SIZES.small,
                height: 48,
              }}
              placeholder="Search items..."
            />
            <MyButton iconUrl={searchIcon} dimension="80%" />
          </View>
          <View style={style.tabsContainer}>
            <FlatList
              data={jobTypes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={style.tab(activeItemType, item)}
                  onPress={() => {
                    setActiveItemType(item);
                    // router.push(`/search/${item}`);
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
            />
          </View>
          <View>
            <FlatList
              data={displayedItems}
              renderItem={({ item }) => <ItemCard data={item} />}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingTop: SIZES.medium,
                paddingBottom: SIZES.medium,
                // backgroundColor: "#456",
              }}
            />
          </View>
          <Text
            style={{
              fontSize: SIZES.xLarge,
              marginTop: SIZES.medium,
              fontWeight: 600,
            }}
          >
            Recomended Items
          </Text>
          <View>
            <FlatList
              data={data}
              renderItem={({ item }) => <RecomendedItemCard />}
              keyExtractor={(item) => item}
              contentContainerStyle={{ columnGap: SIZES.small }}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingTop: SIZES.medium,
                paddingBottom: SIZES.medium,
                // backgroundColor: "#456",
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
