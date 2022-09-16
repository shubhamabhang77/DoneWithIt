import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import HomeScreen from "./homeScreen";
import ChatScreen from "./chatScreen";
import DashboardScreen from "./dashboardScreen";
import ProfileScreen from "./profileScreen";
import EventScreen from "./eventScreen";
import HomeScreenNavigator from "./homeScreenNavigator";
import DashboardScreenNavigator from "./dashboardScreenNavigator";

const homeName = "Home";
const eventName = "Event";
const profileName = "Profile";
const chatName = "Chat";
const dashboardName = "Dashboard";

const Tab = createBottomTabNavigator();

export default function MainContainer({ route, navigation }) {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === dashboardName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === profileName) {
            iconName = focused ? "person" : "person-outline";
          } else if (rn === eventName) {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#82CAB0",
        inactiveTintColor: "grey",
        tabBarHeight: "10%",
        labelStyle: { paddingBottom: 10, fontSize: 10 },
        iconStyle: {
          height: 10,
        },
      }}
    >
      <Tab.Screen
        name={homeName}
        component={HomeScreenNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen name={dashboardName} component={DashboardScreenNavigator} />
      <Tab.Screen name={eventName} component={EventScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
