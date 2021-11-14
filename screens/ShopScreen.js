import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import AppLoading from 'expo-app-loading';
import firebase from '../firebase/fire';
import { useFonts, Roboto_900Black, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
} from 'react-native'
import { 
    updateReward, 
    updateAmazonRewardBase, 
    updatePaypalRewardBase, 
    updatePsnRewardBase, 
    updateRobloxRewardBase,
    updateCoins,
    updatePgrScore } from "../API/firebaseMethods";

import { images, icons, COLORS, SIZES } from '../constants';

export default function Shop() {
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_700Bold,
    Roboto_400Regular,

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ShopScreen/>
    );
  }
}


const FONTS = {
    largeTitle: { fontFamily: "Roboto_900Black", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto_900Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto_700Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto_400Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto_400Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto_400Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto_400Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginHorizontal: SIZES.padding }}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>

            {
                selectedTab.id == item.id &&
                <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#e32f45' }}></View>
                </View>
            }
        </TouchableOpacity>
    );

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {
    const [coins, setCoins] = useState(0);
    const [paypal, setPaypal] = useState([]);
    const [amazon, setAmazon] = useState([]);
    const [psn, setPsn] = useState([]);
    const [roblox, setRoblox] = useState([]);


    

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            var uid = user.uid;
            async function getCoins(){
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
        
              }
            }
            async function getPaypalCodes(){
                let doc = await firebase
                .firestore()
                .collection('codes')
                .doc('Paypal')
                .get();
          
                if (!doc.exists){
                  Alert.alert('No user data found!')
                } else {
                  let dataObj = doc.data();
                  setPaypal(dataObj.paypal)
          
                }
              }
              async function getAmazonCodes(){
                let doc = await firebase
                .firestore()
                .collection('codes')
                .doc('Amazon')
                .get();
          
                if (!doc.exists){
                  Alert.alert('No user data found!')
                } else {
                  let dataObj = doc.data();
                  setAmazon(dataObj.amazon)
          
                }
              }
              async function getPSNCodes(){
                let doc = await firebase
                .firestore()
                .collection('codes')
                .doc('PSN')
                .get();
          
                if (!doc.exists){
                  Alert.alert('No user data found!')
                } else {
                  let dataObj = doc.data();
                  setPsn(dataObj.psn)
          
                }
              }
              async function getRobloxCodes(){
                let doc = await firebase
                .firestore()
                .collection('codes')
                .doc('Roblox')
                .get();
          
                if (!doc.exists){
                  Alert.alert('No user data found!')
                } else {
                  let dataObj = doc.data();
                  setRoblox(dataObj.roblox)
          
                }
              }
            getCoins();
            getPaypalCodes();
            getAmazonCodes();
            getPSNCodes();
            getRobloxCodes();
          } else {
            navigation.navigate('Login');
          }
          
      })}, []);


    const renderCard = ({ item }) => (
        
        <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={() => {
                if(item.price > coins){
                    alert("Solde insuffisant");
                } else {
                    if ((item.title) == "paypal") {
                        if ((item.priceEU) == 10) {
                            if(paypal.paypal10.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(paypal.paypal10[0]);                           
                                paypal.paypal10.shift();                           
                                updatePaypalRewardBase(paypal)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")
                            }
                        } else if ((item.priceEU) == 20) {
                            if(paypal.paypal20.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(paypal.paypal20[0]);
                                paypal.paypal20.shift();                           
                                updatePaypalRewardBase(paypal)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")
                            }
                        } else if ((item.priceEU) == 50) {
                            if(paypal.paypal50.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(paypal.paypal50[0]);
                                paypal.paypal50.shift();                           
                                updatePaypalRewardBase(paypal)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")
                            }
                            
                        }
                    } else if ((item.title) == "amazon") {
                        if ((item.priceEU) == 10) {
                            if(amazon.amazon10.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(amazon.amazon10[0])
                            amazon.amazon10.shift();                           
                            updateAmazonRewardBase(amazon)
                            updateCoins(item.price),
                            updatePgrScore(1000)
                            alert("Votre code vous attend dans votre profil :)")
                            }
                            
                        } else if ((item.priceEU) == 20) {
                            if(amazon.amazon20.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(amazon.amazon20[0])
                            amazon.amazon20.shift();                           
                            updateAmazonRewardBase(amazon)
                            updateCoins(item.price),
                            updatePgrScore(1000)
                            alert("Votre code vous attend dans votre profil :)")
                            }
                            
                        } else if ((item.priceEU) == 50) {
                            if(amazon.amazon50.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(amazon.amazon50[0])
                                amazon.amazon50.shift();                           
                                updateAmazonRewardBase(amazon)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")
                            }
                           
                        }
                    } else if ((item.title) == "psn") {
                        if ((item.priceEU) == 10) {
                            if(psn.psn10.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(psn.psn10[0])
                            psn.psn10.shift();                           
                            updatePsnRewardBase(psn)
                            updateCoins(item.price),
                            updatePgrScore(1000)
                            alert("Votre code vous attend dans votre profil :)")
                            }
                            
                        } else if ((item.priceEU) == 20) {
                            if(psn.psn20.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(psn.psn20[0])
                            psn.psn20.shift();                           
                            updatePsnRewardBase(psn)
                            updateCoins(item.price),
                            updatePgrScore(1000)
                            alert("Votre code vous attend dans votre profil :)")
                            }
                            
                        } else if ((item.priceEU) == 50) {
                            if(psn.psn50.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(psn.psn50[0])
                            psn.psn50.shift();                           
                            updatePsnRewardBase(psn)
                            updateCoins(item.price),
                            updatePgrScore(1000)
                            alert("Votre code vous attend dans votre profil :)")
                            }
                            
                        }
                    } else if ((item.title) == "roblox") {
                        if ((item.priceEU) == 10) {
                            if(roblox.roblox10.length == 0){
                                alert('Stock épuisé');
                            } else {updateReward(roblox.roblox10[0])
                                roblox.roblox10.shift();                           
                                updateRobloxRewardBase(roblox)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")}
                            
                        } else if ((item.priceEU) == 20) {
                            if(roblox.roblox20.length == 0){
                                alert('Stock épuisé');
                            } else {
                                updateReward(roblox.roblox20[0])
                                roblox.roblox20.shift();                           
                                updateRobloxRewardBase(roblox)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")
                            }
                           
                        } else if ((item.priceEU) == 50) {
                            if(roblox.roblox50.length == 0){
                                alert('Stock épuisé');
                            } else {updateReward(roblox.roblox50[0])
                                roblox.roblox50.shift();                           
                                updateRobloxRewardBase(roblox)
                                updateCoins(item.price),
                                updatePgrScore(1000)
                                alert("Votre code vous attend dans votre profil :)")}
                            
                        }
                    }
                    
                }
            }}
        >
            <View style={{ width: SIZES.width / 2 }}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%', borderRadius: SIZES.radius * 2 }}
                />

                <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}>
                    <Text style={{color: 'red', fontFamily: "Roboto_700Bold", fontSize: SIZES.h3 +5, lineHeight: 22}}>{item.priceEU} €</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
                </View>

                <View style={{ position: 'absolute', bottom: 20, left: 30, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: COLORS.transparentLightGray }}>
                <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                        <Image
                                  source={require("../icons/coin.png")}
                                  resizeMode="contain"
                                  style={{
                                      width: 25,
                                      height: 25
                                  }}
                              />
                        <Text style={{ fontFamily: "Roboto_700Bold", fontSize: SIZES.h3, lineHeight: 22 }}> {item.price}</Text>
                      </View>
                </View>
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => `${item.productId}`}
            />
        </View>
    )
}

