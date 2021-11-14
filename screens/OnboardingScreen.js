import React from "react";
import {StyleSheet, Image } from "react-native";
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({navigation}) => {
    return (
       <Onboarding
       onSkip={() => navigation.replace("Login")}
       onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#F58A97',
                image: <Image 
                    style={styles.image}
                    source={require('../Onboarding/Onboarding-1.png')}
                    resizeMode='contain'
                    />,
                title: 'Bienvenue sur Piro',
                subtitle: ' ',
            },
            {
                backgroundColor: '#FFE0D1',
                image: <Image 
                    source={require('../Onboarding/Onboarding-2.png')}
                    resizeMode='contain'
                    style={styles.image} 
                     />,
                title: "C'est gratuit !",
                subtitle: 'Pariez gratuitement sur vos sports favoris en misant vos unités de feu',
            },
            {
                backgroundColor: '#D7DEE2',
                image: <Image 
                    source={require('../Onboarding/Onboarding-3.png')}
                    resizeMode='contain'
                    style={styles.image} />,
                title: 'Osez',
                subtitle: 'Les paris gagnants transforment vos unités de feu en pièces',
            },
            {
                backgroundColor: '#E59730',
                image: <Image 
                    source={require('../Onboarding/Onboarding-4.png')}
                    resizeMode='contain'
                    style={styles.image} />,
                title: 'Retirez vos gains',
                subtitle: 'Dans la boutique',
            },
            {
                backgroundColor: '#E2E2E2',
                image: <Image 
                    source={require('../Onboarding/Onboarding-5.png')}
                    resizeMode='contain'
                    style={styles.image} />,
                title: 'Objectifs hebdomadaires',
                subtitle: 'Boost de cotes et bonus à la clef',
            },
            {
                backgroundColor: '#ffff',
                image: <Image 
                    source={require('../Onboarding/Onboarding-6.png')}
                    resizeMode='contain'
                    style={styles.image} />,
                title: 'FAQ',
                subtitle: 'Toutes les réponses à vos questions y sont présentes',
            },
            
            
            
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 185,
        height: 185,
        alignItems: 'center',
        justifyContent: 'center'
    }
});