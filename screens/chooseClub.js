import React, { Component } from "react";

import Separator from '../compenet/Separator'
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
//import _renderSeparator from './compenet/Separator'
import TeamsIthem from "../compenet/TeamsItem";
class ApiContainer extends React.Component {
  state = {
    DATA: [],
  };

  //https://jsonplaceholder.typicode.com/users
  //https://raw.githubusercontent.com/jokecamp/FootballData/master/footballStats/English_Premier_League/English_Premier_League_1996-1997.json
  componentDidMount = () => {
    fetch(`http://api.football-data.org/v2/competitions/PL/teams/`, {
      method: "GET",
      headers: { "X-Auth-Token": "878072082fae416e87a6f41727ad99a5" },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(`item:`, responseJson.teams);

        //{//console.log(responseJson)}

        this.setState({
          DATA: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.main_container}>
      <StatusBar barStyle="light-content" backgroundColor="#4f6d7a" />

      
            <FlatList
              data={this.state.DATA.teams}
              keyExtractor={(data, key) => key.toString()}
              renderItem={({ item }) => <TeamsIthem teams={item} navigation={this.props.navigation} />}
              // ItemSeparatorComponent={Separator}
              ItemSeparatorComponent={()=><Separator/>}    

            />
      
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    flexDirection: "row",
   // marginVertical: -,
    backgroundColor: "#4f6d7a",
    justifyContent: "center",
    alignItems: "center",
  },
  /*content_container: {
    flex: 1,
    margin: 10
  },*/
  header_container: {
    //flex: 3,
    flexDirection: "row",
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    //flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
    padding: 10,
  },
  scrollView: {
    backgroundColor: "#4f6d7a",
    // marginHorizontal: 20,
    flex:1,
  },
});

export default ApiContainer;
