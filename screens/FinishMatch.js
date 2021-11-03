import React, { Component } from "react";
import ResultmatchItem from '../compenet/ResultmatchItem'
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
class ApiContainer extends React.Component {
  state = {
    DATA: [],
  };

  //https://jsonplaceholder.typicode.com/users
  //https://raw.githubusercontent.com/jokecamp/FootballData/master/footballStats/English_Premier_League/English_Premier_League_1996-1997.json
  componentDidMount = () => {
    fetch(`http://api.football-data.org/v2/competitions/PL/matches`, {
      method: "GET",
      headers: { "X-Auth-Token": "878072082fae416e87a6f41727ad99a5" },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(`item:`, responseJson.matches);

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
    return (
      <SafeAreaView style={styles.main_container}>
      <StatusBar barStyle="light-content" backgroundColor="#4f6d7a" />

        <ScrollView style={styles.scrollView}>
          <View style={styles.header_container}>
            <FlatList
              data={this.state.DATA.matches}
              keyExtractor={(data, key) => key.toString()}
               renderItem={({ item }) =><ResultmatchItem matches={item} />}
               //renderItem={({ item }) => <Text style={styles.title_text}> {item.awayTeam.name} VS {item.homeTeam.name} score: {item.score.fullTime.homeTeam} /</Text>}
             // ItemSeparatorComponent={()=>{ <View style={{ height: 1, backgroundColor: '#000000', marginLeft: -10 }}/>}}
            />
          </View>
        </ScrollView>
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
    //paddingRight: 5,
    //padding: 10,
  },
  scrollView: {
    backgroundColor: "#4f6d7a",
    // marginHorizontal: 20,
    flex:1,
  },
});

export default ApiContainer;
