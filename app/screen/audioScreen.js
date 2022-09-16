import Ionicons from "react-native-vector-icons/Ionicons";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  Alert,
} from "react-native";

export default function AudioScreen({ route, navigation }) {
  let audioName = route.params.audio;
  let question = route.params.question;

  let done = false;
  const feedback = () => {
    console.log("shubham");
    Alert.prompt("Feedback", question, (text) => console.log("done"));
  };
  const customAlert = (navigation, audioName) => {
    console.log("audioName", audioName);
    Alert.alert("Question", question, [
      {
        text: "Yes",
        onPress: () => {
          {
            console.log("yes");
            done = true;
            navigation.navigate("Session", {
              done: done,
              audioName: audioName,
            });
          }
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("yes");
          done = true;
          navigation.navigate("Session", { done: done, audioName: audioName });
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <Text>{audioName}</Text>
      <View style={styles.controls}>
        <TouchableOpacity style={styles.control} onPress={() => alert("")}>
          <Ionicons name="arrow-back-outline" size={48} color="#444" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={() => alert("")}>
          {false ? (
            <Ionicons name="ios-pause" size={48} color="#444" />
          ) : (
            <Ionicons name="ios-play-circle" size={48} color="#444" />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.control} onPress={() => alert("")}>
          <Ionicons name="arrow-forward-outline" size={48} color="#444" />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          style={styles.control}
          onPress={() => customAlert(navigation, audioName)}
        >
          <Text>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  albumCover: {
    width: 250,
    height: 250,
  },
  controls: {
    flexDirection: "row",
  },
  control: {
    margin: 20,
  },
});
