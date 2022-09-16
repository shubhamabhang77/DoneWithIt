import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

function WelcomeScreen({ props, navigation }) {
  const email = () => {
    console.log("email print");
    navigation.navigate("Signup");
  };

  const google = ({ navigation }) => {
    console.log("google print");
    navigation.navigate("");
  };

  const facebook = ({ navigation }) => {
    console.log("facebook print");
    navigation.navigate("");
  };
  const login = () => {
    console.log("login print");
    navigation.navigate("Login");
  };
  let buttonFontSize = 15;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.topContainer}></View>
      <Image style={styles.logo} source={require("../assets/logo1.png")} />
      <View style={styles.middle1Container}></View>
      <View style={styles.middleContainer}>
        <TouchableOpacity
          style={[styles.button, styles.emailLogin]}
          onPress={() => email(navigation)}
        >
          <Image
            style={styles.buttonicon}
            source={require("../assets/email.png")}
          ></Image>
          <Text style={styles.textInsideButton}>Continue with email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.facebookLogin]}
          onPress={facebook}
        >
          <Image
            style={styles.buttonicon}
            source={require("../assets/facebook.png")}
          ></Image>
          <Text style={styles.textInsideButton}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.googleLogin]}
          onPress={google}
        >
          <Image
            style={styles.buttonicon}
            source={require("../assets/google.jpg")}
          ></Image>
          <Text style={[styles.textInsideButton, { color: "#000" }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={login}
        >
          <Text style={{ fontWeight: "bold" }}>Log In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    flex: 5,
    width: "100%",
    height: Dimensions.get("screen").height / 25,
  },
  topContainer: {
    flex: 2,
  },
  middleContainer: {
    flex: 5,
    width: "95%",
    height: Dimensions.get("screen").height / 4,
    justifyContent: "space-around",
  },
  middle1Container: {
    flex: 3,
  },
  bottomContainer: {
    flex: 1,
  },

  button: {
    paddingTop: "3%",
    paddingBottom: "4%",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    height: Dimensions.get("screen").height / 17,
  },
  emailLogin: {
    backgroundColor: "#263e58",
  },
  facebookLogin: {
    backgroundColor: "#1878f3",
  },
  googleLogin: {
    backgroundColor: "white",
  },
  loginButton: {},
  textInsideButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
  },
  buttonicon: { height: "100%", width: "6%" },
});
export default WelcomeScreen;
