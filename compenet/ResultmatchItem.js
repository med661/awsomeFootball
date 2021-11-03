import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, ScrollView } from "react-native";
import Svg, { SvgUri } from "react-native-svg";
import Separator from "./Separator";
import {DataTable } from 'react-native-paper'
class ResultmatchItem extends React.Component {
  render() {
    const matches = this.props.matches;
    const image = {
      "Aston Villa FC":
        "https://assets.stickpng.com/images/580b57fcd9996e24bc43c4e4.png",
    };
    return (
      <ScrollView>
      <DataTable>
      
      <DataTable.Header >
      <DataTable.Title> <Text style={styles.title_text_score}>{matches.score.fullTime.awayTeam}</Text></DataTable.Title>
      <DataTable.Title ><Text style={styles.title_text_score}> {matches.score.fullTime.homeTeam}</Text></DataTable.Title>
    </DataTable.Header>
 
    {matches.status == "FINISHED" || matches.status==null ?     (

        <TouchableOpacity 
        onPress={()=>{Alert.alert('hhhahhaha')}}>

      <DataTable.Row style={{backgroundColor:"#fdfd"}}>
     
      <DataTable.Cell> <Text style={styles.title_text}>{matches.awayTeam.name}</Text></DataTable.Cell>
       <DataTable.Cell ><Text style={styles.title_text}>{matches.homeTeam.name}</Text> </DataTable.Cell>
       
    </DataTable.Row>
    </TouchableOpacity>
    
    ) : null }
    </DataTable>
  
                
                 
  

             
            
    
      
     
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
/*  main_container: {
    flex: 1,
    flexDirection: "row",
    width:"100%"
  },*/
   title_text: {
    fontWeight: "bold",
    fontSize: 11,
    flex: 1,
    flexWrap: "wrap",
   //paddingRight: 10,
    padding: 10,
   marginLeft:-40
    
  },
  /*
  content_container: {
    flex: 1,
  //  margin: 5,
      justifyContent:"center",
      alignItems  :"center",

    padding:5
  },
  
  header_container: {
    flex: 1,
    flexDirection: "column",
   
  },*/

  title_text_score:{
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal:0,
    justifyContent:"center",
    alignItems:"center",
    padding: 0,
  }
});
export default ResultmatchItem;
