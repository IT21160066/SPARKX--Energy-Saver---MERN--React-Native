import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Tab from "./tabs";
import SupplierDashboard from "../screens/SupplierDashboard";
import AddItem from "../screens/AddItem";

import ReportOutage from "../screens/ReportOutage";

import ElectrcianReg from "../screens/ElectricianReg";
import SplashScreen from "../screens/SplashScreen";

const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: "false" }}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="SupplierDashboard" component={SupplierDashboard} />
      <Stack.Screen
        name="Add Outage"
        component={ReportOutage}
        options={{ headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="ElectricianReg"
        options={{
          headerTitle: "Electrician Registration",
          headerTitleAlign: "center",
        }}
        component={ElectrcianReg}
      />
      <Stack.Screen name="AddItem" component={AddItem} />
      <Stack.Screen
        name="Tabs"
        options={{
          headerShadowVisible: false,
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
        }}
        component={Tab}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
