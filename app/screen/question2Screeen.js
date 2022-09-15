import React, { Component, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SelectMultiple from "react-native-select-multiple";

const twoOptions = [
  "Yes I have experience",
  "Yes, But I would like to learn more",
  "Yes a long time ago",
  "No, I have never tried meditation",
];

export default function Question2Screen({ route, navigation }) {
  const myOneAns = route.params.myOneAns;

  const [twoAns, setTwoAns] = useState([]);
  onSelectionsChange = (selectedAns) => {
    setTwoAns(selectedAns);
  };

  const goToQuestion3 = (myOneAns, twoAns) => {
    navigation.navigate("question3", { myTwoAns: twoAns, myOneAns: myOneAns });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.topContainer}></View>
      <View style={styles.middleContainer}>
        <Text style={styles.questionText}>
          {" "}
          Have you ever tried meditation?
        </Text>
        <SelectMultiple
          style={styles.option}
          items={twoOptions}
          selectedItems={twoAns}
          onSelectionsChange={onSelectionsChange}
        />

        <TouchableOpacity onPress={() => goToQuestion3(myOneAns, twoAns)}>
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
