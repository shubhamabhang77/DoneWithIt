import React, { Component, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import SelectMultiple from "react-native-select-multiple";

const fourOptions = [
  "Heal Childhood Trauma",
  "Quit a bad habit",
  "Lose weight",
  "Improve relationships",
];

export default function Question4Screen({ route, navigation }) {
  const myOneAns = route.params.myOneAns;
  const myTwoAns = route.params.myTwoAns;
  const myThreeAns = route.params.myThreeAns;

  const [fourAns, setFourAns] = useState([]);
  onSelectionsChange = (selectedAns) => {
    setFourAns(selectedAns);
  };

  const goToHome = (myOneAns, myTwoAns, myThreeAns, fourAns) => {
    navigation.navigate("Login", {
      myFourAns: fourAns,
      myThreeAns: myThreeAns,
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
          Anything else you would like to achieve?
        </Text>
        <SelectMultiple
          style={styles.option}
          items={fourOptions}
          selectedItems={fourAns}
          onSelectionsChange={onSelectionsChange}
        />

        <TouchableOpacity
          style={{
            width: "100%",
          }}
          onPress={() => goToHome(myOneAns, myTwoAns, myThreeAns, fourAns)}
        >
          <View style={styles.nextButton}>
            <Text style={styles.submitText}>Submit</Text>
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
