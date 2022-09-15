import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen() {
  const email = ({ navigation }) => {
    navigation.navigate("Signup");
  };

  const google = () => {
    console.log("google print");
  };

  const facebook = () => {
    console.log("facebook print");
  };
  const login = ({ navigation }) => {
    navigation.navigate("Login");
  };
  let buttonFontSize = 15;
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.topContainer}></View>
      <View style={styles.middleContainer}>
        <Text>Welcomeshubham abhan here</Text>
        <TouchableOpacity
          style={[styles.button, styles.emailLogin]}
          onPress={email}
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
        f
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

  topContainer: {
    flex: 8,
  },
  middleContainer: {
    flex: 3,
    width: "95%",
    justifyContent: "space-around",
  },

  bottomContainer: {
    flex: 2,
  },

  button: {
    padding: "2%",
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
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
  loginButton: {
    backgroundColor: "none",
  },
  textInsideButton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
  },
  buttonicon: { height: "100%", width: "6%" },
});
export default WelcomeScreen;
