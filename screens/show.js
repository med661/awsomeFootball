import React, { useEffect, useState }from 'react'
import { Text, View ,FlatList, ScrollView} from 'react-native';

function show ({ route, navigation }) {
    const {id}=route.params;
  
    //<Text>id: {JSON.stringify(id)}</Text>
const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getTeams = async () => {
    try {
     const response = await fetch(`https://api.football-data.org/v2/teams/${id}`, {
        method: "GET",
        headers: { "X-Auth-Token": "878072082fae416e87a6f41727ad99a5" },
      });
     const json = await response.json();
     setData(json.squad);
     console.log(json.squad)
     console.log(`data: `,data)
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }

 useEffect(() => {
    getTeams();
    
 }, []);
 useEffect(()=>{
    console.log(`useefff data`,data);

 },[data])
 const renderItem=(item)=>{
     console.log('item ===',item)
    return (
            <View key={item.id} style={{backgroundColor:'#ffffff',marginTop:10}}>
        <Text  style={{fontSize:20}}>{item.name}</Text>
        <Text  style={{paddingRight:20}}>  {item.position}</Text>
        </View>
    )
 }


    return(

/* <FlatList style={{flex:1 ,backgroundColor:"red"}}
data={data}
keyExtractor={( item) =>{ item.id}}
renderItem={(item)=>{ <View><Text>{item.name}</Text></View>}}




/> */
<ScrollView style={{flex:1 ,backgroundColor:"#4f6d7a"}}>
{
    data.map((item)=>{

 return renderItem(item)


})
}</ScrollView>








    )
}


export default  show
  