import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-web";
import HomeScreen from "./homeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function HomeScreenNavigator({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
