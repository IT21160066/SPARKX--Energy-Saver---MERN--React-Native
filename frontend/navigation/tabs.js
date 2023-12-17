import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartScreen from "../screens/Cart";
import HomeScreen from "../screens/Home";
import MapScreen from "../screens/Map";
import OutageScreen from "../screens/OutageScreen";
import ProfileScreen from "../screens/Profile";
import TipsScreen from "../screens/Tips";
import TipsMoreInfoScreen from "../screens/TipsMoreInfo";
import TipCard from "../components/TipCard";
import AddTipsScreen from "../screens/AddTips";
import Electricians from "../screens/Electricians";
import ElectricianMoreInfo from "../screens/ElectricianMoreInfo";
import ConfirmBooking from "../screens/ConfirmBooking";
import ViewFeedbacks from "../screens/ViewFeedbacks";
import AddFeedback from "../screens/AddFeedback";
import ItemMoreInfoScreen from "../screens/ItemMoreInfo";
import SupplierDashboard from "../screens/SupplierDashboard";
import left_arrow from "../assets/left_arrow.png";
import { useNavigation, useRoute } from "@react-navigation/native";
// import ElectricianReg from "../screens/ElectricianReg";
import ScreenHeaderBtn from "../components/ScreenHeaderBtn";


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Tabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // headerShadowVisible: false,
        // headerTitleContainerStyle: {
        //   backgroundColor: "#16324F",
        //   width: "100%",
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        // },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: "absolute",
          // bottom: 20,
          // left: 20,
          // right: 20,
          elevation: 0,
          backgroundColor: "#16324F",
          // borderRadius: 15,
          height: 50,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Store"
        tabBarLabelPosition="center"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_home.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="Items"
              options={{
                headerTitleAlign: "left",
                headerTitle: () => (
                  <View>
                    <Image
                      style={styles.headerImage}
                      source={require("../assets/SparkX.png")}
                    />
                  </View>
                ),

                statusBarColor: "#16324F",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: "#16324F",
                },
              }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="ItemMoreInfoScreen"
              component={ItemMoreInfoScreen}
              options={{
                headerLeft: () => (
                  <ScreenHeaderBtn
                    handlePress={() => navigation.navigate("Items")}
                  />
                ),
                headerTitle: "Item Info",
                headerTitleAlign: "center",
                statusBarColor: "#16324F",
                headerTitleStyle: {
                  color: "white",
                },
                headerStyle: {
                  backgroundColor: "#16324F",
                },
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Tips"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_paperclip.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="Tips"
              component={TipsScreen}
              options={{
                headerTitle: "Energy Saving Tips",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="TipsMoreInfo"
              component={TipsMoreInfoScreen}
              options={{
                headerTitle: "Energy Saving Tips Info",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen name="AddTips" component={AddTipsScreen} />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="OutageMap"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_map.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerTitle: "Map",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="Outage"
              component={OutageScreen}
              options={{
                headerTitleAlign: "center",
                // headerShown:false
              }}
            />
         
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Electrician"
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_profile.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen
              name="Electricians"
              component={Electricians}
              options={{
                headerTitle: "Electricians",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen
              name="ElectricianMoreInfo"
              component={ElectricianMoreInfo}
              options={{
                headerTitle: "Electrician More Info",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name="ConfirmBooking" 
              component={ConfirmBooking} 
              options={{
                headerTitle: "Book Electrician",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name="ViewFeedbacks" 
              component={ViewFeedbacks} 
              options={{
                headerTitle: "User Feedbacks",
                headerTitleAlign: "center",
              }}
            />
            <Stack.Screen 
              name="AddFeedback" 
              component={AddFeedback} 
              options={{
                headerTitle: "Add Feedback",
                headerTitleAlign: "center",
              }}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                source={require("../assets/ic_shopping_cart.png")}
                resizeMode="contain"
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? "#3E92CC" : "#a5bcc4",
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#3E92CC",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 5,
  },
  headerImage: {
    height: 30,
    width: 80,
  },
});
