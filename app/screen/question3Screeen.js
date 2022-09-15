import React, { Component, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SelectMultiple from "react-native-select-multiple";

const threeOptions = [
  "Meditation courses",
  "Relaxing sounds",
  "Breathing exercises",
  "Sleep practices",
];

export default function Question3Screen({ route, navigation }) {
  const myOneAns = route.params.myOneAns;
  const myTwoAns = route.params.myTwoAns;

  const [threeAns, setThreeAns] = useState([]);
  onSelectionsChange = (selectedAns) => {
    setThreeAns(selectedAns);
  };

  const goToQuestion4 = (myOneAns, myTwoAns, threeAns) => {
    navigation.navigate("question4", {
      myThreeAns: threeAns,
      myTwoAns: myTwoAns,
      myOneAns: myOneAns,
    });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.topContainer}></View>
      <View style={styles.middleContainer}>
        <Text style={styles.questionText}>
          Which content would you like to see?
        </Text>
        <SelectMultiple
          style={styles.option}
          items={threeOptions}
          selectedItems={threeAns}
          onSelectionsChange={onSelectionsChange}
        />

        <TouchableOpacity
          onPress={() => goToQuestion4(myOneAns, myTwoAns, threeAns)}
        >
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
    flex: 1,
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
    backgroundColor: "#DBA62B",
    height: 60,
    borderRadius: 60,
    bottom: 150,
  },
});
