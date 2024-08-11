import React, {useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {ScreensConstants} from '../../utils/Constants';
import ImageConstants from '../../utils/ImageConstants';
import styles from './style';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>{'Profile Screen'}</Text>
    </View>
  );
};

export default ProfileScreen;
