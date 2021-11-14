
import React, {useState, useEffect} from 'react';
import {View,Image, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen';
import ParisScreen from '../screens/ParisScreen';
import LoginScreen from '../screens/LoginScreen';
import Ticket from '../screens/TicketScreen'
import Tabs from './tabs';
import OnboardingScreen from '../screens/OnboardingScreen';
import RewardScreen from '../screens/RewardScreen';
import FAQScreen from '../screens/FAQScreen';
import InitBaseScreen from '../screens/InitBaseScreen'
import TermsScreen from '../screens/TermsScreen'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SIZES } from '../constants';
import firebase from '../firebase/fire';
import { resetTicketReel, emptyTicket } from '../API/firebaseMethods';


const Stack = createStackNavigator();

export default function AuthStack() {
  

  const [coins, setCoins] = useState(0);
  const [fireCoins, setFireCoins] = useState(0);
  const [refreshK, setRefreshK] = useState(0);

  
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
            setCoins(dataObj.coins)
        setFireCoins(dataObj.fireCoins)
    
          }
        }
        getUserInfo();
        return () => { estAffiche = false }; // Cette fonction sera utilisée lors du nettoyage du composant, on va indiquer qu'il n'est plus affiché
      } else {
        navigation.navigate('Login');
      }
      
  })});

 /*setInterval(function(){ 
    setRefreshK(refreshK +1);
}, 10000);*/

  function navAndResetAfterThirtyMin({navigation}){
    navigation.navigate('Ticket');
    setTimeout(function(){
      emptyTicket();
      resetTicketReel();
    }, 3000);
  }
  


  let routeName = 'Onboarding';
    return (
      <Stack.Navigator initialRouteName={routeName}>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{marginLeft: 6}}>
                <FontAwesome.Button 
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Ticket')}
                >
                  <View>
                  <Image
                                  source={require('../icons/coupon.png')}
                                  resizeMode='contain'
                                  style={{
                                      width: 30,
                                      height: 30,
                                      tintColor: '#748c94',
                                  }}
                              />
                  </View>
                </FontAwesome.Button>
              </View>
            ),
            headerRight: () => (
              
              <View style={{ flexDirection: 'row' }}>
                     <TouchableOpacity onPress={() => {setRefreshK(refreshK +1)}}>
                        <View style={{borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#ffee78', marginRight:10 }}>
                          <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                            <Image
                                      source={require("../icons/coin.png")}
                                      resizeMode="contain"
                                      style={{
                                          width: 25,
                                          height: 25
                                      }}
                                  />
                            <Text style={{ fontFamily: "Roboto_700Bold", fontSize: SIZES.h3, lineHeight: 22 }}> {coins}</Text>
                          </View>
                              
                          </View>
                     </TouchableOpacity>

                      <TouchableOpacity onPress={() => {setRefreshK(refreshK +1)}}>
                          <View style={{borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: '#ffb6c1',  marginRight:10 }}>
                            <View style={{ flexDirection: 'row' }}>
                              <Image
                                        source={require("../icons/fire.png")}
                                        resizeMode="contain"
                                        style={{
                                            width: 25,
                                            height: 25
                                        }}
                                    />
                              <Text style={{ fontFamily: "Roboto_700Bold", fontSize: SIZES.h3, lineHeight: 22 }}> {fireCoins}</Text>
                            </View>
                          </View>
                      </TouchableOpacity>
                      
                     
                  </View>
            ),
          })}
        />
        <Stack.Screen
          name="Ticket"
          component={Ticket}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Tabs')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Reward"
          component={RewardScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Tabs')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="FAQ"
          component={FAQScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Tabs')}
                />
              </View>
            ),
          })}
        />
         <Stack.Screen
          name="Init"
          component={InitBaseScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Tabs')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Confidentialité"
          component={TermsScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Signup')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="Paris"
          component={ParisScreen}
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,  
            },
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <FontAwesome.Button 
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Tabs')}
                />
              </View>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }


  

