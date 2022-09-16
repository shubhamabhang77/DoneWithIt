import React from "react";

//import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  FlatList,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { colors } from "../constants/theme";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const timeIcon = <MaterialIcons name="timer" size={15} color="black" />;

const DATA = [
  {
    id: "1",
    title: "Insight Therapy",
    img_path: require("../assets/professionalHappiness.jpg"),
    time: "16-Sept-2022 04:00 pm",
  },
  {
    id: "2",
    title: "Working with the mind",
    img_path: require("../assets/img4.jpg"),
    time: "17-Sept-2022 05:30 pm",
  },
  {
    id: "3",
    title: "Professional Happiness",
    img_path: require("../assets/img1.jpg"),
    time: "24-Sept-2022 12:30 pm",
  },
  {
    id: "4",
    title: "Roots and Wings",
    img_path: require("../assets/img2.jpg"),
    time: "19-Sept-2022 10:30 am",
  },
  {
    id: "5",
    title: "Anxiety and Happiness",
    img_path: require("../assets/img3.jpg"),
    time: "16-Oct-2022 02:30 pm",
  },
  {
    id: "6",
    title: "Always There for You",
    img_path: require("../assets/img8.jpg"),
    time: "27-Oct-2022 03:00 pm",
  },
  {
    id: "7",
    title: "Let it go",
    img_path: require("../assets/img7.jpg"),
    time: "19-Sept-2022 05:30 pm",
  },
  {
    id: "8",
    title: "The Happy Path",
    img_path: require("../assets/img5.jpg"),
    time: "17-Sept-2022 08:30 am",
  },
  {
    id: "9",
    title: "Sunshine of my mind",
    img_path: require("../assets/img6.png"),
    time: "21-Sept-2022 10:30 am",
  },
  {
    id: "10",
    title: "Emotional Detox",
    img_path: require("../assets/img9.jpg"),
    time: "29-Sept-2022 03:30 am",
  },
];

const Item = ({ title, img_path, time }) => (
  <View style={styles.container_item}>
    {<Image source={img_path} style={styles.event_img} />}

    <View
      style={{
        height: 30,

        width: "100%",
      }}
    />

    <View style={styles.event}>
      <Text style={styles.event_title}>{title}</Text>

      <Text style={styles.event_time}>{time}</Text>

      <Text style={styles.event_time}>{timeIcon} 30 min</Text>

      <TouchableOpacity>
        <View style={styles.submitButton}>
          <Text style={styles.submitText}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default function EventScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item title={item.title} img_path={item.img_path} time={item.time} />
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/events.jpg")}
            style={{
              width: Dimensions.get("screen").width,

              height: Dimensions.get("screen").height / 3.2,
            }}
          />
        </View>

        <SafeAreaView style={styles.EventsContainer}>
          <Text style={styles.headerText}>Events Near You</Text>

          <FlatList
            // numColumns={2}

            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 100,
    top: 20,
    backgroundColor: colors.white,
  },
  headerText: {
    color: colors.secondary,
    fontSize: 30,
    textTransform: "uppercase",
    padding: 20,
    alignSelf: "center",
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  EventsContainer: {
    backgroundColor: colors.white,
    flex: 1,
    position: "relative",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    top: -10,
  },
  event: {
    height: 100,
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
  },
  event_title: {
    fontSize: 20,
    textAlign: "left",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  event_time: {
    fontSize: 18,
    fontStyle: "italic",
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  event_img: {
    width: "100%",
    height: 75,
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#000000",
  },
  container_item: {
    flex: 1,
    justifyContent: "center",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 20,
    flexDirection: "column",
    backgroundColor: "#E3EAE2", //'#E3EAE2', '#EAEBDD'
  },
  submitButton: {
    alignSelf: "flex-end",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#82CAB0", //'#82CAD8', //'#82CAB0',
    height: 40,
    borderRadius: 60,
  },
  submitText: {
    color: colors.white,
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 15,
    letterSpacing: 2,
  },
});
