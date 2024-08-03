import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {ScreensConstants} from '../../utils/ScreenMapConstants';

const SettingsScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToDashboard();
    }, 2500);

    function navigateToDashboard() {
      //   navigation.replace(ScreensConstants.HOME);
    }
  }, [navigation]);

  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;
