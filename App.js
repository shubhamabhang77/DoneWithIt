import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Button,
  TouchableWithoutFeedback,
  Image,
  SafeAreaView,
  Platform,
  StatusBar,
  Dimensions,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import MainContainer from "./app/screen/MainContainer";
import LoginScreen from "./app/screen/loginScreen";
import SignupScreen from "./app/screen/signupScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screen/homeScreen";
import DashboardScreen from "./app/screen/dashboardScreen";
import ChatScreen from "./app/screen/chatScreen";
import ProfileScreen from "./app/screen/profileScreen";
import Question1Screen from "./app/screen/question1Screeen";
import Question2Screen from "./app/screen/question2Screeen";
import Question3Screen from "./app/screen/question3Screeen";
import Question4Screen from "./app/screen/question4Screeen";

export default function App() {
  let x = 1;
  console.log(useDeviceOrientation());
  const { landscape } = useDeviceOrientation();
  const Stack = createNativeStackNavigator();
  return (
    // <WelcomeScreen></WelcomeScreen>
    // <MainContainer></MainContainer>
    // <WelcomeScreen></WelcomeScreen>
    // <MainContainer></MainContainer>
    // <Question1Screen></Question1Screen>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainContainer">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="question1"
          component={Question1Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="question2"
          component={Question2Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="question3"
          component={Question3Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="question4"
          component={Question4Screen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
