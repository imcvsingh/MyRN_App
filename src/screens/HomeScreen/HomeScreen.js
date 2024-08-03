import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {ScreensConstants} from '../../utils/ScreenMapConstants';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToDashboard();
    }, 2500);

    function navigateToDashboard() {
      //   navigation.replace(ScreensConstants.HOME);
    }
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
