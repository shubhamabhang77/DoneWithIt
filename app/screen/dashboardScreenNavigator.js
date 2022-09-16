import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-web";
import DashboardScreen from "./dashboardScreen";
import SessionScreen from "./SessionScreen";
import AudioScreen from "./audioScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function DashboardScreenNavigator({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Session"
        component={SessionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Audio"
        component={AudioScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
