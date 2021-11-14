import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";



const TermsScreen = () => {

    return (
    
        <ScrollView style={styles.container}>
            <View style={styles.childContainer}>
                <Text style={styles.title}>Politique de confidentialité Piro</Text>
                <Text style={styles.subtitle}>1. INTRODUCTION</Text>
                <Text style={styles.text}>
                La protection de vos données personnelles est importante pour nous.
                 Nous nous engageons à ne collecter que les données dont nous avons besoin pour vous assurer un service optimal, 
                 à en assurer la confidentialité et la sécurité, y compris lorsque nous faisons appel à des prestataires et à faciliter 
                 l’exercice de vos droits sur vos données.{"\n"}{"\n"}

                 Nous respectons ainsi l’ensemble des dispositions applicables en matière de protection de la vie privée et des données 
                 à caractère personnel, notamment la loi du 6 janvier 1978 modifiée relative à l’informatique, 
                 aux fichiers et aux libertés ainsi que le Règlement UE 2016/679 du 27 avril 2016 relatif à la protection 
                 des personnes physiques à l’égard du traitement des données à caractère personnel et à la libre circulation de ces données.{"\n"}{"\n"}

                 La présente politique de confidentialité décrit les données personnelles que nous recueillons, comment elles sont utilisées 
                 et vos droits à cet égard. Elle s’applique à tout utilisateur qui accède à l’application et qui utilise les
                  services proposés sur l’application.{"\n"}{"\n"}

                  Nous nous réservons le droit de modifier la présente politique de confidentialité à tout moment. 
                  La version la plus actuelle de la présente politique régit notre utilisation de vos informations et 
                  sera toujours disponible sur l’application ou sur demande auprès de PIRO.{"\n"}{"\n"}

                  Si nous devions apporter une modification substantielle à cette politique de confidentialité, 
                  nous nous engageons à vous la notifier via votre adresse email.{"\n"}{"\n"}


                </Text>

                <Text style={styles.subtitle}>2. RESPONSABLE DE TRAITEMENT DES DONNEES</Text>
                <Text style={styles.text}>
                    PIRO{"\n"}{"\n"}

                    representé par EL KILALI HAMZA, proprietaire{"\n"}{"\n"}

                </Text>

                <Text style={styles.subtitle}>3. DONNEES QUE NOUS COLLECTIONS</Text>
                <Text style={styles.text}>
                Dans le cadre de l’utilisation de nos services et de votre navigation sur notre application, PIRO collecte plusieurs catégories de données dont vous trouverez le détail ci-dessous. Ces données proviennent :{"\n"}{"\n"}

                Des informations que vous nous communiquez lorsque vous vous inscrivez sur notre application, ou lorsque vous échangez avec PIRO. Ces informations personnelles sont :{"\n"}{"\n"}
                Des données permettant votre identification (nom, prénom, email, mot de passe){"\n"}{"\n"}

                Nous ne traitons pas de catégories particulières de données (données sensibles) telles que les données énumérées à l’article 9 du RGPD qui révèlent l’origine raciale ou ethnique, les opinions politiques, les convictions religieuses ou philosophiques ou l’appartenance syndicale, des données génétiques, des données biométriques, des données concernant la santé ou des données concernant la vie sexuelle ou l’orientation sexuelle des personnes.{"\n"}{"\n"}
                </Text>

                <Text style={styles.subtitle}>4. FINALITES</Text>
                <Text style={styles.text}>
                PIRO procède au traitement de vos données à caractère personnel pour des finalités déterminées, explicites et légitimes.{"\n"}{"\n"}

                En particulier, ces données sont destinées à :{"\n"}{"\n"}
                la création et la gestion de votre compte;{"\n"}{"\n"}
                l’utilisation de nos services ;{"\n"}{"\n"}
                vous adresser des communications pertinentes et adaptées à vos besoins directement en lien avec les services de l'application ;{"\n"}{"\n"}
                sécuriser l'application ainsi que les données et échanges intervenant sur l'application;{"\n"}{"\n"}
                Faire évoluer nos services pour vous offrir de nouvelles fonctionnalités et nous adapter à vos besoins ;{"\n"}{"\n"}
                Communiquer avec vous ;{"\n"}{"\n"}
                répondre à une injonction des autorités légales et notamment pour lutter contre la fraude et plus généralement contre toute activité pénalement répréhensible.
{"\n"}{"\n"}

                </Text>

                <Text style={styles.subtitle}>5. DUREE DE CONSERVATION DES DONNEES</Text>
                <Text style={styles.text}>
                PIRO conserve vos informations tant que votre compte reste actif, à moins que vous ne demandiez leur suppression ou celle de votre compte. Dans certains cas, nous pouvons conserver des informations vous concernant en raison de la loi ou à d’autres fins, même si vous supprimez votre compte.{"\n"}{"\n"}

                Ainsi, les données utilisées à des fins de prospection commerciale peuvent être conservées pendant un délai de trois ans à compter de la suppression de votre compte, sauf si vous avez décidé de faire jouer votre droit d’opposition dans les conditions prévues à l’article 10.{"\n"}{"\n"}
                Par ailleurs, les données permettant d’établir la preuve d’un droit ou d’un contrat, ou conservées au titre du respect d’une obligation légale, peuvent faire l’objet d’une politique d’archivage intermédiaire pour une période correspondant aux durée de prescription légale (et notamment le délai de droit commun de 5 ans).{"\n"}{"\n"}

                </Text>
            </View>
           
           
             
        </ScrollView>
    );
};

export default TermsScreen;

const styles = StyleSheet.create({
    container: {
      flex : 1,
      backgroundColor:'#fff'
    },
    childContainer:{
        alignItems:'center'
    },
    title: {
      fontSize: 22,
      fontFamily: 'Roboto_900Black',
      marginBottom: 25,
      marginTop: 10
    },
    text: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      paddingLeft: 6,
      paddingRight: 6
      //textAlign:'left'
    },
    subtitle: {
        fontSize: 18,
        fontFamily: 'Roboto_700Bold',
        marginBottom: 20
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

  