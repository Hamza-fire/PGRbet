import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addDataFormat } from '../API/firebaseMethods';


export default function InitBaseScreen() {
    const [dataFormat1, setDataFormat1] = useState([])
    const [dataFormat2, setDataFormat2] = useState([])
    const [dataFormat3, setDataFormat3] = useState([])
    const [dataFormat4, setDataFormat4] = useState([])
    const [dataFormat5, setDataFormat5] = useState([])
    const [dataFormat6, setDataFormat6] = useState([])
    const [dataFormat7, setDataFormat7] = useState([])
    const [dataFormat8, setDataFormat8] = useState([])
    const [dataFormat9, setDataFormat9] = useState([])
    const [dataFormat10, setDataFormat10] = useState([])
    const [dataFormat11, setDataFormat11] = useState([])
    const [dataFormat12, setDataFormat12] = useState([])
    const [dataFormat13, setDataFormat13] = useState([])


    function handlePressFR () {
      for (i = 0; i<20; i++){
        dataFormat1.push({
          awayTeam: "",
          homeTeam: "",
          commenceTime: "",
          id: Math.random().toString(20).substr(2, 10),
          league: "",
          statutMatch: 0,
          result:0,
          odds :[{
            name:"home",
            odd:"",
          },{
            name:"draw",
            odd:"",
          },{
            name:"away",
            odd:"",
          }] 
        });
      }
      addDataFormat(dataFormat1,'France')
    };

    function handlePressENG () {
        for (i = 0; i<20; i++){
          dataFormat2.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat2,'England')
      };
      function handlePressBasket () {
        for (i = 0; i<20; i++){
          dataFormat3.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat3,'Basket')
      };
      function handlePressEsport () {
        for (i = 0; i<20; i++){
          dataFormat4.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat4,'Esport')
      };
      function handlePressEU () {
        for (i = 0; i<20; i++){
          dataFormat5.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat5,'Europe')
      };
      function handlePressGER () {
        for (i = 0; i<20; i++){
          dataFormat6.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat6,'Germany')
      };
      function handlePressITA () {
        for (i = 0; i<20; i++){
          dataFormat7.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat7,'Italy')
      };
      function handlePressMMA () {
        for (i = 0; i<20; i++){
          dataFormat8.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat8,'MMA')
      };
      function handlePressPO () {
        for (i = 0; i<20; i++){
          dataFormat9.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat9,'Portugal')
      };
      function handlePressRugby () {
        for (i = 0; i<20; i++){
          dataFormat10.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat10,'Rugby')
      };
      function handlePressESP () {
        for (i = 0; i<20; i++){
          dataFormat11.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat11,'Spain')
      };
      function handlePressTennis () {
        for (i = 0; i<20; i++){
          dataFormat12.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat12,'Tennis')
      };
      function handlePressTop () {
        for (i = 0; i<5; i++){
          dataFormat13.push({
            awayTeam: "",
            homeTeam: "",
            commenceTime: "",
            id: Math.random().toString(20).substr(2, 10),
            league: "",
            statutMatch: 0,
            result:0,
            odds :[{
              name:"home",
              odd:"",
            },{
              name:"draw",
              odd:"",
            },{
              name:"away",
              odd:"",
            }] 
          });
        }
        addDataFormat(dataFormat13,'TopMatch')
      };
     
        return (
            <View style={styles.container}>
              <StatusBar style="auto" />
              <Button
                title="France"
                color="#841584"
                onPress ={() => handlePressFR()}
              />
              <Button
                title="Espagne"
                color="#841584"
                onPress ={() => handlePressESP()}
              />
              <Button
                title="Italie"
                color="#841584"
                onPress ={() => handlePressITA()}
              />
              <Button
                title="Angleterre"
                color="#841584"
                onPress ={() => handlePressENG()}
              />
              <Button
                title="Portugal"
                color="#841584"
                onPress ={() => handlePressPO()}
              />
              <Button
                title="Europe"
                color="#841584"
                onPress ={() => handlePressEU()}
              />
              <Button
                title="Basket"
                color="#841584"
                onPress ={() => handlePressBasket()}
              />
              <Button
                title="Tennis"
                color="#841584"
                onPress ={() => handlePressTennis()}
              />
              <Button
                title="Rugby"
                color="#841584"
                onPress ={() => handlePressRugby()}
              />
              <Button
                title="Esport"
                color="#841584"
                onPress ={() => handlePressEsport()}
              />
              <Button
                title="MMA"
                color="#841584"
                onPress ={() => handlePressMMA()}
              />
              <Button
                title="Allemagne"
                color="#841584"
                onPress ={() => handlePressGER()}
              />
              <Button
                title="Match of the week"
                color="#841584"
                onPress ={() => handlePressTop()}
              />
              
            </View>
          );
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B4F7FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});