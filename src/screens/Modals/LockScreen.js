import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import LocalStorageManager from '../../localStorage/LocalStorageManager';
import CustomKeyboard from '../../components/CustomKeyboard/CustomKeyboard';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ReactNativeBiometrics from 'react-native-biometrics';

const LockScreen = ({navigation}) => {
  const [pin, setPin] = useState([]);
  const pinLength = Array(6).fill(0);

  const offset = useSharedValue(0);
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: offset.value}],
    };
  });

  const OFFSET = 20;
  const TIME = 80;

  useEffect(() => {
    if (pin.length === 6) {
      if (pin === '111111') {
        navigation.pop();
      } else {
        offset.value = withSequence(
          withTiming(-OFFSET, {duration: TIME / 2}),
          withRepeat(withTiming(OFFSET, {duration: TIME}), 4, true),
          withTiming(0, {duration: TIME / 2}),
        );
        setPin([]);
      }
      console.log('Pin l->', pin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin]);

  const handleKeyPress = key => {
    setPin(prev => prev + key);
  };

  const handleResetPress = () => {
    setPin([]);
  };

  const handleBackspace = () => {
    setPin(prev => prev.slice(0, -1));
  };

  //Local-auth

  const callLocalAuth = () => {
    const rnBiometrics = new ReactNativeBiometrics();

    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          navigation.pop();
          console.log('successful biometrics provided');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

  useEffect(() => {
    callLocalAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Disabled the android hardware back button
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{alignSelf: 'center', marginVertical: 50}}>
        {'Welcome, Chandravir'}
      </Text>
      <Animated.View style={[style.codeView, animationStyle]}>
        {pinLength.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                style.codeEmpty,
                {backgroundColor: pin[index] ? '#3D38ED' : '#D8DCE2'},
              ]}></View>
          );
        })}
      </Animated.View>
      <CustomKeyboard
        onPressKey={handleKeyPress}
        onPressReset={handleResetPress}
        onPressBackspace={handleBackspace}
      />
      <TouchableOpacity
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'flex-end',
          marginBottom: 50,
        }}
        onPress={callLocalAuth}>
        <Ionicons name={'finger-print'} size={55} color={'#000'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  codeView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 100,
  },
  codeEmpty: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  numberView: {
    marginHorizontal: 80,
    gap: 60,
  },
  number: {
    fontSize: 32,
    // padding: 20,
  },
});

export default LockScreen;
