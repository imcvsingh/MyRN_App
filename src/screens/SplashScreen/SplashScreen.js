import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {ScreensConstants} from '../../utils/ScreenMapConstants';
import ImageConstants from '../../utils/ImageConstants';
import styles from './style';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToDashboard();
    }, 2500);

    function navigateToDashboard() {
      navigation.replace(ScreensConstants.LOGIN);
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ImageConstants.logo} />
    </View>
  );
};

export default SplashScreen;