const ShopScreen = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Paypal",
            title: "paypal",
            productList: [
                {
                    productId: 1,
                    productName: '',
                    title: "paypal",
                    price: 100000,
                    priceEU: 10,
                    image: images.sofa,
                },
                {
                    productId: 2,
                    productName: '',
                    title: "paypal",
                    price: 200000,
                    priceEU: 20,
                    image: images.sofa,
                },
                {
                    productId: 3,
                    productName: '',
                    title: "paypal",
                    price: 500000,
                    priceEU: 50,
                    image: images.sofa,
                },
            ]
        },
        {
            id: 1,
            name: "Amazon",
            title: 'amazon',
            productList: [
                {
                    productId: 4,
                    productName: '',
                    title: 'amazon',
                    price: 100000,
                    priceEU: 10,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: '',
                    title: 'amazon',
                    price: 200000,
                    priceEU: 20,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: '',
                    title: 'amazon',
                    price: 500000,
                    priceEU: 50,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "PSN",
            title: 'psn',
            productList: [
                {
                    productId: 7,
                    productName: '',
                    title: 'psn',
                    price: 100000,
                    priceEU: 10,
                    image: images.whiteChair,
                },
                {
                    productId: 8,
                    productName: '',
                    title: 'psn',
                    price: 200000,
                    priceEU: 20,
                    image: images.whiteChair,
                },
                {
                    productId: 9,
                    productName: '',
                    title: 'psn',
                    price: 500000,
                    priceEU: 50,
                    image: images.whiteChair,
                },

            ]
        },
        {
            id: 3,
            name: "Roblox",
            title: 'roblox',
            productList: [
                {
                    productId: 10,
                    productName: '',
                    title: 'roblox',
                    price: 100000,
                    priceEU: 10,
                    image: images.greenChair,
                },
                {
                    productId: 11,
                    productName: '',
                    title: 'roblox',
                    price: 200000,
                    priceEU: 20,
                    image: images.greenChair,
                },
                {
                    productId: 12,
                    productName: '',
                    title: 'roblox',
                    price: 500000,
                    priceEU: 50,
                    image: images.greenChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Paypal",
        title: 'paypal',
        productList: [
            {
                productId: 1,
                productName: '',
                title: 'paypal',
                price: 100000,
                priceEU: 10.00,
                image: images.sofa,
            },
            {
                productId: 2,
                productName: '',
                title: 'paypal',
                price: 200000,
                priceEU: 20.00,
                image: images.sofa,
            },
            {
                productId: 3,
                productName: '',
                title: 'paypal',
                price: 500000,
                priceEU: 50.00,
                image: images.sofa,
            },

        ]
    })
    

    
    // Render

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => console.log("Menu on clicked")}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Cart on clicked") }}
                        >
                            <Image
                                source={icons.cart}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>Carte cadeau</Text>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        )
    }

    function renderPromotionCard() {
        return (
            <View
                style={[styles.shadow, {
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 110,
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }]}
            >
                <View
                    style={{
                        width: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: COLORS.lightGray2,
                        borderRadius: 20
                    }}
                >
                    <Image
                        source={images.sofa}
                        resizeMode="contain"
                        style={{
                            width: '60%',
                            height: '60%'
                        }}
                    />
                </View>

                {/* Wordings section */}
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2 }}>Special Offer</Text>
                    <Text style={{ ...FONTS.body3 }}>Adding to your cart</Text>
                </View>

                {/* Button */}
                <View style={{ marginRight: SIZES.radius, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.primary,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '70%',
                            width: 40,
                            borderRadius: 10
                        }}
                        onPress={() => { console.log("Promo on clicked") }}
                    >
                        <Image
                            source={icons.chevron}
                            resizeMode="contain"
                            style={{
                                height: '50%',
                                width: '50%'
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            
            {/*renderHeader()*/}
            {renderTitle(selectedTab.title)}

            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />

            <View style={{ flex: 1 }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>

            {/* Footer - Promotion Card */
            <View style={{ height: "22%", justifyContent: 'flex-end' }}>
                
            </View>}
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafd'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    centeredView: {
        
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
        backgroundColor: "green",
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

})

