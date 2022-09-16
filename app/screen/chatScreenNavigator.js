import * as React from "react";
import { View, Text } from "react-native";
import { ScrollView } from "react-native-web";

export default function ChatScreenNavigator({ navigation }) {
  const Stack = createNativeStackNavigator();
  return (
    <ScrollView style={{ backgroundColor: colors.white }}>
      <Text> Shubham</Text>
    </ScrollView>
  );
}
