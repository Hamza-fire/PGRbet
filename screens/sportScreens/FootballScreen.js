import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { images, COLORS} from '../../constants';

export default function FootballScreen({navigation}) {
    
        return (
          <View style={styles.container}>
          <StatusBar style="auto" />
          <View>
            <TouchableOpacity 
                style={styles.sportContainer}
                onPress={() => navigation.navigate("FootEU")}>
                  <View style={{flexDirection:'row'}}>
                    <Image
                                  source={images.euFlag}
                                  resizeMode="contain"
                                  style={{
                                      width: 25,
                                      height: 25,
                                      left:9,
                                      top: 3.2
                                  }}
                              />
                    <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Europe</Text>
          
                  </View>
                  
                </TouchableOpacity>
            <TouchableOpacity 
              style={styles.sportContainer}
              onPress={() => navigation.navigate("FootFR")}>
                <View style={{flexDirection:'row'}}>
                  <Image
                                source={images.frFlag}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    left:9,
                                    top: 3.2
                                }}
                            />
                  <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    France</Text>
        
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.sportContainer}
              onPress={() => navigation.navigate("FootENG")}>
                <View style={{flexDirection:'row'}}>
                  <Image
                                source={images.gbFlag}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    left:9,
                                    top: 3.2
                                }}
                            />
                  <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Angleterre</Text>
        
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.sportContainer}
              onPress={() => navigation.navigate("FootGER")}>
                <View style={{flexDirection:'row'}}>
                  <Image
                                source={images.gerFlag}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    left:9,
                                    top: 3.2
                                }}
                            />
                  <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Allemagne</Text>
        
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.sportContainer}
              onPress={() => navigation.navigate("FootESP")}>
                <View style={{flexDirection:'row'}}>
                  <Image
                                source={images.espFlag}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    left:9,
                                    top: 3.2
                                }}
                            />
                  <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Espagne</Text>
        
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.sportContainer}
              onPress={() => navigation.navigate("FootITA")}>
                <View style={{flexDirection:'row'}}>
                  <Image
                                source={images.itaFlag}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    left:9,
                                    top: 3.2
                                }}
                            />
                  <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Italie</Text>
        
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity 
              style={styles.sportContainer}
              onPress={() => navigation.navigate("FootPO")}>
                <View style={{flexDirection:'row'}}>
                  <Image
                                source={images.poFlag}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    left:9,
                                    top: 3.2
                                }}
                            />
                  <Text style={{top: 3.5, left:5, fontFamily:"Roboto_700Bold", fontSize: 17}}>    Portugal</Text>
        
                </View>
                
              </TouchableOpacity>
              
          </View>
          
          
          
        </View>
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
        height: 32,
        borderRadius: 10,
        borderColor: COLORS.lightGray,
        borderWidth: 0.35
      }
    });