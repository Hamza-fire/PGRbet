import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, LayoutAnimation, UIManager, Platform, ScrollView } from 'react-native';
import {COLORS} from '../constants';
 
export default class FAQScreen extends Component
{
    constructor()
    {
        super();

        if( Platform.OS === 'android' )
        {

          UIManager.setLayoutAnimationEnabledExperimental(true);

        }
 
        this.state = { 

           textLayoutHeight1: 0,
           updatedHeight1: 0, 
           expand1: false,

           textLayoutHeight2: 0,
           updatedHeight2: 0, 
           expand2: false,

           textLayoutHeight3: 0,
           updatedHeight3: 0, 
           expand3: false,

           textLayoutHeight4: 0,
           updatedHeight4: 0, 
           expand4: false,

           textLayoutHeight5: 0,
           updatedHeight5: 0, 
           expand5: false,

           textLayoutHeigh6: 0,
           updatedHeight6: 0, 
           expand6: false,
          }

    }
 
    expand_collapse_Function1 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand1 == false )
        {
            this.setState({ 
              updatedHeight1: this.state.textLayoutHeight1, 
              expand1: true, 
              
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight1: 0, 
              expand1: false, 
              
            });
        }
    }
 
    getHeight1(height)
    {
        if(Platform.OS === 'ios'){
            this.setState({ textLayoutHeight1: 750 });
        } else {
            this.setState({ textLayoutHeight1: height });
        }
    }

    expand_collapse_Function2 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand2 == false )
        {
            this.setState({ 
              updatedHeight2: this.state.textLayoutHeight2, 
              expand2: true, 
              
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight2: 0, 
              expand2: false, 
              
            });
        }
    }
 
    getHeight2(height)
    {
        if(Platform.OS === 'ios'){
            this.setState({ textLayoutHeight2: 300 });
        } else {
            this.setState({ textLayoutHeight2: height });
        }
       
    }

    expand_collapse_Function3 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand3 == false )
        {
            this.setState({ 
              updatedHeight3: this.state.textLayoutHeight3, 
              expand3: true, 
              
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight3: 0, 
              expand3: false, 
              
            });
        }
    }
 
    getHeight3(height)
    {
        if(Platform.OS === 'ios'){
            this.setState({ textLayoutHeight3: 380 });
        } else {
            this.setState({ textLayoutHeight3: height });
        }
    }

    expand_collapse_Function4 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand4 == false )
        {
            this.setState({ 
              updatedHeight4: this.state.textLayoutHeight4, 
              expand4: true, 
              
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight4: 0, 
              expand4: false, 
              
            });
        }
    }
 
    getHeight4(height)
    {
        if(Platform.OS === 'ios'){
            this.setState({ textLayoutHeight4: 145 });
        } else {
            this.setState({ textLayoutHeight4: height });
        }
    }

    expand_collapse_Function5 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand5 == false )
        {
            this.setState({ 
              updatedHeight5: this.state.textLayoutHeight5, 
              expand5: true, 
              
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight5: 0, 
              expand5: false, 
              
            });
        }
    }
 
    getHeight5(height)
    {
        if(Platform.OS === 'ios'){
            this.setState({ textLayoutHeight5: 145 });
        } else {
            this.setState({ textLayoutHeight5: height });
        }
    }

    expand_collapse_Function6 =()=>
    {
        LayoutAnimation.configureNext( LayoutAnimation.Presets.easeInEaseOut );
 
        if( this.state.expand6 == false )
        {
            this.setState({ 
              updatedHeight6: this.state.textLayoutHeight6, 
              expand6: true, 
              
            }); 
        }
        else
        {
            this.setState({ 
              updatedHeight6: 0, 
              expand6: false, 
              
            });
        }
    }
 
    getHeight6(height)
    {
        if(Platform.OS === 'ios'){
            this.setState({ textLayoutHeight6: 150 });
        } else {
            this.setState({ textLayoutHeight6: height });
        }
    }
 
    render()
    {
        return(
            <ScrollView style = { styles.MainContainer }>
               <Text style={{ color: COLORS.black,  fontFamily: "Roboto_900Black", fontSize: 25, lineHeight: 38, top : 12, marginBottom: 30, textAlign:'center'  }}>Bienvenue dans la FAQ 📋</Text>
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_400Regular", fontSize: 15, textAlign:'center'  }}>Ici vous trouverez la réponse</Text>
              <Text style={{ color: COLORS.black,  fontFamily: "Roboto_400Regular", fontSize: 15, marginBottom: 25, textAlign:'center'  }}>à toutes vos questions ! 😃</Text>

                <View style = { styles.ChildView }>

                    <TouchableOpacity  
                                      onPress = { this.expand_collapse_Function1 } 
                                      style = { styles.TouchableOpacityStyle }>
                        <Text style = { styles.question }>Comment ca marche ?</Text>
                    </TouchableOpacity>
                    <View style = {{ height: this.state.updatedHeight1, overflow: 'hidden' }}>
                        <Text style = { styles.ExpandViewInsideText } 
                              onLayout = {( value ) => this.getHeight1( value.nativeEvent.layout.height )}>
                            
                            Imaginons que vous venez de vous inscrire, voici le fontionnement en 10 étapes de Piro 🔥 :{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 1 :</Text>  Vous avez 50🔥 et vous en voulez plus : Il faut pour cela regarder des pubs{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 2 :</Text>  Appuyez sur le bouton play de l'écran principal{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 3 :</Text>  Appuyez sur votre solde en haut à droite de l'écran, vous venez de gagner 100🔥{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 4 :</Text>  Vous pouvez regarder autant de pubs que vous voulez et donc avoir autant de 🔥 que vous voulez !{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 5 :</Text>  Une fois satisfait avec le nombre de 🔥 que vous avez, appuyez sur le ticket en haut à gauche de l'écran{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 6 :</Text>  Validez le ticket{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 7 :</Text>  Revenez dans le menu principal et rappuyez sur votre solde en haut à droite de l'écran pour rafraichir votre solde{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 8 :</Text>  Si votre ticket est terminé, allez dans votre Profil puis dans la rubrique "Mes paris"{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 9 :</Text>  Appuyez sur "Actualiser mes paris", vous avez alors le résultat de votre ticket{'\n'}{'\n'}
                            <Text style={styles.etape}>Etape 10 :</Text>  Revenez dans le menu principal et rappuyez sur votre solde en haut à droite de l'écran{'\n'}{'\n'}


                        </Text>
                    </View>

                    <TouchableOpacity  
                                      onPress = { this.expand_collapse_Function2 } 
                                      style = { styles.TouchableOpacityStyle }>
                        <Text style = { styles.question }>J'ai visionné une pub mais rien recu</Text>
                    </TouchableOpacity>
                    <View style = {{ height: this.state.updatedHeight2, overflow: 'hidden' }}>
                        <Text style = { styles.ExpandViewInsideText } 
                              onLayout = {( value ) => this.getHeight2( value.nativeEvent.layout.height )}>
                            
                            Soit :{'\n'}{'\n'}
                Vous avez zappé la pub trop vite. Assurez-vous que la récompense est donnée avant de quitter la pub.{'\n'}{'\n'}
                Vous n'avez pas actualisé votre solde : pour cela il faut appuyer sur vos pièces ou vos unités de feu en haut à droite de l'écran principal. Pensez à le faire.{'\n'}{'\n'}

                        </Text>
                    </View>

                    <TouchableOpacity  
                                      onPress = { this.expand_collapse_Function3 } 
                                      style = { styles.TouchableOpacityStyle }>
                        <Text style = { styles.question }>La différence entre 🔥 et 💰</Text>
                    </TouchableOpacity>
                    <View style = {{ height: this.state.updatedHeight3, overflow: 'hidden' }}>
                        <Text style = { styles.ExpandViewInsideText } 
                              onLayout = {( value ) => this.getHeight3( value.nativeEvent.layout.height )}>
                            
                            Les unités de feu et les pièces sont deux monnaies avec lesquelles vous pouvez miser et remporter des pièces.{'\n'}{'\n'}
                            La seule différence est que seul les pièces peuvent être utilisées dans la boutique.{'\n'}{'\n'}
                            Pour gagner du 🔥, il existe deux moyens :{'\n'}{'\n'}
                            En regardant une vidéo publicitaire : vous fait gagner 100 🔥{'\n'}{'\n'}
                            En validant des missions hebdomadaires : vous fait gagner jusqu’à 3000 🔥
                        </Text>
                    </View>

                    <TouchableOpacity  
                                      onPress = { this.expand_collapse_Function4 } 
                                      style = { styles.TouchableOpacityStyle }>
                        <Text style = { styles.question }>Mon ticket est terminé mais il apparait en cours</Text>
                    </TouchableOpacity>
                    <View style = {{ height: this.state.updatedHeight4, overflow: 'hidden' }}>
                        <Text style = { styles.ExpandViewInsideText } 
                              onLayout = {( value ) => this.getHeight4( value.nativeEvent.layout.height )}>
                            
                            Appuyez sur rafraichir mes paris dans la page "Mes paris" !{'\n'}{'\n'}
Si le problème persiste, n'hésitez pas à nous contacter sur nos réseaux ou par mail

                        </Text>
                    </View>

                    <TouchableOpacity  
                                      onPress = { this.expand_collapse_Function5 } 
                                      style = { styles.TouchableOpacityStyle }>
                        <Text style = { styles.question }>J'ai perdu mes identifiants 😫</Text>
                    </TouchableOpacity>
                    <View style = {{ height: this.state.updatedHeight5, overflow: 'hidden' }}>
                        <Text style = { styles.ExpandViewInsideText } 
                              onLayout = {( value ) => this.getHeight5( value.nativeEvent.layout.height )}>
                            
                            Dans ce cas, n'hésitez pas à nous contacter sur nos réseaux sociaux ou par mail.{'\n'}{'\n'}
                             Nous tâcherons de vous répondre dans les plus brefs délais

                        </Text>
                    </View>

                    <TouchableOpacity  
                                      onPress = { this.expand_collapse_Function6 } 
                                      style = { styles.TouchableOpacityStyle }>
                        <Text style = { styles.question }>📝 Comment nous contacter</Text>
                    </TouchableOpacity>
                    <View style = {{ height: this.state.updatedHeight6, overflow: 'hidden' }}>
                        <Text style = { styles.ExpandViewInsideText } 
                              onLayout = {( value ) => this.getHeight6( value.nativeEvent.layout.height )}>
                            
                            Pour nous contacter, vous disposez de nos réseaux sociaux et du mail de l'organisation.{'\n'}{'\n'}
                            Nous nous efforçons de vous répondre au plus vite ! 👷

                        </Text>
                    </View>
                    
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
      flex: 1,
      backgroundColor: "#f9fafd",
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    ChildView:
    {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        margin: 5,
    },
 
    TouchableOpacityStyle:
    {
        padding: 8,
        borderWidth: 1,
        borderRightWidth: 0,
        borderRightWidth: 0,
        borderColor:COLORS.lightGray,
        justifyContent:'center',
        alignItems: 'center', 
    },

    ExpandViewInsideText:
    {
        fontFamily: "Roboto_400Regular",
        fontSize: 16,
        color: COLORS.black,
        padding: 12
    },
    etape:{
        fontFamily: "Roboto_700Bold",
        fontSize: 16,
        color: COLORS.black,
        padding: 12
    },

  questionBtn: {
    width:'100%',
    height: 35,
    borderWidth: 1,
    borderRightWidth: 0,
    borderRightWidth: 0,
    borderColor:COLORS.lightGray,
    justifyContent:'center',
    alignItems: 'center'
  },

  question: {
    color: COLORS.black,
    fontFamily: "Roboto_700Bold",
    fontSize : 20
  },
});


