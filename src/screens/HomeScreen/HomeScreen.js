import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {ScreensConstants} from '../../utils/Constants';
import styles from './style';

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
    <View style={styles.container}>
      <Text>{'Home Screen'}</Text>
    </View>
  );
};

export default HomeScreen;
