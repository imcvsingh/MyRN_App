import React, {useEffect} from 'react';
import {Alert, Image, View} from 'react-native';
import {ScreensConstants} from '../../utils/ScreenMapConstants';
import ImageConstants from '../../utils/ImageConstants';
import styles from './style';
import Button from '../../components/Buttons/Button';

const LoginScreen = ({navigation}) => {
  function handleOnPress() {
    navigation.replace(ScreensConstants.TAB_NAVIGATION);
    // alert('Click');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={ImageConstants.logo} />
      <View style={{width: '100%', padding: 50}}>
        <Button onPress={handleOnPress} disabled={false} title={'Login Here'} />
      </View>
    </View>
  );
};

export default LoginScreen;
