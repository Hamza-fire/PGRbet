import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AdMobRewarded} from 'expo-ads-admob';
import {updateFireCoins} from '../API/firebaseMethods'
import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import ShopScreen from '../screens/ShopScreen'
import ProfilScreen from '../screens/ProfilScreen'
import SportsScreen from '../screens/SportsStack'



const Tabs = () => {
    const [loadedAd, setLoadedAd] = useState(true);
    const [timerCount, setTimer] = useState(30);
    const Tab = createBottomTabNavigator();

    const rewardedAdId = Platform.OS === 'ios' ? "ca-app-pub-2603171555783508/8185026131" : "ca-app-pub-2603171555783508/1907731703";

    
    function didPresent(){
        console.log("presented")
    }
    
    function dismiss(){
        console.log("Dismiss")
    }
    
    function earnIOS(){
        console.log("l'utilisateur a regardé jusqu'au bout")
        updateFireCoins(-100);
    }

    function earnAndroid(){
        console.log("l'utilisateur a regardé jusqu'au bout")
        updateFireCoins(-100);
    }

    function timerInterval(){
        if (timerCount <= 0){
            setTimer(30);
        }
        let interval = setInterval(() => {
            setTimer(lastTimerCount => {
                lastTimerCount <= 1 && clearInterval(interval)
                return lastTimerCount - 1
            })
          }, 1000) //each count lasts for a second
          //cleanup the interval on complete
          return () => clearInterval(interval);
    }
    
    async function handlePressAdIOS() {
        AdMobRewarded.removeAllListeners();
        await AdMobRewarded.setAdUnitID(rewardedAdId); 
        await AdMobRewarded.requestAdAsync();
            AdMobRewarded.addEventListener("rewardedVideoDidPresent", didPresent);
            AdMobRewarded.addEventListener("rewardedVideoDidDismiss", dismiss);
            AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", earnIOS);
        await AdMobRewarded.showAdAsync();
        setLoadedAd(false);
        timerInterval();
        setTimeout(function(){
            setLoadedAd(true);
          }, 30000); 
       
    }

    async function handlePressAdAndroid() {
        AdMobRewarded.removeAllListeners();
        await AdMobRewarded.setAdUnitID(rewardedAdId); 
        await AdMobRewarded.requestAdAsync();
            AdMobRewarded.addEventListener("rewardedVideoDidPresent", didPresent);
            AdMobRewarded.addEventListener("rewardedVideoDidDismiss", dismiss);
            AdMobRewarded.addEventListener("rewardedVideoUserDidEarnReward", earnAndroid);
        await AdMobRewarded.showAdAsync();
        setLoadedAd(false);
        setTimeout(function(){
            setLoadedAd(true);
          }, 30000); 
        
    }
    
    const CustomTabBarButtonIOS = ({children, onPress}) => (
        <TouchableOpacity
         style={{
             top: -30,
             justifyContent:'center',
             alignItems: 'center',
             shadowColor: '#7F5DF0',
             shadowOffset: {
                width: 0,
                height: 10,
                },
             shadowOpacity: 0.25,
             shadowRadius: 3.5,
             elevation: 5
         }}
         disabled={!loadedAd}
         onPress={() => handlePressAdIOS()}
        >
    
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#e32f45'
            }}>
            <Text style={{fontFamily:'Roboto_700Bold'}}>{timerCount}</Text>
                {children}
            </View>
        </TouchableOpacity>
    )

    const CustomTabBarButtonAndroid = ({children, onPress}) => (
        <TouchableOpacity
         style={{
             top: -30,
             justifyContent:'center',
             alignItems: 'center',
             shadowColor: '#7F5DF0',
             shadowOffset: {
                width: 0,
                height: 10,
                },
             shadowOpacity: 0.25,
             shadowRadius: 3.5,
             elevation: 5
         }}
         disabled={!loadedAd}
         onPress={() => handlePressAdAndroid()}
        >
    
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                backgroundColor: '#e32f45'
            }}>
                {children}
            </View>
        </TouchableOpacity>
    )
    
if (Platform.OS === 'ios'){
    return(
        <Tab.Navigator
         tabBarOptions={{
             showLabel: false,
             style: {
                 position: 'absolute',
                 bottom: 20,
                 left: 20,
                 right: 20,
                 elevation: 0,
                 backgroundColor: '#ffffff',
                 borderRadius: 15,
                 height: 90,
                 shadowColor: '#7F5DF0',
                 shadowOffset: {
                 width: 0,
                 height: 10,
                 },
                 shadowOpacity: 0.25,
                 shadowRadius: 3.5,
                 elevation: 5
             }
         }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>HOME</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Sports" component={SportsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/football.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>SPORTS</Text>
                        </View>
                    ),
                    
                }}
            />

            <Tab.Screen name="Ad" component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                            <Image
                                source={require('../icons/play-button.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: 5,
                                    top : -8,
                                    tintColor: '#fff',
                                }}
                            />
                    ),
                    tabBarButton: (props)=>(
                        <CustomTabBarButtonIOS {...props} />
                    )
                }}
            />
            <Tab.Screen name="Shop" component={ShopScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/shopping-cart.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>SHOP</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Profil" component={ProfilScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>PROFIL</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

else{
    return(
        <Tab.Navigator
         tabBarOptions={{
             showLabel: false,
             style: {
                 position: 'absolute',
                 bottom: 20,
                 left: 20,
                 right: 20,
                 elevation: 0,
                 backgroundColor: '#ffffff',
                 borderRadius: 15,
                 height: 90,
                 shadowColor: '#7F5DF0',
                 shadowOffset: {
                 width: 0,
                 height: 10,
                 },
                 shadowOpacity: 0.25,
                 shadowRadius: 3.5,
                 elevation: 5
             }
         }}>
            <Tab.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/home.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>HOME</Text>
                        </View>
                    ),
                }}
            />

            <Tab.Screen name="Sports" component={SportsScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/football.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>SPORTS</Text>
                        </View>
                    ),
                    
                }}
            />

            <Tab.Screen name="Ad" component={HomeScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                            <Image
                                source={require('../icons/play-button.png')}
                                resizeMode='contain'
                                style={{
                                    width: 30,
                                    height: 30,
                                    marginLeft: 5,
                                    tintColor: '#fff',
                                }}
                            />
                    ),
                    tabBarButton: (props)=>(
                        <CustomTabBarButtonAndroid {...props} />
                    )
                }}
            />
            <Tab.Screen name="Shop" component={ShopScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/shopping-cart.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>SHOP</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Profil" component={ProfilScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image
                                source={require('../icons/user.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94',
                                }}
                            />
                            <Text style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>PROFIL</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
            }
}


export default Tabs;