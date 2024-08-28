import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ScreensConstants} from '../../utils/Constants';
import styles from './style';
import ColorConstants from '../../utils/ColorConstants';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigateToDashboard();
    }, 2500);

    function navigateToDashboard() {
      //   navigation.replace(ScreensConstants.HOME);
    }
  }, [navigation]);

  const onPressOpenWebview = () => {
    navigation.navigate(ScreensConstants.WEBVIEW_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text>{'Home Screen'}</Text>
      <TouchableOpacity
        style={{margin: 50, backgroundColor: 'blue', padding: 10}}
        onPress={onPressOpenWebview}>
        <Text style={{color: ColorConstants.white}}>{'Open WebView'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
