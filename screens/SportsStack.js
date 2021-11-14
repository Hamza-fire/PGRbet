import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { images, COLORS } from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import FootballScreen from './sportScreens/FootballScreen';
import BasketballScreen from './sportScreens/BasketballScreen';
import TennisScreen from './sportScreens/TennisScreen';
import EsportScreen from './sportScreens/EsportScreen';
import RugbyScreen from './sportScreens/RugbyScreen';
import MmaScreen from './sportScreens/footScreens/MmaScreen';
import FootballFRScreen from './sportScreens/footScreens/FootballFRScreen';
import FootballESPScreen from './sportScreens/footScreens/FootballESPScreen';
import FootballENGScreen from './sportScreens/footScreens/FootballENGScreen';
import FootballEUScreen from './sportScreens/footScreens/FootballEUScreen';
import FootballITAScreen from './sportScreens/footScreens/FootballITAScreen';
import FootballGERScreen from './sportScreens/footScreens/FootballGERScreen';
import FootballPOScreen from './sportScreens/footScreens/FootballPOScreen';





const SportStack = createStackNavigator();

function InitialSportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <TouchableOpacity 
            style={styles.sportContainer}
            onPress={() => navigation.navigate('Football')}>
              <View style={styles.title}>
                <Image
                              source={images.footballBall}
                              resizeMode="contain"
                              style={{
                                  width: 25,
                                  height: 25,
                                  left:9,
                                  top: 3.2
                              }}
                          />
                <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Football</Text>
      
              </View>
              
            </TouchableOpacity>
        <TouchableOpacity 
          style={styles.sportContainer}
          onPress={() => navigation.navigate('Basket')}>
            <View style={styles.title}>
              <Image
                            source={images.basketBall}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                left:9,
                                top: 3.2
                            }}
                        />
              <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Basketball</Text>
    
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity 
          style={styles.sportContainer}
          onPress={() => navigation.navigate('Tennis')}>
            <View style={styles.title}>
              <Image
                            source={images.tennisBall}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                left:9,
                                top: 3.2
                            }}
                        />
              <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Tennis</Text>
    
            </View>
            
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.sportContainer}
            onPress={() => navigation.navigate('Rugby')}>
              <View style={styles.title}>
                <Image
                              source={images.rugbyBall}
                              resizeMode="contain"
                              style={{
                                  width: 25,
                                  height: 25,
                                  left:9,
                                  top: 3.2
                              }}
                          />
                <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Rugby</Text>
      
              </View>
              
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.sportContainer}
            onPress={() => navigation.navigate('MMA')}>
              <View style={styles.title}>
                <Image
                              source={images.mma}
                              resizeMode="contain"
                              style={{
                                  width: 25,
                                  height: 25,
                                  left:9,
                                  top: 3.2
                              }}
                          />
                <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    MMA</Text>
      
              </View>
              
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.sportContainer}
            onPress={() => navigation.navigate('Esport')}>
              <View style={styles.title}>
                <Image
                              source={images.esport}
                              resizeMode="contain"
                              style={{
                                  width: 25,
                                  height: 25,
                                  left:9,
                                  top: 3.2
                              }}
                          />
                <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    E-sport</Text>
      
              </View>
              
            </TouchableOpacity>
          
          
      </View>
      
      
      
    </View>
  );
}

function MySportStack() {
  return (
    <SportStack.Navigator>
      <SportStack.Screen name="InitialSport" component={InitialSportScreen} options={{header: () => null}} />
      <SportStack.Screen name="Football" component={FootballScreen} options={{header: () => null}}/>
      <SportStack.Screen name="Basket" component={BasketballScreen} options={{header: () => null}}/>
      <SportStack.Screen name="Tennis" component={TennisScreen} options={{header: () => null}}/>
      <SportStack.Screen name="Esport" component={EsportScreen} options={{header: () => null}}/>
      <SportStack.Screen name="Rugby" component={RugbyScreen} options={{header: () => null}}/>
      <SportStack.Screen name="MMA" component={MmaScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootEU" component={FootballEUScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootFR" component={FootballFRScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootENG" component={FootballENGScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootGER" component={FootballGERScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootESP" component={FootballESPScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootITA" component={FootballITAScreen} options={{header: () => null}}/>
      <SportStack.Screen name="FootPO" component={FootballPOScreen} options={{header: () => null}}/>
    </SportStack.Navigator>
  );
}

export default function Sports() {
    
        return (
          
              <MySportStack />
          
        );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4F7FF',
    alignItems: 'center',
    justifyContent: 'center',
    top:-45
  },
  sportContainer: {
    backgroundColor:'white',
    width : 300,
    height: 50,
    borderRadius: 10,
    borderColor: COLORS.lightGray,
    borderWidth: 0.35
  },
  title: {
    flexDirection:'row',
    top:8,
  }
});