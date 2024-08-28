import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {ScreensConstants} from '../../utils/Constants';
import styles from './style';

const WebViewScreen = ({navigation}) => {
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
      <Text>{'WebView Screen'}</Text>
    </View>
  );
};

export default WebViewScreen;
