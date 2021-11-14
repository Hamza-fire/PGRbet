import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import {images} from '../constants'
import firebase from '../firebase/fire';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');   
    

    const Login = async () => {
      try {
          const response = await firebase.auth().signInWithEmailAndPassword(email, password);
          navigation.navigate('Tabs');
      } catch (err) {
          setError(err.message);
      }

  }

    return (
      
      
        <View style={styles.container}>
            <Image 
             source={require('../Onboarding/Onboarding-2.png')}
             style={styles.logo}
             />
             <Text style={styles.text}>Piro</Text>

             <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
             />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Mot de passe"
                iconType="lock"
                secureTextEntry={true}
             />
             {
              error ?
                <Text style={{ color: 'red' }}>{error}</Text>
                : null
              }

             <FormButton
                buttonTitle="Connexion"
                onPress={() => Login()}
             />

             <TouchableOpacity style={styles.forgotButton} 
                onPress={() => navigation.navigate('Signup')} >
                 <Text style={styles.navButtonText}> Créer un compte</Text>
             </TouchableOpacity>
           
             <View style={{flexDirection:'row'}}>
               <TouchableOpacity
               onPress={ ()=>{ alert('piro.app2021@gmail.com')}}>
                <Image
                          source={images.email}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              right: 10
                              }}
                      />
               </TouchableOpacity>
               <TouchableOpacity
               onPress={ ()=>{ Linking.openURL('https://www.instagram.com/piro.officiel/')}}>
                <Image
                          source={images.insta}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              right: 5
                              }}
                      />
               </TouchableOpacity>
               <TouchableOpacity
               onPress={ ()=>{ Linking.openURL('https://twitter.com/Piro_officiel')}}>
                <Image
                          source={images.twitter}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              left: 5
                              }}
                      />
               </TouchableOpacity>
               <TouchableOpacity
               onPress={ ()=>{ Linking.openURL('http://www.snapchat.com/add/piro_app2021')}}>
                <Image
                          source={images.snap}
                          resizeMode="contain"
                          style={{
                              width: 30,
                              height: 30,
                              left: 10
                              }}
                      />
               </TouchableOpacity>
             </View>
             
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 125,
      width: 125,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 30,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
  });
