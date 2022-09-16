import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { colors, sizes, fonts } from "../constants/theme";
const audioBookPlaylist = [
  {
    title: "Hamlet - Act I",
    author: "William Shakespeare",
    source: "Librivox",
    uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act1_shakespeare.mp3",
    imageSource:
      "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
  },
  {
    title: "Hamlet - Act II",
    author: "William Shakespeare",
    source: "Librivox",
    uri: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act2_shakespeare.mp3",
    imageSource:
      "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
  },
  {
    title: "Hamlet - Act III",
    author: "William Shakespeare",
    source: "Librivox",
    uri: "http://www.archive.org/download/hamlet_0911_librivox/hamlet_act3_shakespeare.mp3",
    imageSource:
      "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
  },
  {
    title: "Hamlet - Act IV",
    author: "William Shakespeare",
    source: "Librivox",
    uri: "https://ia800204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act4_shakespeare.mp3",
    imageSource:
      "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
  },
  {
    title: "Hamlet - Act V",
    author: "William Shakespeare",
    source: "Librivox",
    uri: "https://ia600204.us.archive.org/11/items/hamlet_0911_librivox/hamlet_act5_shakespeare.mp3",
    imageSource:
      "http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg",
  },
];

const DATA = [
  {
    audioNo: "31",
    audioName: "audio1",
    audioUrl: "google.com",
    done: false,
  },
  {
    audioNo: "32",
    audioName: "audio2",
    audioUrl: "google.com",
    done: false,
  },
  {
    audioNo: "33",
    audioName: "audio3",
    audioUrl: "google.com",
    done: false,
  },
  {
    audioNo: "34",
    audioName: "audio4",
    audioUrl: "google.com",
    done: false,
  },
];

const Sessionnavi = (navigation, audio) => {
  console.log("audioname", audio);
  navigation.navigate("Audio", { audio: audio });
};

const Item = ({ audioName, img_path, audio, navigation }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => Sessionnavi(navigation, audioName)}
  >
    <View style={styles.quoteContainer}>
      <Text style={{ fontSize: 20 }}>{audioName}</Text>
    </View>
  </TouchableOpacity>
);

const state = {
  isPlaying: false,
  playbackInstance: null,
  currentIndex: 0,
  volume: 1.0,
  isBuffering: false,
};

export default function SessionScreen({ route, navigation }) {
  let audioName = "";
  let done = false;
  try {
    let audioName = route.params.audioName;
    let done = route.params.done;
  } catch {}
  const dataChange = (item) => {
    if (item.audioName == audioName) {
      item.done = done;
    }
  };
  DATA.forEach(dataChange);

  const renderItem = ({ item }) => (
    <Item
      audioName={item.audioName}
      img_path={item.img_path}
      audio={item.audio}
      navigation={navigation}
    />
  );
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <View>
        <Image
          source={require("../assets/events.jpg")}
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
    height: Dimensions.get("screen").height * 0.07,
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
