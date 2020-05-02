import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GeneralStatusBarColor from './components/styles/GeneralStatusBarColor';
import theme from './Theme';
import Route from './Route';

import { AppLoading } from 'expo';
import { useFonts } from '@use-expo/font';

const App = () => {
  let [fontsLoaded] = useFonts({
    Bison: require('./assets/fonts/Bison.ttf'),
    'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
    'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <GeneralStatusBarColor
          backgroundColor={theme.StatusbarColor}
          barStyle={theme.StatusbarStyle}
        />
        <Route />
      </View>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
