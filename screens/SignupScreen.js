import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import Swiper from 'react-native-swiper'
import { registration } from "../API/firebaseMethods";
import "firebase/firestore";




export default function SignUp({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pseudo, setPseudo] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


    const emptyState = () => {
      setFirstName('');
      setLastName('');
      setAge('');
      setPseudo('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    };

    const handlePress = () => {
      if (!firstName) {
        Alert.alert('First name is required');
      } else if (!email) {
        Alert.alert('Email field is required.');
      } else if (!pseudo) {
        Alert.alert('pseudo field is required.');
      } else if (!age) {
        Alert.alert('age field is required.');
      } else if (!password) {
        Alert.alert('Password field is required.');
      } else if (!confirmPassword) {
        setPassword('');
        Alert.alert('Confirm password field is required.');
      } else if (password !== confirmPassword) {
        Alert.alert('Password does not match!');
      } else {
        registration(
          email,
          password,
          lastName,
          firstName,
          pseudo,
          age,
        );
        navigation.navigate('Login');
        emptyState();
      }
    };

    const handlePressTerms = () => {
      navigation.navigate('Confidentialité');
    }

    return (
      <Swiper>
          <View style={styles.container}>   
             <Text style={styles.text}>Etape 1/2</Text>
             
             <FormInput
                labelValue={firstName}
                onChangeText={(userName) => setFirstName(userName)}
                placeholder="Nom"
                iconType="user"
                autoCorrect={false}
             />
             
             <FormInput
                labelValue={lastName}
                onChangeText={(userName) => setLastName(userName)}
                placeholderText="Prenom"
                iconType="user"
                autoCorrect={false}
             />
        
             <FormInput
                labelValue={age}
                onChangeText={(userAge) => setAge(userAge)}
                placeholderText="Age"
                
                keyboardType="numeric"
                iconType="user"
                autoCorrect={false}
             />

             <TouchableOpacity style={styles.navButton} 
                onPress={() => navigation.navigate('Login')} >
                 <Text style={styles.navButtonText}>déjà un compte? Connectez-vous</Text>
             </TouchableOpacity>
             
        </View>

        <View style={styles.container}>
          <Text style={styles.text}>Etape 2/2</Text>

          <FormInput
                labelValue={pseudo}
                onChangeText={(userPseudo) => setPseudo(userPseudo)}
                placeholderText="Pseudo"
                iconType="user"
                autoCorrect={false}
             />

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

            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword2) => setConfirmPassword(userPassword2)}
                placeholderText="Confirmer mot de passe"
                iconType="lock"
                secureTextEntry={true}
             />

            <FormButton
                buttonTitle="Terminé"
                onPress={() => handlePress()}
             />

            <View style={styles.textPrivate}>
                 <Text style={styles.color_textPrivate}>En vous inscrivant, vous confirmez que vous acceptez notre</Text>
                 <TouchableOpacity onPress={() => handlePressTerms()}>
                     <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>politique de confidentialité</Text>
                 </TouchableOpacity>
                 <Text style={styles.color_textPrivate}> et nos <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>conditions d'utilisation</Text></Text>
                 
             </View>


        </View>

        
      </Swiper>
        
    );
};


const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
    },
    textPrivate:{
      paddingTop : 5,
      flexDirection: 'row',
      flexWrap: "wrap",
      top : 7
    }
  });