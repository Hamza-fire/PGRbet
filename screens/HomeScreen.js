import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { addBetOnTicket, addBetOnTicket2, addBetOnTicket3, updateParis } from "../API/firebaseMethods";
import { renderItemMatchAndroid, renderItemMatchIOS } from '../methods/flatlistMethods';
import Swiper from 'react-native-swiper'
import * as firebase from "firebase";
import { images, icons, COLORS, SIZES } from '../constants';









  
const Home = () => {
  const [ticket, setTicket] = useState([]);
  const [paris, setParis] = useState([]);
  
  const [data, setData] = useState([
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    {awayTeam: "",homeTeam:"",commenceTime:"",id:"",league:"",odds:[{name:"home",odd:""},{name:"draw",odd:""},{name:"away",odd:""}],result:0,statutMatch:0},
    ]);

  
  


  useEffect(() => {
    
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          async function getDataTopMatch(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('TopMatch')
            .get()
            .then(documentSnapshot => {
              console.log('User exists: ', documentSnapshot.exists);
          
              if (documentSnapshot.exists) {
                setData(documentSnapshot.data().data)
              }
            });
          }
          async function getUserParis(){
            let doc = await firebase
            .firestore()
            .collection('users')
            .doc(uid)
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setParis(dataObj.paris)
              
      
            }
          }
        
        getUserParis();
        getDataTopMatch();
        
        } else {
          navigation.navigate('Login');
        }
        
    })},[]);
    

if (Platform.OS === 'ios'){
  return(
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Image
                     source={images.star2}
                     resizeMode="contain"
                     style={{
                         width: 60,
                         height: 60,
                         top: 8
                     }}
                />
    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 32, top : 20  }}>Matchs of the week</Text>
    <Swiper showsButtons={true}>
      {renderItemMatchIOS(ticket,data[0])}
      {renderItemMatchIOS(ticket,data[1])}
      {renderItemMatchIOS(ticket,data[2])}
      {renderItemMatchIOS(ticket,data[3])}
      {renderItemMatchIOS(ticket,data[4])}
    </Swiper>
                
    
    
  </View>
  )
}
else{
  return (

    
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
                       source={images.star2}
                       resizeMode="contain"
                       style={{
                           width: 40,
                           height: 40,
                          
                          }}
                  />
      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 30, lineHeight: 30, top : 15  }}>Matchs of the week</Text>
      <Swiper showsButtons={true}>
        {renderItemMatchAndroid(ticket,data[0])}
        {renderItemMatchAndroid(ticket,data[1])}
        {renderItemMatchAndroid(ticket,data[2])}
        {renderItemMatchAndroid(ticket,data[3])}
        {renderItemMatchAndroid(ticket,data[4])}
        
        
        
      </Swiper>
                  
      
      
    </View>
  );
}
}



const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafd",
    alignItems: 'center',
    //justifyContent: 'center',
  },

  betContainer: {
    paddingHorizontal: 150,
    paddingVertical:150,
    marginRight: 32,
    marginLeft:-5,
    top: 8,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 130,
    shadowColor: '#7F5DF0',
    shadowOffset: {
    width: 100,
    height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

  main_container:{
      marginTop: 50,
      flex:1,
  },

  match: {
    marginRight: 32,
    marginLeft:-5,
    top: 8,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 130,
    shadowColor: '#7F5DF0',
    shadowOffset: {
    width: 100,
    height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  

  titreMatch:{
      marginLeft: 10,
      fontSize: 20,
      fontWeight: 'bold',
  },

  championnat:{
      marginLeft: 10,
      fontSize: 12,
  },

  description_Match:{
      color: 'grey',
      fontSize: 10,
      marginLeft: 10,
  },

  odds_container:{
      
      flexDirection:'row',
      justifyContent:'space-around',
  },
  odd:{
      
      borderRadius: 20,
      borderColor:'#e32f45',
      borderWidth: 2.5,
      paddingHorizontal: 40,
      paddingVertical:13,
  },

})
export default Home;

