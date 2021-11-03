import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
const theme = {
  ...DefaultTheme,
  color: {
    ...DefaultTheme.color,
    border: "transparent",
  },
};

let count = 0;
const choose = ({ navigation }) => {
  let imagesURL = [
    "https://i.postimg.cc/J0gMY0XZ/kisspng-segunda-divisin-201617-la-liga-spain-premier-la-liga-5b4cda9b3c6d41-5603605715317633552475.png",

    "https://i.postimg.cc/T1Bc0ZTC/kisspng-201617-premier-league-english-football-league-l-lion-emoji-5b460f07222401-147787551531318023.png",

    "https://i.postimg.cc/FF8MJ0F9/iconfinder-5402431-done-success-tick-valid-approve-icon-512px.png",
  ];
  const [opacity, setopacity] = useState(1);
  const [opacity2, setopacity2] = useState(0.5);
  const [opacity3, setopacity3] = useState(0.2);
  const [opacity4, setopacity4] = useState(1);
  const [opacity5, setopacity5] = useState(0.5);
  const [opacity6, setopacity6] = useState(0.2);
  const [pressed, setPressed] = useState(false);
  const [color, setcolor] = useState("#515151");
  const changeOpacity2 = () => {
    if (!pressed) {
      setPressed(true);
      setopacity4(1);
      setopacity5(0.5);
      setopacity6(0);
    } else {
      setPressed(false);
      setopacity4(0.5);
      setopacity5(1);
      setopacity6(1);
    }
  };

  const changeOpacity = () => {
    if (!pressed) {
      setPressed(true);
      setopacity(1);
      setopacity2(0.5);
      setopacity3(0);
    } else {
      setPressed(false);
      setopacity(0.5);
      setopacity2(1);
      setopacity3(1);
    }

    changeColor();
  };

  const changeColor = () => {
    if (!pressed) {
      setPressed(true);
      setcolor("#515151");
    } else {
      setPressed(false);
      setcolor("#ffffff");
    }
  };
  const [loaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#4f6d7a" }}>
      <View style={{ marginTop: 50, marginLeft: 20 }}>
        <TouchableOpacity
          style={{ width: 40, height: 40 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={{
              uri: "https://i.postimg.cc/MZnTS0rx/pngaaa-com-3944443.png",
            }}
            
          />
        </TouchableOpacity>

        <Text
          style={{
            color: color,
            marginTop: -45,
            marginLeft: 300,
            width: 80,
            height: 80,
          }}
          onPress={() => {
            navigation.navigate("chooseClub");
          }}
        >
          Next
        </Text>
      </View>
      <View style={styles.cardIcons}>
        <View style={styles.textContainer}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 50,
              color: "#ffffff",
              marginLeft: 20,
            }}
          >
            Premier
          </Text>
          <Text style={{ fontSize: 20, color: "#ffffff", marginLeft: 20 }}>
            League
          </Text>
        </View>

        <View style={[styles.cardIcons]}>
        <Image
            style={{ width: 20, height: 20,marginLeft:-200 }}
            source={{
              uri: "https://i.postimg.cc/MZnTS0rx/pngaaa-com-3944443.png",
            }}
          />
          <TouchableOpacity
            style={[styles.iconProfile, styles.icon1]}
            onPress={() =>
                { changeOpacity2()
                navigation.navigate('Home')
                              //onPress={()=>{hehehheehheh.navigate('Home')}}

                }}
          >
            <Image
              style={{ width: 80, height: 80, opacity: opacity4 }}
              source={{ uri: imagesURL[count + 1] }}
            />
            <Image
              style={{
                width: 70,
                height: 70,
                marginTop: -70,
                opacity: opacity6,
              }}
              source={{ uri: "https://i.postimg.cc/RFV5yYz9/image-3.png" }}
            />
          </TouchableOpacity>
          <Image
          style={{ width: 20, height: 20,marginLeft:200 , marginVertical:-20, transform: [{ rotate: '180deg' }]}}
          source={{
            uri: "https://i.postimg.cc/MZnTS0rx/pngaaa-com-3944443.png",
          }}
        />
        </View>

        <Text
          style={{
            color: "red",
          }}
        >
          Get started
        </Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  textContainer: {
    position: "absolute",
    top: 40,
    width: "100%",
    textAlign: "center",
    paddingBottom: 30,
    top: "10%",
    marginTop: 10,
    marginLeft: 50,
  },

  textcontainer: {
    top: -20,
  },

  iconProfile: {
    position: "absolute",
    borderWidth: 1,
    borderColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    height: 80,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowColor: "#121212",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 13.97,
    zIndex: 1000,
    elevation: 21,
  },

  cardIcons: {
    // position: "absolute",
    height: 500,
    top: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  profilePic: {
    width: 150,
    height: 150,
    borderRadius: 100,
    top: "67%",
  },
  selectContainer: {
    height: 150,
    width: "100%",
    backgroundColor: "#F7F8FA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 30,
  },
});
export default choose;
