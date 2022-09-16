import * as React from "react";
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
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

import { colors, sizes, fonts } from "../constants/theme";

const DATA = [
  {
    sessionNo: "1",
    SessionName:
      "Understand how past events impact their current circumstances",
    text1: "Insight Therapy - Session 1",
    img_path: require("../assets/session1.jpg"),
    audio: [
      {
        audioNo: "11",
        audioName: "audio1",
        audioUrl: "google.com",
      },
      {
        audioNo: "12",
        audioName: "audio2",
        audioUrl: "google.com",
      },
      {
        audioNo: "13",
        audioName: "audio3",
        audioUrl: "google.com",
      },
      {
        audioNo: "14",
        audioName: "audio4",
        audioUrl: "google.com",
      },
    ],
  },
  {
    sessionNo: "2",
    SessionName:
      "Distress or uneasiness caused by fear of danger or misfortune",
    text1: "Anxiety Control - Session 2",
    img_path: require("../assets/session1.jpg"),
    audio: [
      {
        audioNo: "21",
        audioName: "Audio 1",
        audioUrl: "google.com",
      },
      {
        audioNo: "22",
        audioName: "Audio 2",
        audioUrl: "google.com",
      },
      {
        audioNo: "23",
        audioName: "Audio 3",
        audioUrl: "google.com",
      },
      {
        audioNo: "24",
        audioName: "Audio 4",
        audioUrl: "google.com",
      },
    ],
  },
];

const chatrdata = [
  [70, -5],
  [80, -10],
  [110, 0],
  [100, 0],
  [280, -60],
];
const horizontalData = ["April", "May", "June", "July", "August"];
const chartdata = [
  { year: "10-09", earnings: 2 },
  { year: "11-09", earnings: 1 },
  { year: "12-09", earnings: 5 },
  { year: "13-09", earnings: 2 },
  { year: "14-09", earnings: 3 },
  { year: "15-04", earnings: 5 },
  { year: "16-09", earnings: 2 },
];

const chartdata1 = [
  { year: "10-09", earnings: 4 },
  { year: "11-09", earnings: 2 },
  { year: "12-09", earnings: 3 },
  { year: "13-09", earnings: 1 },
  { year: "14-09", earnings: 4 },
  { year: "15-04", earnings: 7 },
  { year: "16-09", earnings: 2 },
];

const Sessionnavi = (navigation, SessionName) => {
  if (
    SessionName ===
    "Distress or uneasiness caused by fear of danger or misfortune"
  ) {
    alert("Please Complete the Session1");
  } else {
    navigation.navigate("Session", { done: false, audioName: "" });
  }
};

const Item = ({ SessionName, text1, img_path, audio, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => Sessionnavi(navigation, SessionName)}
  >
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>{SessionName}</Text>
      <View style={styles.quote}>
        <Text style={{ fontSize: 25 }}>{text1}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default function DashboardScreen({ navigation }) {
  const renderItem = ({ item }) => (
    <Item
      SessionName={item.SessionName}
      text1={item.text1}
      img_path={item.img_path}
      audio={item.audio}
      navigation={navigation}
    />
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <View>
        <Image
          source={require("../assets/session1.jpg")}
          style={{
            width: Dimensions.get("screen").width,

            height: Dimensions.get("screen").height / 3.2,
          }}
        />
      </View>
      <SafeAreaView>
        <FlatList
          // numColumns={2}

          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <View style={{ height: 10, width: "100%" }}></View>
      <View
        style={{
          marginLeft: 15,
          backgroundColor: "#CEE8D2",
          borderRadius: 10,
          marginRight: 15,
        }}
      >
        <Text style={{ fontSize: 20, padding: 10 }}>
          Ratings for Past 7 days
        </Text>

        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar
            data={chartdata}
            x="year"
            y="earnings"
            style={{
              grid: { stroke: "#ddd444", strokeWidth: 1.5 },
              data: {
                fill: "#3A7C46",
                width: 25,
              },
            }}
          />
        </VictoryChart>
      </View>
      <View style={{ height: 15, width: "100%" }}></View>
      <View
        style={{
          marginLeft: 15,
          backgroundColor: "#D8CEC7",
          borderRadius: 10,
          marginRight: 15,
        }}
      >
        <Text style={{ fontSize: 20, padding: 10 }}>
          Videos watched in last 7 Days
        </Text>

        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar
            data={chartdata1}
            x="year"
            y="earnings"
            style={{
              grid: { stroke: "#ddd444", strokeWidth: 0.0001 },
              data: {
                fill: "#A69180",
                width: 25,
              },
            }}
          />
        </VictoryChart>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    paddingHorizontal: 20,
    paddingVertical: 8,
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    margin: 3,
    height: Dimensions.get("screen").height * 0.13,
    borderColor: colors.secondary,
    borderLeftWidth: 8,
    borderRadius: 15,
    // backgroundColor:colors.lightGrey
  },
  infoContainer: {
    paddingVertical: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imgContainer: {
    width: "30%",
  },
  img: {
    width: 60,
    height: 60,
  },
  bookContainer: {
    marginHorizontal: 10,
    borderTopColor: colors.accent,
    borderTopWidth: 2,
    paddingVertical: 5,
    width: "93%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    fontSize: fonts.header.fontSize,
    fontWeight: "700",
    color: colors.secondary,
    paddingVertical: 3,
  },
  spec: {
    fontStyle: "italic",
  },
  bookText: {
    color: colors.tertiary,
    fontWeight: "700",
  },
});
