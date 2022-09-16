import React, { Component, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SelectMultiple from "react-native-select-multiple";

const oneOptions = [
  "Improve Sleep",
  "Reduce Stress",
  "Cope with Anxiety",
  "Feel Happier",
];

export default function Question1Screen({ route, navigation }) {
  const [oneAns, setOneAns] = useState([]);

  onSelectionsChange = (selectedAns) => {
    setOneAns(selectedAns);
  };

  const goToQuestion2 = (oneAns) => {
    console.log("data", route.params.state);
    navigation.navigate("question2", {
      myOneAns: oneAns,
      state: route.params.state,
    });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.topContainer}></View>
      <View style={styles.middleContainer}>
        <Text style={styles.questionText}> What are you main goals?</Text>
        <SelectMultiple
          style={styles.option}
          items={oneOptions}
          selectedItems={oneAns}
          onSelectionsChange={onSelectionsChange}
        />

        <TouchableOpacity onPress={() => goToQuestion2(oneAns)}>
          <View style={styles.nextButton}>
            <Text style={styles.submitText}>Next</Text>
          </View>
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
  topContainer: {
    flex: 3,
  },
  middleContainer: {
    flex: 15,
    width: "95%",
    justifyContent: "space-around",
  },

  bottomContainer: {
    flex: 2,
  },

  questionText: {},
  option: {},
  submitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  nextButton: {
    alignSelf: "center",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#82CAB0",
    height: 60,
    borderRadius: 60,
    bottom: 150,
  },
});
