import React, {useEffect} from 'react';
import {Image, View} from 'react-native';
import {ScreensConstants} from '../../utils/Constants';
import ImageConstants from '../../utils/ImageConstants';
import styles from './style';
import LocalStorageManager from '../../localStorage/LocalStorageManager';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    LocalStorageManager.getInstance().setIsUserLoggedIn(false);
    setTimeout(() => {
      navigateToDashboard();
    }, 2500);

    function navigateToDashboard() {
      navigation.replace(ScreensConstants.LOGIN_SCREEN);
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ImageConstants.logo} />
    </View>
  );
};

export default SplashScreen;
