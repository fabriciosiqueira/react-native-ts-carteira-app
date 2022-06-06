import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Welcome from './src/screens/Welcome';

export default function App() {

    
  let [fontLoaded]= useFonts({
    "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("./assets/fonts/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldIatlic": require("./assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("./assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Thin": require("./assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("./assets/fonts/Lato-ThinItalic.ttf")
  })

  if(!fontLoaded) {
    return  <AppLoading />
  }
  
  return (
    <ThemeProvider theme={theme}>
      <Welcome/>
    </ThemeProvider>
  );
}

