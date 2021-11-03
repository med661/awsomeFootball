import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions
} from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";

import { COLORS, FRONTS, SIZE ,icons } from "../constants";
import Button from "react-native-flat-button";
const screen = Dimensions.get("window");

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#4f6d7a",
    flex: 1,
  },
  logoBackground: {
    alignItems: "center",
    justifyContent: "center",
    width:200,
    height:100,
    
    
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    
    paddingTop: screen.height * 0.3
  },
  textHeader: {
    color: "#ffffff",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  content: {
    paddingTop: screen.height * 0.1,
    backgroundColor: "#4f6d7a",
    flex: 1,
    padding: 20,
  },
  buttonContainer:{
    width:300,
    height:55,
    //backgroundColor:"#112453",
    borderRadius:5,
    marginVertical: 5,

  },
  buttonContent:{
    fontSize:20,
    color:"#000000"
  },
  textlogin: {
    color: "#000000",
    fontSize: 20,
    marginVertical: 20,
    textAlign: "center",
    fontWeight: "bold",

  },

})
const Home = ({ navigation }) => {
  const [loaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
    "Uninsta-ExtraBold": require("../assets/fonts/Uninsta-ExtraBold.ttf"),
    "Nutmeg-Bold": require("../assets/fonts/Nutmeg-Bold.ttf"),
    "Uninsta-Bold": require("../assets/fonts/Uninsta-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  navigationOptions = {
    title: "Home",
  };
  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.logoContainer}>
        <TouchableOpacity>
          <Image
          style={styles.logoBackground}
            source={require("../assets/images/acu.png")}
            resizeMode="contain"

          />
        </TouchableOpacity>
        <View>
          <View style={styles.container}>
          <Text style={styles.textHeader}>Primer league</Text>
            <Button 
            type="custom"
            onPress={() => navigation.navigate('choose')}
            containerStyle={styles.buttonContainer}
            backgroundColor={"#ffffff"}
            contentStyle={styles.buttonContent}
            >choose club
            </Button>
            <Button 
            type="custom"
            containerStyle={styles.buttonContainer}
            backgroundColor={"#03CF64"}
            contentStyle={styles.buttonContent}
            onPress ={()=>navigation.navigate('ApiContainer')}

            >score match
            </Button>
            <Button 
            type="custom"
            containerStyle={styles.buttonContainer}
            backgroundColor={"#04444b"}
            contentStyle={styles.buttonContent}
            >dzfsffs
            </Button>
            <View 
            style={styles.container}>
            <Text style={styles.textlogin}>log in</Text>
            </View>
            
          </View>
         
         
          
        </View>
        
      </View>
    </SafeAreaView>
  );
};
export default Home;
