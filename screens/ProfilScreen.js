import React, {useState, useEffect, useCallback} from "react";
import { RefreshControl,SafeAreaView, ScrollView, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import { images, COLORS} from '../constants';
import firebase from '../firebase/fire';
import { renderProgressBar1, renderProgressBar2, renderProgressBar3 } from '../methods/flatlistMethods';
  

export default function Profil({ navigation }) {

  const [refreshK, setRefreshK] = useState(0);


const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const intoReward = () => {
  
      navigation.navigate('Reward');
}

const intoFAQ = () => {
  
  navigation.navigate('FAQ');
}

const intoParis = () => {
  if(email == "initbase@gmail.com"){
    navigation.navigate('Init');
  } else{
    navigation.navigate('Paris');
  }
}
const [email, setEmail] = useState('');
const [pseudo, setPseudo] = useState('');
const [pgrScore, setpgrScore] = useState(0);
const [parisReussis, setParisReussis] = useState(0);
const [missionsReussis, setMissionsReussis] = useState(0);
const [missions, setMissions] = useState({});

// android reward : ca-app-pub-9003480816747216/4522476702
// ios reward : ca-app-pub-9003480816747216/9499471218

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
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
            setPseudo(dataObj.pseudo)
            setpgrScore(dataObj.pgrScore)
            setParisReussis(dataObj.parisReussis)
            setMissions(dataObj.statutMissions)
            setMissionsReussis(dataObj.missionsReussis)
            setEmail(dataObj.email)

    
          }
        }
        getUserInfo();
        setRefreshK(refreshK +1);
      } else {
        navigation.navigate('Login');
      }
      console.log(email)
  })}, []);
  

const ProfilScreen = () => {

  const [refreshing, setRefreshing] = useState(false);
  const [refreshK, setRefreshK] = useState(0);


  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(1500)
    .then(() => setRefreshing(false))
  }, []);

  return (
      <SafeAreaView style = {{flex:1, backgroundColor:'#fff'}}>
                    <ScrollView
                      style={styles.container}
                      contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                      showsVerticalScrollIndicator={false}
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                          />}
                    >
                      <Image style={styles.userImg} source={require('../icons/boy.png')}/>
                      <Text style={styles.userName}>{pseudo}</Text>
                      <View style={styles.userBtnWrapper}>
                        <TouchableOpacity style={styles.userBtnReward} onPress={() => intoReward()}>
                          <Text style={{fontFamily: "Roboto_400Regular"}}>Récompense</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.userBtn} onPress={() => intoParis()}>
                          <Text style={{fontFamily: "Roboto_400Regular"}}>Mes paris</Text>
                        </TouchableOpacity>
                        {<TouchableOpacity style={styles.userBtnLogout} onPress={() => intoFAQ()}>
                          <Text style={{fontFamily: "Roboto_400Regular"}}>FAQ</Text>
  </TouchableOpacity>}
                      </View>
                      <View style={styles.userInfoWrapper}>
                        <View style={styles.userInfoItem}>
                          <Text style={styles.userInfoTitle}>{parisReussis}</Text>
                          <Text style={styles.userInfoSubTitle}>Paris gagnés</Text>
                        </View>
                        <View style={styles.userInfoItem}>
                          <Text style={styles.userInfoTitle}>{missionsReussis}</Text>
                          <Text style={styles.userInfoSubTitle}>Missions reussies</Text>
                        </View>
                        <View style={styles.userInfoItem}>
                          <Text style={styles.userInfoTitle}>{pgrScore}</Text>
                          <Text style={styles.userInfoSubTitle}>PGRscore</Text>
                        </View>
                      </View>
                      <View style={{width:'100%', marginTop: 25}}>
                        <View style={{flexDirection:'row',marginBottom:15}}>
                          <Image
                              source={images.tasks}
                              resizeMode="contain"
                              style={{
                                  width: 28,
                                  height: 28,
                                  left: 5
                                  }}
                          />
                          <Text style={{fontFamily:'Roboto_900Black', fontSize: 21}}>      Missions de la semaine :</Text>
                        </View>

                        <View style={{marginTop:20}}>
                          <Text style={{fontFamily:'Roboto_400Regular'}}>#1 - Difficulté : <Text style={{fontFamily:'Roboto_700Bold'}}>[Facile]</Text></Text>
                          <Text style={{marginTop: 5, fontFamily:'Roboto_400Regular'}}>Remporter un pari avec un gain potentiel minimum de 5000 pieces :</Text>
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                              {renderProgressBar1(missions)}
                              <View style={{width:'35%', height:3,backgroundColor:COLORS.lightGray, marginTop: 25}}></View>
                          </View>
                        </View>
                        

                        <View style={{marginTop:20}}>
                          <Text style={{fontFamily:'Roboto_400Regular'}}>#2 - Difficulté : <Text style={{fontFamily:'Roboto_700Bold'}}>[Moyen]</Text></Text>
                          <Text style={{marginTop: 5, fontFamily:'Roboto_400Regular'}}>Remporter un pari avec un gain potentiel minimum de 10000 pieces :</Text>
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                          {renderProgressBar2(missions)}
                              <View style={{width:'35%', height:3,backgroundColor:COLORS.lightGray, marginTop: 25}}></View>
                          </View>

                        </View>
                        
                        <View style={{marginTop:20}}>
                          <Text style={{fontFamily:'Roboto_400Regular'}}>#3 - Difficulté : <Text style={{fontFamily:'Roboto_700Bold'}}>[Difficile]</Text></Text>
                          <Text style={{marginTop: 5, fontFamily:'Roboto_400Regular'}}>Remporter un pari à 8 matchs et de gain potentiel minimum de 30000 pieces :</Text>
                          <View style={{alignItems:'center',justifyContent:'center'}}>
                          {renderProgressBar3(missions)}
                              
                          </View>
                        </View>
                       
                        
                  
                        </View>
                      <View style={{height:250}}></View>
                    </ScrollView>
        </SafeAreaView>
  );
}
        return (
           <ProfilScreen/>
          );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafd",
    padding: 20,
  },
  userImg: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop : 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userBtnReward: {
    borderColor: "#ffc60e",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnLogout: {
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: '#2e64e5',
  },
  userInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 20,
  },
  userInfoItem: {
    justifyContent: 'center',
  },
  userInfoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  userInfoSubTitle: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});

