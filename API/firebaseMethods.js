import * as firebase from "firebase";
import "firebase/firestore";
import {Alert} from "react-native";

export async function registration(email, password, lastName, firstName, pseudo, age) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
        pseudo: pseudo,
        age: age,
        pgrScore: 0,
        fireCoins: 50,
        coins: 0,
        boost: false,
        missionsReussis: 0,
        paris: [],
        parisReussis: 0,
        reward: "vide",
        statutMissions: {"m1" : false,
                        "m2" : false,
                        "m3" : false},
        ticket: [],
        ticketReel: { "matchs": [],
        "gain": "",
        "id": Math.random().toString(20).substr(2, 15),
        "statutVerif": false,
        "allPrediction": []},
      });
  } catch (err) {
    Alert.alert("There is something wrong!!!!", err.message);
  }
}

export async function addBetOnTicket(awayTeam, homeTeam, commenceTime, idMatch, league, prediction) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function writeUserBet(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .set({
              email: currentUser.email,
              lastName: lastName,
              firstName: firstName,
              pseudo: pseudo,
              age: age,
              pgrScore: 0,
              fireCoins: 0,
              coins: 0,
            });


      }
      writeUserBet();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function addBetOnTicket2(ticket) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function writeUserBet2(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .set({
              ticket: ticket,
            }, { merge: true });

      }
      writeUserBet2();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function addBetOnTicket3(ticket, item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function addBet(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                ticket: firebase.firestore.FieldValue.arrayUnion(item)
            });

      }
     
      addBet();
     
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function addLastInfoOnTicket(ticket, gain) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function addGainPot(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                ticket: firebase.firestore.FieldValue.arrayUnion(gain)
            });

      }
      async function addStatutVerif(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                ticket: firebase.firestore.FieldValue.arrayUnion(false)
            });

      }
     
      addStatutVerif();
      addGainPot();
     
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function addTicketOnParis(ticket) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function addTicket(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                paris: firebase.firestore.FieldValue.arrayUnion(ticket)
            });

      }
     
      addTicket();
     
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function addTicketOnParis2(ticket) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function addTicket(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .set({
              paris: ticket,
            }, { merge: true });

      }
     
      addTicket();
     
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}


export async function emptyTicket() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function deleteAll(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
              ticket: [],
            });

      }
      deleteAll();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function deleteBetOnTicket(ticket, item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function deleteBet(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                ticket: firebase.firestore.FieldValue.arrayRemove(item)
            });

      }
      deleteBet();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateReward(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function putCodeInReward(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                reward: item
            });

      }
      putCodeInReward();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}


export async function updatePaypalRewardBase(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      async function removePaypalCode(){
        const db = firebase.firestore();
          db.collection('codes')
            .doc('Paypal')
            .set({
              paypal: item,
            });

      }
      removePaypalCode();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateAmazonRewardBase(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      async function removeAmazonCode(){
        const db = firebase.firestore();
          db.collection('codes')
            .doc('Amazon')
            .set({
              amazon: item,
            });

      }
      removeAmazonCode();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updatePsnRewardBase(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      async function removePsnCode(){
        const db = firebase.firestore();
          db.collection('codes')
            .doc('PSN')
            .set({
              psn: item,
            });

      }
      removePsnCode();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateRobloxRewardBase(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      async function removeRobloxCode(){
        const db = firebase.firestore();
          db.collection('codes')
            .doc('Roblox')
            .set({
              roblox: item,
            });

      }
      removeRobloxCode();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateCoins(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function decrementCoins(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                coins: firebase.firestore.FieldValue.increment(-item)
            });

      }
      decrementCoins();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateFireCoins(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function decrementCoins(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                fireCoins: firebase.firestore.FieldValue.increment(-item)
            });

      }
      decrementCoins();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updatePgrScore(x) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function incrementPgrScore(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                pgrScore: firebase.firestore.FieldValue.increment(x)
            });

      }
      incrementPgrScore();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateParisReussis(x) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function incrementParisReussis(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
              parisReussis: firebase.firestore.FieldValue.increment(x)
            });

      }
      incrementParisReussis();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateMissionsReussis(x) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function incrementMissionsReussis(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
              missionsReussis: firebase.firestore.FieldValue.increment(x)
            });

      }
      incrementMissionsReussis();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function addDataFormat(data,country) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      async function writeDataFormat(){
        const db = firebase.firestore();
          db.collection('season')
            .doc(`${country}`)
            .set({
              data: data,
            });

      }
      writeDataFormat();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateMatch(item, gain) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function putMatch(){
        const db = firebase.firestore();
        switch (item.length) {
          case 1:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true]
            });
          break;
          case 2:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true]
            });
          break;
          case 3:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true,true]
            });
          break;
          case 4:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true,true,true]
            });
          break;
          case 5:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true,true,true,true]
            });
          break;
          case 6:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true,true,true,true,true]
            });
          break;
          case 7:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true,true,true,true,true,true]
            });
          break;
          case 8:
            db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": item,
                "ticketReel.gain": gain,
                "ticketReel.allPrediction":[true,true,true,true,true,true,true,true]
            });
          break;
        }

      }
      putMatch();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function resetTicketReel() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function reset(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                "ticketReel.matchs": [],
                "ticketReel.gain": "",
                "ticketReel.id": Math.random().toString(20).substr(2, 15),
                "ticketReel.statutVerif": false,
                "ticketReel.allPrediction": []

            });

      }
      reset();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateParis(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function putTicket(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                paris: item
               
            });

      }
      putTicket();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateMissions(k) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function setMissionStatut1(){
        const db = firebase.firestore();
        
          db.collection('users')
          .doc(uid)
          .update({
              "statutMissions.m1": true,
          });
      }
      async function setMissionStatut2(){
        const db = firebase.firestore();
        
          db.collection('users')
          .doc(uid)
          .update({
              "statutMissions.m2": true,
          });
      }
      async function setMissionStatut3(){
        const db = firebase.firestore();
        
          db.collection('users')
          .doc(uid)
          .update({
              "statutMissions.m3": true,
          });
      }
      if(k == 1){
        setMissionStatut1()
      }
      if(k == 2){
        setMissionStatut2()
      }
      if(k == 3){
        setMissionStatut3()
      }
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function updateBoost(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function boost(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                boost: true
               
            });

      }
      boost();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}

export async function resetBoost(item) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      var uid = user.uid;
      async function reset(){
        const db = firebase.firestore();
          db.collection('users')
            .doc(uid)
            .update({
                boost: false
               
            });

      }
      reset();
    } else {
      Alert.alert("There is something wrong!!!!", err.message);
    }
    
})
}