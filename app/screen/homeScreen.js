import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { colors } from "../constants/theme";
export default function HomeScreen({ routes, navigation }) {
  var hour = new Date().getHours(); // for now
  let text1;
  if (hour < 12) {
    text1 = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    text1 = "Good Afternoon";
  } else if (hour < 24) {
    text1 = "Good evening";
  }

  const [isOpacitySet, setIsOpacitySet] = useState(false);
  const [oneOpacity, setOneOpacity] = useState(1);
  const [twoOpacity, setTwoOpacity] = useState(1);
  const [threeOpacity, setThreeOpacity] = useState(1);
  const [fourOpacity, setFourOpacity] = useState(1);
  const [fiveOpacity, setFiveOpacity] = useState(1);

  style = {
    width: Dimensions.get("screen").height * 0.06,
    height: Dimensions.get("screen").height * 0.06,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  };
  const changeOpacity = (number) => {
    console.log("number", number);
    if (!isOpacitySet) {
      if (number === 1) {
        setOneOpacity(1);
        setTwoOpacity(0.1);
        setThreeOpacity(0.1);
        setFourOpacity(0.1);
        setFiveOpacity(0.1);
        setIsOpacitySet(true);
        alert(
          "Sad to hear that, But No Problem, We don't get happy days everyday"
        );
        setIsOpacitySet(true);
      } else if (number === 2) {
        setOneOpacity(0.1);
        setTwoOpacity(1);
        setThreeOpacity(0.1);
        setFourOpacity(0.1);
        setFiveOpacity(0.1);
        setIsOpacitySet(true);
        alert("It's okay, No Problem!");
      } else if (number === 3) {
        setOneOpacity(0.1);
        setTwoOpacity(0.1);
        setThreeOpacity(1);
        setFourOpacity(0.1);
        setFiveOpacity(0.1);
        setIsOpacitySet(true);
        alert("You are doing Okay, No Problem");
      } else if (number === 4) {
        setOneOpacity(0.1);
        setTwoOpacity(0.1);
        setThreeOpacity(0.1);
        setFourOpacity(1);
        setFiveOpacity(0.1);
        setIsOpacitySet(true);
        alert("You are doing");
      } else if (number === 5) {
        setOneOpacity(0.1);
        setTwoOpacity(0.1);
        setThreeOpacity(0.1);
        setFourOpacity(0.1);
        setFiveOpacity(1);
        setIsOpacitySet(true);
        alert("You are doing great!");
      }
    } else {
      alert("You can not change response for today");
    }
  };
  return (
    <ScrollView style={{ backgroundColor: colors.white, top: 40 }}>
      <View
        style={{
          flexDirection: "row",
          borderBottomWidth: 2,
          borderColor: "#A69180",
        }}
      >
        <View>
          <Image
            style={{
              width: Dimensions.get("screen").width / 2,
              height: Dimensions.get("screen").height / 3,
              backgroundColor: "#A69180",
            }}
          />
          <Text
            style={{
              position: "absolute",
              top: Dimensions.get("screen").height / 15,
              left: 10,
              width: "100%",
              fontSize: 25,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Hi Shubham, {text1}
          </Text>
        </View>

        <View>
          <Image
            source={require("../assets/home_image.jpg")}
            style={{
              width: Dimensions.get("screen").width / 2,
              height: Dimensions.get("screen").height / 3,
            }}
          />
        </View>
      </View>
      <Text>We hope, you are feeling great today!</Text>
      <View
        style={{ width: "100%", height: 4, backgroundColor: "#A69180" }}
      ></View>
      <View
        style={{
          height: Dimensions.get("screen").height / 50,
          width: Dimensions.get("screen").width / 10,
        }}
      ></View>

      <Text style={styles.quoteText}>Quote of the day</Text>
      <Image
        source={require("../assets/quote1.jpg")}
        style={[
          {
            borderRadius: 25,
            height: Dimensions.get("screen").height * 0.23,
            width: Dimensions.get("screen").width * 0.94,
            marginLeft: Dimensions.get("screen").width * 0.03,
          },
        ]}
      ></Image>
      <View
        style={{
          height: Dimensions.get("screen").height / 50,
          width: Dimensions.get("screen").width / 10,
        }}
      ></View>
      <View
        style={{
          borderRadius: 15,
          backgroundColor: "#E3EAE2",
          fontWeight: "bold",
          fontSize: 18,
          height: Dimensions.get("screen").height * 0.15,
          width: Dimensions.get("screen").width * 0.94,
          marginLeft: Dimensions.get("screen").width * 0.03,
        }}
      >
        <Text
          style={{
            top: 15,
            left: 15,
            fontSize: 25,
            color: colors.secondary,
            fontWeight: "bold",
          }}
        >
          Happiness Meter
        </Text>
        <Text
          style={{
            top: 15,
            left: 15,
            fontSize: 10,
            color: colors.secondary,
            fontWeight: "bold",
          }}
        >
          How are you feeling today?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            top: 15,
          }}
        >
          <TouchableOpacity onPress={() => changeOpacity(1)}>
            <Image
              source={require("../assets/1happy.png")}
              style={[styles.happynessicon, { opacity: oneOpacity }]}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeOpacity(2)}>
            <Image
              source={require("../assets/2happy.png")}
              style={[styles.happynessicon, { opacity: twoOpacity }]}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeOpacity(3)}>
            <Image
              source={require("../assets/3happy.png")}
              style={[styles.happynessicon, { opacity: threeOpacity }]}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeOpacity(4)}>
            <Image
              source={require("../assets/4happy.png")}
              style={[styles.happynessicon, { opacity: fourOpacity }]}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeOpacity(5)}>
            <Image
              source={require("../assets/5happy.png")}
              style={[styles.happynessicon, { opacity: fiveOpacity }]}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  quoteContainer: {
    padding: 10,
    paddingTop: 0,
    borderRadius: 20,
    margin: 10,
  },
  quoteText: {
    marginRight: 15,
    marginLeft: 10,
    fontSize: 23,

    textTransform: "uppercase",
    fontWeight: "bold",
  },
  quote: {
    padding: 10,
    width: Dimensions.get("screen").width - 50,
    alignItems: "center",
    margin: 10,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#face4b",
    borderTopRightRadius: 0,
  },
  happynessicon: {
    width: Dimensions.get("screen").height * 0.06,
    height: Dimensions.get("screen").height * 0.06,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.6,
  },
});
