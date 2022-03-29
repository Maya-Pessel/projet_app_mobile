import React from 'react';
import "./src/firebase";
import { NativeBaseProvider } from 'native-base';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import i18n from "./src/locales/i18n";
import RootNavigator from './src/RootNavigator';
import {
  useFonts,
  Outfit_100Thin,
  Outfit_200ExtraLight,
  Outfit_300Light,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold,
  Outfit_800ExtraBold,
  Outfit_900Black,
} from '@expo-google-fonts/outfit';
import { customTheme } from "./src/assets/theme";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications
console.disableYellowBox = true;

LogBox.ignoreLogs(['NativeBase:']);

export default function() {

  const [fontsLoaded] = useFonts({
    Outfit_100Thin,
    Outfit_200ExtraLight,
    Outfit_300Light,
    Outfit_400Regular,
    Outfit_500Medium,
    Outfit_600SemiBold,
    Outfit_700Bold,
    Outfit_800ExtraBold,
    Outfit_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <NativeBaseProvider theme={customTheme}>
            <RootNavigator />
          </NativeBaseProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
