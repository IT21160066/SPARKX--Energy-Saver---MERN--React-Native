import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import { StatusBar } from "expo-status-bar";
import MapView, { Animated, Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function OutageScreen({ route }) {
  const navigation = useNavigation();
  const { params } = useRoute();
  let item = params;

  const { marker } = route.params;

  return (
    <View>
      {/* <StatusBar style='light' /> */}
      <ScrollView>
        <View style={{ position: "relative" }}>
          <Image style={{ width: "100%", height: 300 }} source={marker.image} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              position: "absolute",
              top: 25,
              left: 28,
              backgroundColor: "#f0f0f0",
              padding: 8,
              borderRadius: 9999,
              shadowColor: "#000",
              shadowOpacity: 0.25,
              shadowRadius: 4,
            }}
          >
            <Icon.ArrowLeft strokeWidth={3} stroke={"#3385ff"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            backgroundColor: "white",
            marginTop: -60,
            paddingTop: 12,
          }}
        >
          <View style={{ paddingLeft: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../assets/map_marker.png")}
                style={{ height: 32, width: 32 }}
              />
              <Text style={{ fontWeight: 700, fontSize: 28 }}>
                {marker.title}
              </Text>
            </View>
            {/* <View className="flex-row items-center space-x-1">
                                <Image source={require('../assets/fullStar.png')} className="h-4 w-4" />
                                <Text className="text-xs">
                                    <Text className="text-green-700">item</Text>
                                    <Text className="text-gray-700">
                                        </Text> · <Text className="font-semibold text-gray-700">category</Text>
                                </Text>
                            </View> */}
            {/* <View className="flex-row items-center space-x-1">
                            </View> */}
            <Text style={{ color: "#718096", marginTop: 0, marginLeft: 34 }}>
              {marker.rating}
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "white", paddingBottom: 180 }}>
          
        {/* <Button onPress={() =>navigation.navigate("Add Outage")} title="Report">Add</Button> */}

          <Text
            style={{
              color: "#808080",
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 10,
              paddingBottom: 16,
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            Affected areas
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
              {marker.areas.map((area, index) => (
                <Text
                  key={index}
                  style={[styles.text, { backgroundColor: "#cceeff" }]}
                >
                  {area}
                </Text>
              ))}
            </View>
          </ScrollView>

          <View
            style={{ marginRight: 30, marginLeft: 2, gap: -8, marginTop: 5 }}
          >
            <View
              style={{
                backgroundColor: "#ccf2ff",
                margin: 10,
                elevation: 3,
                borderLeftWidth: 6,
                borderColor: "#0000ff",
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Estimated restore time
              </Text>
              <Text
                style={{
                  color: "black",
                  marginTop: -16,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  fontSize: 16,
                }}
              >
                {marker.description}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#ccf2ff",
                margin: 10,
                elevation: 3,
                borderLeftWidth: 6,
                borderColor: "#0000ff",
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Cause for outage
              </Text>
              <Text
                style={{
                  color: "black",
                  marginTop: -9,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  fontSize: 16,
                }}
              >
                {marker.reason}
              </Text>
            </View>

            <View
              style={{
                backgroundColor: "#ccf2ff",
                margin: 10,
                elevation: 3,
                borderLeftWidth: 6,
                borderColor: "#0000ff",
              }}
            >
              <Text
                style={{
                  color: "#808080",
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                State of outage
              </Text>
              <Text
                style={{
                  color: "black",
                  marginTop: -8,
                  paddingLeft: 16,
                  paddingRight: 16,
                  paddingTop: 8,
                  paddingBottom: 8,
                  fontSize: 16,
                }}
              >
                {marker.status}
              </Text>
            </View>
          </View>
        </View>

        {/* <View style={[styles.section, { height: 250 }]}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={{ flex: 1 }}
                        region={{
                            latitude: marker.latitude,
                            longitude: marker.longitude,
                            latitudeDelta: 2.556,
                            longitudeDelta: 2.5559,
                        }}>
                        <Marker
                            coordinate={marker.coordinate}
                            image={require('../assets/map_marker.png')}
                        />
                    </MapView>
                </View> */}
        <View
          style={{
            position: "relative",
            bottom: 180,
            marginRight: 4,
            backgroundColor: "white",
          }}
        >
          <View style={{marginBottom:10}}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Map")}
              style={{
                backgroundColor: "#33ccff",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 35,
                borderRadius: 20,
                padding: 10,
              }}
            >
              <Text style={[styles.ok_btn]}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    gap: 10,
    marginRight: 250,
    flexDirection: "row",
  },
  text: {
    marginBottom: 3,
    padding: 8,
    borderRadius: 15,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "white",
  },
  sectionContent: {
    fontSize: 16,
    textAlign: "justify",
  },
  categories: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  categoryContainer: {
    flexDirection: "row",
    backgroundColor: "#FF6347",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  category: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 10,
  },
  ok_btn: {
    display: "flex",
    flexDirection: "row",
    fontWeight: 800,
    fontSize: 20,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 130,
  },
});
