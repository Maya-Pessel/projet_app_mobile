import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import i18n from "./src/locales/i18n";
import RootNavigator from './src/RootNavigator';
import firebase from "firebase/app";
import config from "./src/firebase";

firebase.initializeApp(config.firebase);


export default function() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider i18n={i18n}>
          <NativeBaseProvider >
            <RootNavigator />
          </NativeBaseProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
}
