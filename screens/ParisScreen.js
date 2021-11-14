import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { updateCoins, updateFireCoins, updateParis, updatePgrScore, updateParisReussis, updateMissions, updateMissionsReussis, updateBoost } from '../API/firebaseMethods';
import { images, COLORS } from '../constants';
import { renderStatutMatch0,  renderStatutMatch1, renderStatutMatch2, renderStatutMatch3, renderStatutMatch4, renderStatutMatch5, renderStatutMatch6, renderStatutMatch7} from '../methods/flatlistMethods';
import Swiper from 'react-native-swiper'
import * as firebase from "firebase";


export default function ParisScreen() {
  const [dataFR, setDataFR] = useState([]);
  const [dataENG, setDataENG] = useState([]);
  const [dataESP, setDataESP] = useState([]);
  const [dataGER, setDataGER] = useState([]);
  const [dataEU, setDataEU] = useState([]);
  const [dataPO, setDataPO] = useState([]);
  const [dataITA, setDataITA] = useState([]);
  const [dataBasket, setDataBasket] = useState([]);
  const [dataEsport, setDataEsport] = useState([]);
  const [dataMma, setDataMma] = useState([]);
  
  const [paris, setParis] = useState([]);
  const [coins, setCoins] = useState(0);
  const [missions, setMissions] = useState({});

  const [refreshKey, setRefreshKey] = useState(0);


  useEffect(() => {
    
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          var uid = user.uid;
          async function getMatchDataFR(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('France')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataFR(dataObj.data)
            }
          }
          async function getMatchDataENG(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('England')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataENG(dataObj.data)
            }
          }async function getMatchDataESP(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Spain')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataESP(dataObj.data)
            }
          }async function getMatchDataGER(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Germany')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataGER(dataObj.data)
            }
          }async function getMatchDataPO(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Portugal')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataPO(dataObj.data)
            }
          }async function getMatchDataITA(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Italy')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataITA(dataObj.data)
            }
          }async function getMatchDataEU(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Europe')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataEU(dataObj.data)
            }
          }async function getMatchDataBasket(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Basket')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataBasket(dataObj.data)
            }
          }async function getMatchDataEsport(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('Esport')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataEsport(dataObj.data)
            }
          }async function getMatchDataMma(){
            let doc = await firebase
            .firestore()
            .collection('season')
            .doc('MMA')
            .get();
      
            if (!doc.exists){
              Alert.alert('No user data found!')
            } else {
              let dataObj = doc.data();
              setDataMma(dataObj.data)
            }
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
              setCoins(dataObj.coins)
              setMissions(dataObj.statutMissions)
             }
          }
        getUserParis();
        getMatchDataFR();
        getMatchDataENG();
        getMatchDataESP();
        getMatchDataGER();
        getMatchDataITA();
        getMatchDataPO();
        getMatchDataEU();
        getMatchDataEsport();
        getMatchDataMma();
        getMatchDataBasket();
        
        } else {
          navigation.navigate('Login');
        }
        
    })},[]);


    function refreshNUpdateListParis(){
      updateListParis();
      setRefreshKey(refreshKey + 1);
    }

    function updateListParis() {
      let i = 0;
        for(i=0; i<paris.length; i++){
            
            var parisVerifie = true;       
            if (paris[i].statutVerif == false){
              for(let k=0; k<paris[i].matchs.length; k++){
                  
                  if((paris[i].matchs[k].league == "Ligue 1") || (paris[i].matchs[k].league == "Ligue 2")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataFR[n].id){
                      n++;
                    }
                    if(dataFR[n].result != 0 && dataFR[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataFR[n].result != 0 && dataFR[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataFR[n].result == 0){
                        parisVerifie = false;
                    }
                  }
                  if((paris[i].matchs[k].league == "Bundesliga") || (paris[i].matchs[k].league == "2. Bundesliga")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataGER[n].id){
                      n++;
                    }
                    if(dataGER[n].result != 0 && dataGER[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataGER[n].result != 0 && dataGER[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataGER[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "Premier League") || (paris[i].matchs[k].league == "Championship")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataENG[n].id){
                      n++;
                    }
                    if(dataENG[n].result != 0 && dataENG[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataENG[n].result != 0 && dataENG[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataENG[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "LaLiga") || (paris[i].matchs[k].league == "LaLiga2")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataESP[n].id){
                      n++;
                    }
                    if(dataESP[n].result != 0 && dataESP[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataESP[n].result != 0 && dataESP[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataESP[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "Serie A") || (paris[i].matchs[k].league == "Serie B")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataITA[n].id){
                      n++;
                    }
                    if(dataITA[n].result != 0 && dataITA[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataITA[n].result != 0 && dataITA[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataITA[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "Liga Portugal") || (paris[i].matchs[k].league == "Liga Portugal 2")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataPO[n].id){
                      n++;
                    }
                    if(dataPO[n].result != 0 && dataPO[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataPO[n].result != 0 && dataPO[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataPO[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "NBA")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataBasket[n].id){
                      n++;
                    }
                    if(dataBasket[n].result != 0 && dataBasket[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataBasket[n].result != 0 && dataBasket[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataBasket[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "LoL") || (paris[i].matchs[k].league == "Dota 2") || (paris[i].matchs[k].league == "Counter Strike")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataEsport[n].id){
                      n++;
                    }
                    if(dataEsport[n].result != 0 && dataEsport[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataEsport[n].result != 0 && dataEsport[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataEsport[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "UFC") || (paris[i].matchs[k].league == "Boxe")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataMma[n].id){
                      n++;
                    }
                    if(dataMma[n].result != 0 && dataEU[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataMma[n].result != 0 && dataMma[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataMma[n].result == 0){
                        parisVerifie = false;
                    }
                  }if((paris[i].matchs[k].league == "Ligue des Champions") || (paris[i].matchs[k].league == "Ligue Europa")){

                    let n = 0;
                    while (paris[i].matchs[k].id != dataEU[n].id){
                      n++;
                    }
                    if(dataEU[n].result != 0 && dataEU[n].result == paris[i].matchs[k].predictionStatut){
                      paris[i].matchs[k].statut = true;
                      paris[i].allPrediction.shift();
                    } else if (dataEU[n].result != 0 && dataEU[n].result != paris[i].matchs[k].predictionStatut){
                      paris[i].allPrediction.push(false);
                    } else if (dataEU[n].result == 0){
                        parisVerifie = false;
                    }
                  }
              }
        
                  if (paris[i].allPrediction.length == 0){
                    updateCoins(-parseFloat(paris[i].gain,10))
                    updatePgrScore(5);
                    updateParisReussis(1);
                  }

                  if (paris[i].allPrediction.length == 0 && parseFloat(paris[i].gain,10) > 5000){
                    if(missions.m1 == false) {
                      updateMissions(1)
                      updatePgrScore(15);
                      updateMissionsReussis(1);
                      updateBoost();
                    }
                  }

                  if (paris[i].allPrediction.length == 0 && parseFloat(paris[i].gain,10) > 10000){
                    if(missions.m2 == false) {
                      updateMissions(2)
                      updatePgrScore(30);
                      updateMissionsReussis(1);
                      updateFireCoins(-1000)
                    }
                  }

                  if (paris[i].allPrediction.length == 0 && parseFloat(paris[i].gain,10) > 30000 && paris[i].matchs.length == 8){
                    if(missions.m3 == false) {
                      updateMissions(3)
                      updatePgrScore(45);
                      updateMissionsReussis(1);
                      updateCoins(-10000)
                    }
                    
                  }
            
            }
            paris[i].statutVerif = parisVerifie;
          }
          updateParis(paris);
    }

    

    function renderHeader(){
      return(
        <View style={styles.refresh}>
              <TouchableOpacity
              style={{borderWidth: 2, borderColor:COLORS.gray, borderRadius:5, padding:17, flexDirection:'row',alignItems:'center'}}
              onPress={() => refreshNUpdateListParis()}>
                  <Text style={{fontFamily:"Roboto_700Bold", right: 3}}>Actualiser vos paris</Text>
                  <Image
                       source={images.refresh}
                       resizeMode="contain"
                       style={{
                           width: 20,
                           height: 20,
                           left: 5
                          }}
                  />
              </TouchableOpacity>
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_900Black", fontSize: 38, lineHeight: 46, top : 15, marginBottom: 22  }}>Tous vos paris : </Text>
            </View>
      )
    }

    function renderFooter(){
      return (
        <View style={{height: 50, padding: 50}}>

        </View>
      );
    }

        return (
            <View style={styles.container}>
              <StatusBar style="auto" />
              <FlatList
                  data={paris}
                  keyExtractor={({ id }, index) => id}
                  ListHeaderComponent={renderHeader()}
                  ListFooterComponent={renderFooter()}
                  renderItem={({ item }) => {
                    if (item.allPrediction.length == 0 && item.statutVerif == true) {  //Le pari est gagné
                      if (item.matchs.length == 1){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );
                      } else if(item.matchs.length == 2){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );
                      } else if(item.matchs.length == 3){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );
                      } else if(item.matchs.length == 4){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );

                      } else if(item.matchs.length == 5){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[4].homeTeam} - {item.matchs[4].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );

                      } else if(item.matchs.length == 6){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[4].homeTeam} - {item.matchs[4].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[5].homeTeam} - {item.matchs[5].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );

                      } else if(item.matchs.length == 7){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[4].homeTeam} - {item.matchs[4].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[5].homeTeam} - {item.matchs[5].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[6].homeTeam} - {item.matchs[6].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );

                      } else if(item.matchs.length == 8){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerWin}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Gagné </Text>
                                                  <Image
                                                      source={images.coins}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[4].homeTeam} - {item.matchs[4].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[5].homeTeam} - {item.matchs[5].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[6].homeTeam} - {item.matchs[6].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[7].homeTeam} - {item.matchs[7].awayTeam}</Text>
                                                  <Image
                                                      source={images.check}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 25,
                                                          height: 25,
                                                          left: 5,
                                                          top: 15
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>{item.gain} </Text>
                                                  <Image
                                                      source= {require("../icons/coin.png")}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 50,
                                                          height: 50,
                                                          left: 5
                                                          }}
                                                  />
                                          
                                                  
                                                </View>
                                                
                                            </Swiper>
                                </View>
                          </View>
                        );

                      }
                      
                    } else if (item.allPrediction.length != 0 && item.statutVerif == true){ //Le pari est perdu
                      if (item.matchs.length == 1){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                <View style={{alignItems:'center', justifyContent:'center'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 22,
                                                          height: 22,
                                                          left: 5,
                                                          top: 17
                                                          }}
                                                  />
                                                </View>
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 2){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 3){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                                {renderStatutMatch2(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 4){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                                {renderStatutMatch2(item)}
                                                {renderStatutMatch3(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 5){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                                {renderStatutMatch2(item)}
                                                {renderStatutMatch3(item)}
                                                {renderStatutMatch4(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 6){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                                {renderStatutMatch2(item)}
                                                {renderStatutMatch3(item)}
                                                {renderStatutMatch4(item)}
                                                {renderStatutMatch5(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 7){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                                {renderStatutMatch2(item)}
                                                {renderStatutMatch3(item)}
                                                {renderStatutMatch4(item)}
                                                {renderStatutMatch5(item)}
                                                {renderStatutMatch6(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      } else if(item.matchs.length == 8){
                        return (
                          <View style={styles.refresh}>
                            <Text style={{top: 40, left: 115}}>{item.matchs[0].commenceTime.substr(0,10)}</Text>
                              <View style={styles.parisContainerLose}> 
                                              <Swiper showsButtons={false} showsPagination={true} 
                                              paginationStyle={{top:80}}>
                                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>Perdu </Text>
                                                  <Image
                                                      source={images.cross}
                                                      resizeMode="contain"
                                                      style={{
                                                          width: 40,
                                                          height: 40,
                                                          left: 5
                                                          }}
                                                  />
                                                </View>
                                                {renderStatutMatch0(item)}
                                                {renderStatutMatch1(item)}
                                                {renderStatutMatch2(item)}
                                                {renderStatutMatch3(item)}
                                                {renderStatutMatch4(item)}
                                                {renderStatutMatch5(item)}
                                                {renderStatutMatch6(item)}
                                                {renderStatutMatch7(item)}
                                              </Swiper>
                               </View>
                          </View>
                        );

                      }
                      
                    } else if (item.statutVerif == false) {  //Le pari est en cours
                      return (
                        <View style={styles.refresh}>
                              <View style={styles.parisContainerInPlay}> 
                              <Swiper showsButtons={false} showsPagination={true} 
                              paginationStyle={{top:80}}>
                                <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 32, lineHeight: 75  }}>En cours ... </Text>
                                  <Image
                                      source={images.hourglass}
                                      resizeMode="contain"
                                      style={{
                                          width: 40,
                                          height: 40,
                                          left: 5,
                                          
                                          }}
                                  />
                                </View>
                                <View >
                                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_400Regular", fontSize: 14, lineHeight: 20, left:5  }}>Pensez à actualiser vos paris pour avoir en temps réel les résultats.</Text>
                                </View>
                                
                            </Swiper>
                            </View>
                        </View>
                      );
                    }
                    
                  }}
               />
              

              </View>
              
           
          );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafd",
  },
  refresh: {
    alignItems: 'center',
    top: 5,
  },
  parisContainerWin: {
    width : '85%',
    height: 100,
    borderLeftWidth : 5,
    borderWidth: 1.5,
    borderRightColor: COLORS.lightGray,
    borderTopColor: COLORS.lightGray,
    borderBottomColor: COLORS.lightGray,
    borderLeftColor: 'green',
    marginTop: 40,
    
  },
  parisContainerLose: {
    width : '85%',
    height: 100,
    borderLeftWidth : 5,
    borderWidth: 1.5,
    borderRightColor: COLORS.lightGray,
    borderTopColor: COLORS.lightGray,
    borderBottomColor: COLORS.lightGray,
    borderLeftColor: 'red',
    marginTop: 40,
    
  },
  parisContainerInPlay: {
    width : '85%',
    height: 100,
    borderLeftWidth : 5,
    borderWidth: 1.5,
    borderRightColor: COLORS.lightGray,
    borderTopColor: COLORS.lightGray,
    borderBottomColor: COLORS.lightGray,
    borderLeftColor: 'orange',
    marginTop: 40,
    
  },
});