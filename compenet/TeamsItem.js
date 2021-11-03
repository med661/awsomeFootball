import React ,{useState}from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Svg,{SvgUri} from 'react-native-svg'
import Home from '../screens/Home'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import {StackNavigator} from 'react-navigation'
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
class TeamsItem extends React.Component{
 constructor(props){
   super(props)
 }
    render(){
            const teams=this.props.teams
            console.log('teams',teams.id);
               return(            
            <TouchableOpacity >
         
            <View style={styles.main_container}>

                
              <View   style={styles.image}>
              <SvgUri
              width="100%"
              height="100%"
              uri={teams.crestUrl}
             onPress={()=>
             // Alert.alert(teams.email)
            //this.navigate           
          // console.log('navigation',this.props)
            //navigate('Home')
            this.props.navigation.navigate('show',{
              id:teams.id
            })
            //this.navigation.navigate('Home')
}
          
              />        
            

            </View>  
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}

                >{teams.name}</Text>

              </View> 
              </View>
 
              </View>
              </TouchableOpacity>

            
           
            )





       
    }
}
const styles = StyleSheet.create({
  main_container:{
    height: 190,
    flexDirection: 'row'
  },
  title_text: {
    fontWeight: "bold",
    fontSize: 20,
    //flex: 1,
    flexWrap: "wrap",
    paddingRight: 5,
    padding: 10,
  },
  image: {
    width: 120,
    height: 180,
   // margin: 5,
    backgroundColor: "#4f6d7a",
    justifyContent:'center',
    alignItems:'center'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 1,
    flexDirection: 'row'
  },
  })
  export default TeamsItem;