import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {ScreensConstants} from '../utils/Constants';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import TabNavigation from './TabNaviagtion';
import {NavigationContainer} from '@react-navigation/native';
import LockScreen from '../screens/Modals/LockScreen';
import BlurViewScreen from '../screens/Modals/BlurViewScreen';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreensConstants.SPLASH_SCREEN}>
      <Stack.Screen
        name={ScreensConstants.SPLASH_SCREEN}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.LOGIN_SCREEN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.HOME_SCREEN}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.TAB_NAVIGATION}
        component={TabNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.LOCK_SCREEN}
        component={LockScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.BLUR_SCREEN}
        component={BlurViewScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
