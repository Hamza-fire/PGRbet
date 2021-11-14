import React from 'react';
import Routes from './navigation/Routes'
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_900Black, Roboto_700Bold, Roboto_400Regular } from '@expo-google-fonts/roboto';



const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Roboto_700Bold,
    Roboto_400Regular,

  });

  

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Routes />)
  }
}
  

export default App;

