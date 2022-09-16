import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-web";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function ProfileScreenNavigator({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <Text> Shubham</Text>
    </ScrollView>
  );
}
