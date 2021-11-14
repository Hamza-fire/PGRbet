import React, { useState, useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { images } from '../constants';
import firebase from '../firebase/fire';


const RewardScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [reward, setReward] = useState('');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        async function getUserReward(){
          let doc = await firebase
          .firestore()
          .collection('users')
          .doc(uid)
          .get();
    
          if (!doc.exists){
            Alert.alert('No user data found!')
          } else {
            let dataObj = doc.data();
            setReward(dataObj.reward)
          }
        }
        getUserReward();
      } else {
        navigation.navigate('Login');
      }
      
  })}, []);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
                                source={images.star1}
                                resizeMode="contain"
                                style={{
                                    width: 40,
                                    height: 40,
                                    top: -17
                                }}
                            />
            <Text style={styles.modalText}>{reward}</Text>
            <Pressable
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
                >
              <Text style={styles.textStyle}>Retour</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={ styles.buttonOpen}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Récompense</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "#3aca2f",
    borderRadius: 20,
    padding: 70,
    elevation: 2,
    top:-15
  },
  buttonClose: {
      top:10,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2
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

export default RewardScreen;