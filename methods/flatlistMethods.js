import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { images,  COLORS } from '../constants';
import { addBetOnTicket3 } from '../API/firebaseMethods';

export function renderStatutMatch0(item){
    if (item.matchs[0].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[0].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[0].homeTeam} - {item.matchs[0].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch1(item){
    if (item.matchs[1].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[1].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[1].homeTeam} - {item.matchs[1].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch2(item){
    if (item.matchs[2].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[2].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[2].homeTeam} - {item.matchs[2].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch3(item){
    if (item.matchs[3].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[3].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[3].homeTeam} - {item.matchs[3].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch4(item){
    if (item.matchs[4].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[4].homeTeam} - {item.matchs[4].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[4].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[4].homeTeam} - {item.matchs[4].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch5(item){
    if (item.matchs[5].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[5].homeTeam} - {item.matchs[5].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[5].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[5].homeTeam} - {item.matchs[5].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch6(item){
    if (item.matchs[6].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[6].homeTeam} - {item.matchs[6].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[6].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[6].homeTeam} - {item.matchs[6].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderStatutMatch7(item){
    if (item.matchs[7].statut == false){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[7].homeTeam} - {item.matchs[7].awayTeam}</Text>
                                                      <Image
                                                          source={images.cross}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 22,
                                                              height: 22,
                                                              left: 5,
                                                              top: 17
                                                              }}
                                                      />
                                                    </View>
        );
    } else if (item.matchs[7].statut == true){
        return (
            <View style={{alignItems:'center', justifyContent:'center'}}>
                                                      <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, top:16, textAlign:'center'  }}>{item.matchs[7].homeTeam} - {item.matchs[7].awayTeam}</Text>
                                                      <Image
                                                          source={images.check}
                                                          resizeMode="contain"
                                                          style={{
                                                              width: 25,
                                                              height: 25,
                                                              left: 5,
                                                              top: 15
                                                              }}
                                                      />
                                                    </View>
        );
    }
}

export function renderImageClubAway(item){
    if (item.awayTeam == 'Chelsea'){
        return(<Image source={images.Chelsea} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Valence'){
        return(<Image source={images.Valence} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Arsenal'){
        return(<Image source={images.Arsenal} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Villarreal'){
        return(<Image source={images.Villareal} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Liverpool'){
        return(<Image source={images.Liverpool} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Juventus'){
        return(<Image source={images.Juventus} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Naples'){
        return(<Image source={images.Naples} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Sampdoria'){
        return(<Image source={images.Sampdoria} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Dortmund'){
        return(<Image source={images.Dortmund} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Barcelone'){
        return(<Image source={images.Barcelone} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'PSG'){
        return(<Image source={images.PSG} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Nantes'){
        return(<Image source={images.Nantes} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Monaco'){
        return(<Image source={images.Monaco} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Marseille'){
        return(<Image source={images.Marseille} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Nice'){
        return(<Image source={images.Nice} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Lyon'){
        return(<Image source={images.Lyon} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Inter'){
        return(<Image source={images.Inter} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Lazio'){
        return(<Image source={images.Lazio} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Atl. Madrid'){
        return(<Image source={images.athletico} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Leverkusen'){
        return(<Image source={images.leverkusen} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Bayern Munich'){
        return(<Image source={images.bayern} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'RB Leipzig'){
        return(<Image source={images.leipzig} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'B. Monchen'){
        return(<Image source={images.monchen} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Tottenham'){
        return(<Image source={images.Tottenham} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Man Utd'){
        return(<Image source={images.manu} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Man City'){
        return(<Image source={images.mancity} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'Real Madrid'){
        return(<Image source={images.real} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'AS Rome'){
        return(<Image source={images.roma} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.awayTeam == 'FC Séville'){
        return(<Image source={images.seville} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    
}

export function renderImageClubHome(item){
    if (item.homeTeam == 'Chelsea'){
        return(<Image source={images.Chelsea} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Valence'){
        return(<Image source={images.Valence} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Villarreal'){
        return(<Image source={images.Villareal} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Liverpool'){
        return(<Image source={images.Liverpool} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Juventus'){
        return(<Image source={images.Juventus} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Naples'){
        return(<Image source={images.Naples} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Sampdoria'){
        return(<Image source={images.Sampdoria} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Dortmund'){
        return(<Image source={images.Dortmund} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Barcelone'){
        return(<Image source={images.Barcelone} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'PSG'){
        return(<Image source={images.PSG} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Nantes'){
        return(<Image source={images.Nantes} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Monaco'){
        return(<Image source={images.Monaco} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Marseille'){
        return(<Image source={images.Marseille} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Nice'){
        return(<Image source={images.Nice} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Lyon'){
        return(<Image source={images.Lyon} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Inter'){
        return(<Image source={images.Inter} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Lazio'){
        return(<Image source={images.Lazio} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Arsenal'){
        return(<Image source={images.Arsenal} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Atl. Madrid'){
        return(<Image source={images.athletico} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Leverkusen'){
        return(<Image source={images.leverkusen} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Bayern Munich'){
        return(<Image source={images.bayern} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'RB Leipzig'){
        return(<Image source={images.leipzig} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'B. Monchen'){
        return(<Image source={images.monchen} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Tottenham'){
        return(<Image source={images.Tottenham} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Man Utd'){
        return(<Image source={images.manu} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Man City'){
        return(<Image source={images.mancity} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'Real Madrid'){
        return(<Image source={images.real} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam == 'AS Rome'){
        return(<Image source={images.roma} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    else if (item.homeTeam== 'FC Séville'){
        return(<Image source={images.seville} resizeMode="contain" style={{width: 75,height: 75,}}/>)
    }
    
}

export function handlePressBetNul (ticket, item) {
    
    ticket.push({
      awayTeam: item.awayTeam,
    homeTeam: item.homeTeam,
    commenceTime: item.commenceTime,
    id: item.id,
    league: item.league,
    prediction: 'Match nul',
    predictionStatut: 2,
    odd : item.odds[1].odd,
    statut : false
    });
    addBetOnTicket3(ticket, ticket.pop())
    alert('pari ajouté');
  
  
};

export function handlePressBetHome (ticket, item) {

  ticket.push({
    awayTeam: item.awayTeam,
  homeTeam: item.homeTeam,
  commenceTime: item.commenceTime,
  id: item.id,
  league: item.league,
  prediction: item.homeTeam,
  predictionStatut: 1,
  odd : item.odds[0].odd,
  statut : false
  });
  addBetOnTicket3(ticket, ticket.pop())
  alert('pari ajouté');


};

export function handlePressBetAway (ticket, item) {

  ticket.push({
    awayTeam: item.awayTeam,
  homeTeam: item.homeTeam,
  commenceTime: item.commenceTime,
  id: item.id,
  league: item.league,
  prediction: item.awayTeam,
  predictionStatut: 3,
  odd : item.odds[2].odd,
  statut : false
  });
  addBetOnTicket3(ticket, ticket.pop())
  alert('pari ajouté');

};

export function renderItemMatchAndroid(ticket,item){
    if(item.statutMatch == 0){//pas encore commencé
        return(
            <View>
            <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
              <Text style= {{top: 35}}>{item.commenceTime}</Text>
            </View>
              
              <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubHome(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
                  <TouchableOpacity 
                      style={{borderWidth: 5,
                      borderRadius:200, 
                      borderColor: '#B4F7FF', 
                      top :45, 
                      justifyContent:'center',
                      alignItems: 'center',
                      padding:10}}
                      onPress={() => handlePressBetHome(ticket,item)}>
                    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold"}}>{item.odds[0].odd}</Text>
                    </TouchableOpacity>   
                </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                          <Image
                              source={images.thunder}
                              resizeMode="contain"
                              style={{
                                  width: 40,
                                  height: 40,
                                  top: 18
                                  }}
                          />
                        
                          <TouchableOpacity 
                              style={{borderWidth: 5,
                              borderRadius:200, 
                              borderColor: '#B4F7FF', 
                              top :100, 
                              justifyContent:'center',
                              alignItems: 'center',
                              padding:10}}
                              onPress={() => handlePressBetNul(ticket,item)}>
                            <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold"}}>{item.odds[1].odd}</Text>
                          </TouchableOpacity>   
                    </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubAway(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
                  <TouchableOpacity 
                      style={{borderWidth: 5,
                      borderRadius:200, 
                      borderColor: '#B4F7FF', 
                      top :45, 
                      justifyContent:'center',
                      alignItems: 'center',
                      padding:10}}
                      onPress={() => handlePressBetAway(ticket,item)}>
                    <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold"}}>{item.odds[2].odd}</Text>
                    </TouchableOpacity>   
                </View>
              </View>
          </View>
        )
    }
    else if(item.statutMatch == 1){// en cours
        return(
            <View>
            <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
              <Text style= {{top: 35}}>{item.commenceTime}</Text>
            </View>
              
              <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubHome(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
                 
                </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                          <Image
                              source={images.thunder}
                              resizeMode="contain"
                              style={{
                                  width: 40,
                                  height: 40,
                                  top: 18
                                  }}
                          />
                          <View style={{width: 80, height: 25, backgroundColor:'orange', justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100}}>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 14 }}>En cours</Text>
                          </View>
                    </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubAway(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
                </View>
              </View>
          </View>
        )
    }
    else if(item.statutMatch == 2 && item.result == 1){// fini et home gagnant
        return(
            <View>
            <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
              <Text style= {{top: 35}}>{item.commenceTime}</Text>
            </View>
              
              <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubHome(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
                 
                </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                          <Image
                              source={images.thunder}
                              resizeMode="contain"
                              style={{
                                  width: 40,
                                  height: 40,
                                  top: 18
                                  }}
                          />
                          <View style={{width: 125, height: 35, backgroundColor:COLORS.lightGray, justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100, flexDirection:'row'}}>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 16 }}>   {item.homeTeam}   </Text>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                          </View>
                    </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubAway(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
                </View>
              </View>
          </View>
        )
    }
    else if(item.statutMatch == 2 && item.result == 2){// fini et nul
        return(
            <View>
            <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
              <Text style= {{top: 35}}>{item.commenceTime}</Text>
            </View>
              
              <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubHome(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
                 
                </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                          <Image
                              source={images.thunder}
                              resizeMode="contain"
                              style={{
                                  width: 40,
                                  height: 40,
                                  top: 18
                                  }}
                          />
                          <View style={{width: 160, height: 35, backgroundColor:COLORS.lightGray, justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100, flexDirection:'row'}}>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 16 }}>   Match Nul   </Text>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                          </View>
                    </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubAway(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
                </View>
              </View>
          </View>
        )
    }
    else if(item.statutMatch == 2 && item.result == 3){// fini et away gagnant
        return(
            <View>
            <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
              <Text style= {{top: 35}}>{item.commenceTime}</Text>
            </View>
              
              <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly'}}>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubHome(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
                 
                </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                          <Image
                              source={images.thunder}
                              resizeMode="contain"
                              style={{
                                  width: 40,
                                  height: 40,
                                  top: 18
                                  }}
                          />
                          <View style={{width: 125, height: 35, backgroundColor:COLORS.lightGray, justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100, flexDirection:'row'}}>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 16 }}>   {item.awayTeam}   </Text>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                          </View>
                    </View>
                <View style={{flexDirection:'column', alignItems:'center'}}>
                  {renderImageClubAway(item)}
                  <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
                </View>
              </View>
          </View>
        )
    }  
}

export function renderItemMatchIOS(ticket,item){
 if(item.statutMatch == 0){
    return(
        <View>
        <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
          <Text style= {{top: 40}}>{item.commenceTime}</Text>
        </View>
          
          <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly', top: 125}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubHome(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
              <TouchableOpacity 
                  style={{borderWidth: 5,
                  borderRadius:200, 
                  borderColor: '#B4F7FF', 
                  top :45, 
                  justifyContent:'center',
                  alignItems: 'center',
                  padding:10}}
                  onPress={() => handlePressBetHome(ticket,item)}>
                <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold"}}>{item.odds[0].odd}</Text>
                </TouchableOpacity>   
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Image
                          source={images.thunder}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 40,
                              top: 18
                              }}
                      />
                    
                      <TouchableOpacity 
                          style={{borderWidth: 5,
                          borderRadius:200, 
                          borderColor: '#B4F7FF', 
                          top :100, 
                          justifyContent:'center',
                          alignItems: 'center',
                          padding:10}}
                          onPress={() => handlePressBetNul(ticket,item)}>
                        <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold"}}>{item.odds[1].odd}</Text>
                      </TouchableOpacity>   
                </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubAway(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
              <TouchableOpacity 
                  style={{borderWidth: 5,
                  borderRadius:200, 
                  borderColor: '#B4F7FF', 
                  top :45, 
                  justifyContent:'center',
                  alignItems: 'center',
                  padding:10}}
                  onPress={() => handlePressBetAway(ticket,item)}>
                <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold"}}>{item.odds[2].odd}</Text>
                </TouchableOpacity>   
            </View>
          </View>
      </View>
    )
} else if(item.statutMatch == 1){
    return(
        <View>
        <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
          <Text style= {{top: 40}}>{item.commenceTime}</Text>
        </View>
          
          <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly', top: 125}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubHome(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
             
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Image
                          source={images.thunder}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 40,
                              top: 18
                              }}
                      />
                      <View style={{width: 80, height: 25, backgroundColor:'orange', justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100}}>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 14 }}>En cours</Text>
                          </View>
                    </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubAway(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
            </View>
          </View>
      </View>
    )
}
else if(item.statutMatch == 2 && item.result == 1){
    return(
        <View>
        <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
          <Text style= {{top: 40}}>{item.commenceTime}</Text>
        </View>
          
          <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly', top: 125}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubHome(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
             
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Image
                          source={images.thunder}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 40,
                              top: 18
                              }}
                      />
                       <View style={{width: 125, height: 35, backgroundColor:COLORS.lightGray, justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100, flexDirection:'row'}}>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 16 }}>   {item.homeTeam}   </Text>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                          </View>
                    </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubAway(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
            </View>
          </View>
      </View>
    )
}
else if(item.statutMatch == 2 && item.result == 2){
    return(
        <View>
        <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
          <Text style= {{top: 40}}>{item.commenceTime}</Text>
        </View>
          
          <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly', top: 125}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubHome(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
             
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Image
                          source={images.thunder}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 40,
                              top: 18
                              }}
                      />
                       <View style={{width: 125, height: 35, backgroundColor:COLORS.lightGray, justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100, flexDirection:'row'}}>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 16 }}>   Match Nul   </Text>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                          </View>
                    </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubAway(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
            </View>
          </View>
      </View>
    )
}
else if(item.statutMatch == 2 && item.result == 3){
    return(
        <View>
        <View style={{width:'100%', justifyContent:'center',alignItems:'center'}}>
          <Text style= {{top: 40}}>{item.commenceTime}</Text>
        </View>
          
          <View style={{flexDirection:'row', marginTop: 60, width:'100%', justifyContent: 'space-evenly', top: 125}}>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubHome(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.homeTeam}</Text>
             
            </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
                      <Image
                          source={images.thunder}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 40,
                              top: 18
                              }}
                      />
                       <View style={{width: 125, height: 35, backgroundColor:COLORS.lightGray, justifyContent:'center', alignItems:'center',borderRadius: 10, top: 100, flexDirection:'row'}}>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                              <Text style={{ color: COLORS.white,  fontFamily: "Roboto_700Bold", fontSize: 16 }}>   {item.awayTeam}   </Text>
                            <Image source={images.battle} resizeMode="contain" style={{width: 25,height: 20,}}/>
                          </View>
                    </View>
            <View style={{flexDirection:'column', alignItems:'center'}}>
              {renderImageClubAway(item)}
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_700Bold", fontSize: 20, lineHeight: 20, top : 15  }}>{item.awayTeam}</Text>
            </View>
          </View>
      </View>
    )
}

    

}

export function renderProgressBar1(missions){
    if(missions.m1 == true && missions.m2 == false && missions.m3 == false){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
    if(missions.m2 == true && missions.m1 == false && missions.m3 == false){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
    if(missions.m3 == true && missions.m1 == false && missions.m2 == false){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }

    if(missions.m1 == true && missions.m2 == true && missions.m3 == false){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
    if(missions.m1 == true && missions.m2 == false && missions.m3 == true){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
    if(missions.m1 == false && missions.m2 == true && missions.m3 == true){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
    if(missions.m1 == true && missions.m2 == true && missions.m3 == true){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
    if(missions.m1 == false && missions.m2 == false && missions.m3 == false){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontFamily:'Roboto_700Bold'}}>Boost de cote de 10%</Text>
            </View>
        );
    }
}

export function renderProgressBar2(missions){
    if(missions.m1 == true && missions.m2 == false && missions.m3 == false){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
    if(missions.m2 == true && missions.m1 == false && missions.m3 == false){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
    if(missions.m3 == true && missions.m1 == false && missions.m2 == false){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }

    if(missions.m1 == true && missions.m2 == true && missions.m3 == false){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
    if(missions.m1 == true && missions.m2 == false && missions.m3 == true){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
    if(missions.m1 == false && missions.m2 == true && missions.m3 == true){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
    if(missions.m1 == true && missions.m2 == true && missions.m3 == true){
        return(
            <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
    if(missions.m1 == false && missions.m2 == false && missions.m3 == false){
        return(
            <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                                <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>1000</Text>
                                  <Image
                                    source={require("../icons/fire.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
           </View>
        );
    }
}

export function renderProgressBar3(missions){
    if(missions.m1 == true && missions.m2 == false && missions.m3 == false){
        return(
            
                              <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
            
        );
    }
    if(missions.m2 == true && missions.m1 == false && missions.m3 == false){
        return(
           
                              <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
            
        );
    }
    if(missions.m3 == true && missions.m1 == false && missions.m2 == false){
        return(
            
                              <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
           
        );
    }

    if(missions.m1 == true && missions.m2 == true && missions.m3 == false){
        return(
            
                              <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
            
        );
    }
    if(missions.m1 == true && missions.m2 == false && missions.m3 == true){
        return(
           
                              <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
           
        );
    }
    if(missions.m1 == false && missions.m2 == true && missions.m3 == true){
        return(
           
                              <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
           
        );
    }
    if(missions.m1 == true && missions.m2 == true && missions.m3 == true){
        return(
           
                              <View style={{width:'75%',backgroundColor:"#50C878", height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
        
        );
    }
    if(missions.m1 == false && missions.m2 == false && missions.m3 == false){
        return(
           
                              <View style={{width:'75%', height:30,marginTop: 10, borderRadius: 5, borderWidth: 2, borderColor:COLORS.black, alignItems:'center',justifyContent:'center'}}>
                              <View style={{flexDirection:'row'}}>
                                  <Text style={{fontFamily:'Roboto_700Bold'}}>10000</Text>
                                  <Image
                                    source={require("../icons/coin.png")}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height: 20,
                                        left: 5
                                      
                                    }}
                                />
                                </View>
                              </View>
            
        );
    }
}

