import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList,SafeAreaView, TouchableOpacity} from 'react-native';
import { addBetOnTicket3 } from "../../API/firebaseMethods";
import * as firebase from "firebase";

const CustomButton1 = ({children, number, odd, ...rest}) => (
  <TouchableOpacity
    
   style={{
       justifyContent:'center',
       alignItems: 'center',
       shadowColor: '#7F5DF0',
       shadowOffset: {
          width: 85,
          height: 40,
          },
       shadowOpacity: 0.25,
       shadowRadius: 3.5,
       elevation: 0
   }} {...rest}

  >
    

      <View style={{
          top: 7.5,
          width: 85,
          height: 40,
          borderRadius: 10,
          borderColor: '#e32f45',
          borderWidth: 2.5
      }}>
          {children}
      </View>
    
    <Text style={{top:-22, fontWeight:'bold'}}>{number} |     {odd}</Text>
  </TouchableOpacity>
)



  
const BasketballScreen = () => {
    
  const [ticket, setTicket] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([{
    awayTeam: "",
    homeTeam: "",
    commenceTime: "",
    id: Math.random().toString(20).substr(2, 10),
    league: "",
    statutMatch: 0,
    result:0,
    odds :[{
      name:"home",
      odd:"",
    },{
      name:"draw",
      odd:"",
    },{
      name:"away",
      odd:"",
    }] 
  }]);
 

  useEffect(() => {
    
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          async function getMatchData(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Basket')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setData(dataObj.data)
              
      
            }
          }
        getMatchData();
        } else {
          navigation.navigate('Login');
        }
        
    })}, []);
    


  



  function handlePressBetNul (ticket, item) {
    
      ticket.push({
        awayTeam: item.awayTeam,
      homeTeam: item.homeTeam,
      commenceTime: item.commenceTime,
      id: item.id,
      league: item.league,
      prediction: 'Match nul',
      predictionStatut: 2,
      odd : item.odds[1].odd,
      statut : false
      });
      addBetOnTicket3(ticket, ticket.pop())
      alert('pari ajouté');
    
    
};

function handlePressBetHome (ticket, item) {
 
    ticket.push({
      awayTeam: item.awayTeam,
    homeTeam: item.homeTeam,
    commenceTime: item.commenceTime,
    id: item.id,
    league: item.league,
    prediction: item.homeTeam,
    predictionStatut: 1,
    odd : item.odds[0].odd,
    statut : false
    });
    addBetOnTicket3(ticket, ticket.pop())
    alert('pari ajouté');
  
  
};

function handlePressBetAway (ticket, item) {
 
    ticket.push({
      awayTeam: item.awayTeam,
    homeTeam: item.homeTeam,
    commenceTime: item.commenceTime,
    id: item.id,
    league: item.league,
    prediction: item.awayTeam,
    predictionStatut: 3,
    odd : item.odds[2].odd,
    statut : false
    });
    addBetOnTicket3(ticket, ticket.pop())
    alert('pari ajouté');
  
};

function renderFooter(){
  return (
    <View style={{height: 50, padding: 50}}>

    </View>
  );
}
if(data[0].homeTeam == ""){
  return (
    <View style={{flex: 1,
      backgroundColor: '#B4F7FF',
      alignItems: 'center',
      justifyContent: 'center',}}>
      <Text>Bientot disponible ... ⌛</Text>
    </View>
  )
}
 else{
  return (


    <View style={styles.container}>
      <StatusBar style="auto" />
      
       <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ListFooterComponent={renderFooter()}
            renderItem={({ item }) => {
              if (item.statutMatch == 0 && item.homeTeam != ""){
                return (
                  <View style={styles.match}>
                          <Text style={styles.titreMatch}>{item.homeTeam} - {item.awayTeam}</Text>
                          <Text style={styles.championnat}>{item.league}</Text>
                          <Text style={styles.description_Match}>{item.commenceTime}</Text>
                          <View style={styles.odds_container}>
                          <View>
                                <CustomButton1 
                                  number='1' 
                                  odd= {item.odds[0].odd}
                                  onPress={() => handlePressBetHome(ticket,item)}                                  />
                              </View>
                                  
                              
                              <View>
                                <CustomButton1 
                                number='2' 
                                odd= {item.odds[2].odd}
                                onPress={() => handlePressBetAway(ticket,item)}
                                />
                              </View>
                          </View>
                      </View>
                  
                )
              }
          
                
             }}
          />
        </SafeAreaView>
      
      
    </View>
  );
 }
}



const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4F7FF',
    //alignItems: 'center',
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

export default BasketballScreen;