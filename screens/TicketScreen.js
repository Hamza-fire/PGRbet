import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, TextInput, Switch,KeyboardAvoidingView } from 'react-native';
import { icons, COLORS, SIZES } from '../constants';
import {AdMobInterstitial} from 'expo-ads-admob';
import * as firebase from "firebase";
import "firebase/firestore";
import { deleteBetOnTicket, addTicketOnParis, emptyTicket, updateMatch, resetTicketReel, updateCoins, updateFireCoins, updatePgrScore, resetBoost } from "../API/firebaseMethods";




export default function Ticket({ navigation }) {
   
  
    return (
      <TicketScreen/>
    );
  
}


const TicketScreen = ({ navigation }) => {
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [ticket, setTicket] = useState([]);
  const [ticketReel, setTicketReel] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [mise, setMise] = useState(0);
  const [coins, setCoins] = useState(0);
  const [fireCoins, setFireCoins] = useState(0);
  const [boost, setBoost] = useState(false);

  const interstitial = Platform.OS === 'ios' ? "ca-app-pub-2603171555783508/8089996671" : "ca-app-pub-2603171555783508/6482251591";


  async function displayInter() {
    await AdMobInterstitial.setAdUnitID(interstitial); 
    await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
    await AdMobInterstitial.showAdAsync();

  }

  function getUserTicket() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        async function UpdateUserTicket(){
          let doc = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get();
    
          if (!doc.exists){
            Alert.alert('No user data found!')
          } else {
            let dataObj = doc.data();
            setTicket(dataObj.ticket)
          
          }
        }
       
        UpdateUserTicket();
       
      } else {
        Alert.alert("There is something wrong!!!!", err.message);
      }
      
  })
  }

  function getUserTicketReel() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        async function UpdateUserTicket(){
          let doc = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get();
    
          if (!doc.exists){
            Alert.alert('No user data found!')
          } else {
            let dataObj = doc.data();
            setTicketReel(dataObj.ticketReel)
          
          }
        }
       
        UpdateUserTicket();
       
      } else {
        Alert.alert("There is something wrong!!!!", err.message);
      }
      
  })
  }


  function renderTotalOdd() {
     let s = 0;
    for (let i=0; i<ticket.length; i++) {
     s = s + parseFloat(ticket[i].odd, 10);
    }
    return s;
  }

  function sameMatchOnTicket(ticket){
    if (ticket.length > 1){
      for (let i=0; i<ticket.length-1; i++) {
      
          if (ticket[i].id == ticket[i+1].id){
            return true;
          
        }
      }
    }
     return false;
  }

  function handlePressValidateCoins() {
    if(mise == 0){
      alert('La mise est de 0');
    }
    if(ticket.length == 0){
      alert('Le ticket est vide');
    }
    if(ticket.length > 8){
      alert('La taille du ticket ne doit pas dépasser 8 matchs');
    }
    if(mise > coins){
      alert('Solde insuffisant');
    } if(sameMatchOnTicket(ticket)){
      alert('le ticket contient deux fois le meme match !')
    }
     else if ((mise <= coins) && (ticket.length != 0) && (mise != 0) && (!sameMatchOnTicket(ticket)) && (boost == false)) {
      updateMatch(ticket, (mise * renderTotalOdd()).toFixed(2));
      getUserTicketReel();
      setConfirmVisible(true)
    }
    else if ((mise <= coins) && (ticket.length != 0) && (mise != 0) && (!sameMatchOnTicket(ticket)) && (boost == true)) {
      updateMatch(ticket, (mise * renderTotalOdd()* 1.10).toFixed(2));
      getUserTicketReel();
      setConfirmVisible(true)
    }
  }

  function handlePressValidateFireCoins() {
    if(mise == 0){
      alert('La mise est de 0');
    }
    if(ticket.length == 0){
      alert('Le ticket est vide');
    }
    if(ticket.length > 8){
      alert('La taille du ticket ne doit pas dépasser 8 matchs');
    }
    if (mise > 5000){
      alert('Vous ne pouvez pas miser plus de 5000 unités de feu')
    }
    if(mise > fireCoins){
      alert('Solde insuffisant');
    } if(sameMatchOnTicket(ticket)){
      alert('le ticket contient deux fois le meme match !')
    }
     else if ((mise <= fireCoins) && (ticket.length != 0) && (mise != 0) && (!sameMatchOnTicket(ticket)) && (boost == false) && (mise <= 3000)) {
      updateMatch(ticket, (mise * renderTotalOdd()).toFixed(2));
      getUserTicketReel();
      setConfirmVisible(true)
    }

    else if ((mise <= fireCoins) && (ticket.length != 0) && (mise != 0) && (!sameMatchOnTicket(ticket)) && (boost == true) && (mise <= 3000)) {
      updateMatch(ticket, (mise * renderTotalOdd()* 1.10).toFixed(2));
      getUserTicketReel();
      setConfirmVisible(true)
    }
  }

  function handlePressConfirmCoins(){
    addTicketOnParis(ticketReel);
    updateCoins(mise);
    updatePgrScore(10);
    emptyTicket();
    resetTicketReel();
    resetBoost();
    alert('Pari validé');
    displayInter();
    setConfirmVisible(false);
  }

  function handlePressConfirmFireCoins(){
    addTicketOnParis(ticketReel);
    updateFireCoins(mise);
    updatePgrScore(5);
    emptyTicket();
    resetTicketReel();
    resetBoost();
    alert('Pari validé');
    displayInter();
    setConfirmVisible(false);
  }

  function handlePressCancel(){
    emptyTicket();
    resetTicketReel();
    alert('Pari validé');
    displayInter();
    setConfirmVisible(false);
    
  }

  function renderConfirmCancelCoins() {
    if(confirmVisible == true){
      return (
        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
            <TouchableOpacity 
            style={{padding: 15, borderWidth:2, borderColor:'#87ceeb',backgroundColor:'#87ceeb', borderRadius:8,top: 7}}
            onPress={() => handlePressConfirmCoins()}>
              <Text style={{fontFamily:"Roboto_700Bold", color:'white'}}>Confirmer</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
            style={{padding: 15, borderWidth:2, borderColor:'#FF7F7F',backgroundColor:'#FF7F7F',borderRadius:8,top: 7}}
            onPress={() => handlePressCancel()}>
              <Text style={{fontFamily:"Roboto_700Bold", color:'white'}}>Annuler</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }

  function renderConfirmCancelFireCoins() {
    if(confirmVisible == true){
      return (
        <View style={{flexDirection: 'row', justifyContent:'space-evenly'}}>
            <TouchableOpacity 
            style={{padding: 15, borderWidth:2, borderColor:'#87ceeb',backgroundColor:'#87ceeb', borderRadius:8,top: 7}}
            onPress={() => handlePressConfirmFireCoins()}>
              <Text style={{fontFamily:"Roboto_700Bold", color:'white'}}>Confirmer</Text>
            </TouchableOpacity>
  
            <TouchableOpacity
            style={{padding: 15, borderWidth:2, borderColor:'#FF7F7F',backgroundColor:'#FF7F7F',borderRadius:8,top: 7}}
            onPress={() => handlePressCancel()}>
              <Text style={{fontFamily:"Roboto_700Bold", color:'white'}}>Annuler</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
    
    
  useEffect(() => {
    
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        let estAffiche = true; // Ce booléen va indiquer que le composant est affiché
        async function getUserInfo(){
          let doc = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get();
    
          if (!doc.exists){
            Alert.alert('No user data found!')
          } else {
            let dataObj = doc.data();
            if (estAffiche) {
              setTicket(dataObj.ticket)
              setCoins(dataObj.coins)
              setFireCoins(dataObj.fireCoins)
              setBoost(dataObj.boost)
           }
          }
        }
        getUserInfo();
        return () => { estAffiche = false }; // Cette fonction sera utilisée lors du nettoyage du composant, on va indiquer qu'il n'est plus affiché
      } else {
        alert("ya un truc qui va pas ! le user n'est pas co")
      }
      
  })});

  function renderHeaderCoins() {
    if(boost == true){
      return (
        <View>
              <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
                                    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_900Black", fontSize: 38, lineHeight: 46  }}>Votre ticket</Text>
                                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent:'center'}}>
                                      <Switch
                                        style={{bottom:19}}
                                        trackColor={{ false: '#ffee78', true: '#ffb6c1' }}
                                        thumbColor={isEnabled ? '#ffee78' : '#ffb6c1'}
                                        ios_backgroundColor="#81b0ff"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                      />
        
                                    </View>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', margin:8,top: -6}}>
                  
                    <Image
                                      source={require("../icons/coin.png")}
                                      resizeMode="contain"
                                      style={{
                                          width: 25,
                                          height: 25,
                                          top: -8
                                      }}
                                  />
                                <View style={{backgroundColor: COLORS.black, width: '25%', height: 3}}></View>
                    <View style={{backgroundColor:"#93C572",top: -30, left: 125, width: 75, height: 25,alignItems:'center', justifyContent:'center', borderRadius: 5 }}>
                      <Text style={{fontFamily:'Roboto_700Bold', color:COLORS.white}}>Bonus 10%</Text>
                    </View>
                </View>
        </View>
            
        
      )
    } else {
      return (
        <View>
              <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
                                    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_900Black", fontSize: 38, lineHeight: 46  }}>Votre ticket</Text>
                                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent:'center'}}>
                                      <Switch
                                        style={{bottom:19}}
                                        trackColor={{ false: '#ffee78', true: '#ffb6c1' }}
                                        thumbColor={isEnabled ? '#ffee78' : '#ffb6c1'}
                                        ios_backgroundColor="#81b0ff"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                      />
        
                                    </View>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', margin:8,top: -6}}>
                  
                    <Image
                                      source={require("../icons/coin.png")}
                                      resizeMode="contain"
                                      style={{
                                          width: 25,
                                          height: 25,
                                          top: -8
                                      }}
                                  />
                                <View style={{backgroundColor: COLORS.black, width: '25%', height: 3}}></View>
                    <View style={{backgroundColor:COLORS.lightGray,top: -30, left: 125, width: 75, height: 25,alignItems:'center', justifyContent:'center', borderRadius: 5 }}>
                      <Text style={{fontFamily:'Roboto_700Bold', color:"#023020"}}>Bonus 10%</Text>
                    </View>
                </View>
        </View>
            
        
      )
    }
  }

  function renderHeaderFireCoins() {
    if(boost == true){
      return (
        <View>
              <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
                                    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_900Black", fontSize: 38, lineHeight: 46  }}>Votre ticket</Text>
                                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent:'center'}}>
                                      <Switch
                                        style={{bottom:19}}
                                        trackColor={{ false: '#ffee78', true: '#ffb6c1' }}
                                        thumbColor={isEnabled ? '#ffee78' : '#ffb6c1'}
                                        ios_backgroundColor="#81b0ff"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                      />
        
                                    </View>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', margin:8,top: -6}}>
                  
                    <Image
                                      source={require("../icons/fire.png")}
                                      resizeMode="contain"
                                      style={{
                                          width: 25,
                                          height: 25,
                                          top: -8
                                      }}
                                  />
                                <View style={{backgroundColor: COLORS.black, width: '25%', height: 3}}></View>
                    <View style={{backgroundColor:"#93C572",top: -30, left: 125, width: 75, height: 25,alignItems:'center', justifyContent:'center', borderRadius: 5 }}>
                      <Text style={{fontFamily:'Roboto_700Bold', color:COLORS.white}}>Bonus 10%</Text>
                    </View>
                </View>
        </View>
            
        
      )
    } else {
      return (
        <View>
              <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding}}>
                                    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_900Black", fontSize: 38, lineHeight: 46  }}>Votre ticket</Text>
                                    <View style={{flex: 1, alignItems: 'flex-end', justifyContent:'center'}}>
                                      <Switch
                                        style={{bottom:19}}
                                        trackColor={{ false: '#ffee78', true: '#ffb6c1' }}
                                        thumbColor={isEnabled ? '#ffee78' : '#ffb6c1'}
                                        ios_backgroundColor="#81b0ff"
                                        onValueChange={toggleSwitch}
                                        value={isEnabled}
                                      />
        
                                    </View>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', margin:8,top: -6}}>
                  
                    <Image
                                      source={require("../icons/fire.png")}
                                      resizeMode="contain"
                                      style={{
                                          width: 25,
                                          height: 25,
                                          top: -8
                                      }}
                                  />
                                <View style={{backgroundColor: COLORS.black, width: '25%', height: 3}}></View>
                    <View style={{backgroundColor:COLORS.lightGray,top: -30, left: 125, width: 75, height: 25,alignItems:'center', justifyContent:'center', borderRadius: 5 }}>
                      <Text style={{fontFamily:'Roboto_700Bold', color:"#023020"}}>Bonus 10%</Text>
                    </View>
                </View>
        </View>
            
        
      )
    }
  }


  function renderFooterCoins(){
    if(boost == true){
      return (
        <View>
          
                          <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', marginRight: 10}}>
                                          <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 18 }}>  Gains potentiels :</Text>
                                          <Text style ={{color: "orange",fontFamily: "Roboto_700Bold", fontSize: SIZES.h3 +5, lineHeight: 22}}>      {(mise * renderTotalOdd()* 1.10).toFixed(2)}</Text>
                                          <Image
                                              source={require("../icons/coin.png")}
                                              resizeMode="contain"
                                              style={{
                                                  width: 25,
                                                  height: 25,
                                                  marginLeft: 7,
                                                  bottom: 2.5,
                                                  
                                              }}
                                            />
                                        </View>
                                        <TouchableOpacity 
                                        style={{borderColor:'orange',borderWidth:2, padding:7, marginTop:7}}
                                        onPress={() => handlePressValidateCoins()}>
                                          <Text style={{fontFamily:"Roboto_700Bold",color:'black'}}>                                               Valider le ticket</Text>
                                        </TouchableOpacity>
                                        
                                          {renderConfirmCancelCoins()}
                                        
                                          
        </View>
  )
    } else {
      return (
        <View>
          
                          <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', marginRight: 10}}>
                                          <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 18 }}>  Gains potentiels :</Text>
                                          <Text style ={{color: "orange",fontFamily: "Roboto_700Bold", fontSize: SIZES.h3 +5, lineHeight: 22}}>      {(mise * renderTotalOdd()).toFixed(2)}</Text>
                                          <Image
                                              source={require("../icons/coin.png")}
                                              resizeMode="contain"
                                              style={{
                                                  width: 25,
                                                  height: 25,
                                                  marginLeft: 7,
                                                  bottom: 2.5,
                                                  
                                              }}
                                            />
                                        </View>
                                        <TouchableOpacity 
                                        style={{borderColor:'orange',borderWidth:2, padding:7, marginTop:7}}
                                        onPress={() => handlePressValidateCoins()}>
                                          <Text style={{fontFamily:"Roboto_700Bold",color:'black'}}>                                 Valider le ticket</Text>
                                        </TouchableOpacity>
                                        
                                          {renderConfirmCancelCoins()}
                                        
                                          
        </View>
  )
    }
  }

  function renderFooterFireCoins(){
    if(boost == true) {
      return (
        <View>
          
                          <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', marginRight: 10}}>
                                          <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 18 }}>  Gains potentiels :</Text>
                                          <Text style ={{color: "orange",fontFamily: "Roboto_700Bold", fontSize: SIZES.h3 +5, lineHeight: 22}}>      {(mise * renderTotalOdd()* 1.10).toFixed(2)}</Text>
                                          <Image
                                              source={require("../icons/coin.png")}
                                              resizeMode="contain"
                                              style={{
                                                  width: 25,
                                                  height: 25,
                                                  marginLeft: 7,
                                                  bottom: 2.5,
                                                  
                                              }}
                                            />
                                        </View>
                                        <TouchableOpacity 
                                        style={{borderColor:'orange',borderWidth:2, padding:7, marginTop:7}}
                                        onPress={() => handlePressValidateFireCoins()}>
                                          <Text style={{fontFamily:"Roboto_700Bold",color:'black'}}>                                 Valider le ticket</Text>
                                        </TouchableOpacity>
                                        
                                          {renderConfirmCancelFireCoins()}
                                        
                                          
        </View>
  )
    } else {
      return (
        <View>
          
                          <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', marginRight: 10}}>
                                          <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 18 }}>  Gains potentiels :</Text>
                                          <Text style ={{color: "orange",fontFamily: "Roboto_700Bold", fontSize: SIZES.h3 +5, lineHeight: 22}}>      {(mise * renderTotalOdd()).toFixed(2)}</Text>
                                          <Image
                                              source={require("../icons/coin.png")}
                                              resizeMode="contain"
                                              style={{
                                                  width: 25,
                                                  height: 25,
                                                  marginLeft: 7,
                                                  bottom: 2.5,
                                                  
                                              }}
                                            />
                                        </View>
                                        <TouchableOpacity 
                                        style={{borderColor:'orange',borderWidth:2, padding:7, marginTop:7}}
                                        onPress={() => handlePressValidateFireCoins()}>
                                          <Text style={{fontFamily:"Roboto_700Bold",color:'black'}}>                                 Valider le ticket</Text>
                                        </TouchableOpacity>
                                        
                                          {renderConfirmCancelFireCoins()}
                                        
                                          
        </View>
  )
    }
  }

  function renderMiseCoins(){
    return(
          <View style={styles.miseContainer}>
                                                    <Text style={{top:5, marginLeft: 5}}>Mise :</Text>
                                                    <View style={styles.inputContainerCoins}>
                                                      <TextInput
                                                      style={styles.input}
                                                          labelValue={mise}
                                                          onChangeText={(userMise) => setMise(userMise)}
                                                          placeholderText=" Mise "
                                                          keyboardType="numeric"
                                                      />
                                                    </View>
                                                    
                                                                <View style={{flexDirection:'row'}}>
                                                                  <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 18 }}>  Cote totale :</Text>
                                                                  
                                                                    <Text style={{ fontFamily: "Roboto_700Bold", fontSize: SIZES.h4, lineHeight: 20 }}>                    {renderTotalOdd().toFixed(2)}</Text>
                        
                                                    
                                                    </View>
                                                  </View>
    )
  }

  function renderMiseFireCoins(){
    return(
          <View style={styles.miseContainer}>
                                                    <Text style={{top:5, marginLeft: 5}}>Mise :</Text>
                                                    <View style={styles.inputContainerFireCoins}>
                                                      <TextInput
                                                      style={styles.input}
                                                          labelValue={mise}
                                                          onChangeText={(userMise) => setMise(userMise)}
                                                          placeholderText=" Mise "
                                                          keyboardType="numeric"
                                                      />
                                                    </View>
                                                    
                                                                <View style={{flexDirection:'row'}}>
                                                                  <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 18 }}>  Cote totale :</Text>
                                                                  
                                                                    <Text style={{ fontFamily: "Roboto_700Bold", fontSize: SIZES.h4, lineHeight: 20 }}>                    {renderTotalOdd().toFixed(2)}</Text>
                        
                                                    
                                                    </View>
                                                  </View>
    )
  }

         
    if (isEnabled) {
      return (
        <KeyboardAvoidingView style={styles.container}>
              <StatusBar style="auto" />
                                      <FlatList
                                            data={ticket}
                                            ListHeaderComponent={renderHeaderCoins()}
                                            ListFooterComponent={renderFooterCoins()}
                                            keyExtractor={({ id }, index) => id}
                                            renderItem={({ item }) => {
                                              return (
                                                <View>
                                                  <View style={{flexDirection: 'row'}}>
                                                        <View style={styles.betDetails}>
                                                          <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.body3 -4, lineHeight: 25 }}>{item.homeTeam} - {item.awayTeam}</Text> 
                                                          <Text style ={{color: "#00a300",fontFamily: "Roboto_700Bold", fontSize: SIZES.h4, lineHeight: 22}}> {item.prediction}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 8, top: 9 }}>
                                                              <TouchableOpacity
                                                                  onPress={() => deleteBetOnTicket(ticket,item)}
                                                              >
                                                                  <Image
                                                                      source={icons.garbage}
                                                                      resizeMode="contain"
                                                                      style={{
                                                                          width: 20,
                                                                          height: 20
                                                                      }}
                                                                  />
                                                              </TouchableOpacity>
                                                              <View style={{justifyContent:'flex-end', top: 10}}>
                                                                <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 20 }}>{item.odd}</Text>
                                                              </View>
                                                          </View>
                                                      </View>
                                                    <View style={{backgroundColor: COLORS.lightGray3, width: '100%', height: 1.5, top:7, margin: 13, marginLeft:1}}></View>
                                                     
                                                </View>
                                                
                                                
                                              );
                                            }}
                          
                                      />
                                        {renderMiseCoins()}
                            </KeyboardAvoidingView>
    )
    } else if (!isEnabled) {
      return (
        <KeyboardAvoidingView style={styles.container}>
              <StatusBar style="auto" />
                                      <FlatList
                                            data={ticket}
                                            ListHeaderComponent={renderHeaderFireCoins()}
                                            ListFooterComponent={renderFooterFireCoins()}
                                            keyExtractor={({ id }, index) => id}
                                            renderItem={({ item }) => {
                                              return (
                                                <View>
                                                  <View style={{flexDirection: 'row'}}>
                                                        <View style={styles.betDetails}>
                                                          <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.body3 -4, lineHeight: 25 }}>{item.homeTeam} - {item.awayTeam}</Text> 
                                                          <Text style ={{color: "#00a300",fontFamily: "Roboto_700Bold", fontSize: SIZES.h4, lineHeight: 22}}> {item.prediction}</Text>
                                                        </View>
                                                        <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 8, top: 9 }}>
                                                              <TouchableOpacity
                                                                  onPress={() => deleteBetOnTicket(ticket,item)}
                                                              >
                                                                  <Image
                                                                      source={icons.garbage}
                                                                      resizeMode="contain"
                                                                      style={{
                                                                          width: 20,
                                                                          height: 20
                                                                      }}
                                                                  />
                                                              </TouchableOpacity>
                                                              <View style={{justifyContent:'flex-end', top: 10}}>
                                                                <Text style={{ fontFamily: "Roboto_400Regular", fontSize: SIZES.h4, lineHeight: 20 }}>{item.odd}</Text>
                                                              </View>
                                                          </View>
                                                      </View>
                                                    <View style={{backgroundColor: COLORS.lightGray3, width: '100%', height: 1.5, top:7, margin: 13, marginLeft:1}}></View>
                                                     
                                                </View>
                                                
                                                
                                              );
                                            }}
                          
                                      />
                          
                                          {renderMiseFireCoins()}
                            </KeyboardAvoidingView>
    )
    }
    
    
    
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafd",
  },

  betContainerCoins: {
    marginRight: 32,
    marginLeft:-5,
    top: 8,
    left: 20,
    right: 20,
    backgroundColor: '#ffee78',
    borderRadius: 15,
    shadowColor: '#7F5DF0',
    shadowOffset: {
    width: 100,
    height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

  betContainerFireCoins: {
    marginRight: 32,
    marginLeft:-5,
    top: 8,
    left: 20,
    right: 20,
    backgroundColor: '#ffb6c1',
    borderRadius: 15,
    shadowColor: '#7F5DF0',
    shadowOffset: {
    width: 100,
    height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },

  betDetails: {
    marginLeft: 4.3,
    top: 1.1,
  },
  inputContainerCoins: {
    right:3,
    marginBottom: 10,
    marginLeft: 10,
    width: '20%',
    height: 35,
    borderColor: "orange",
    borderRadius: 15,
    borderWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  inputContainerFireCoins: {
    right:3,
    marginBottom: 10,
    marginLeft: 10,
    width: '20%',
    height: 35,
    borderColor: '#f7263e',
    borderRadius: 15,
    borderWidth: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 35,
    padding: 10,
    width:'100%'
  },
  miseContainer:{
    flexDirection : 'row',
    marginTop: 32,
    height:60,
    paddingLeft: 5,
    paddingBottom: -5,
    
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

