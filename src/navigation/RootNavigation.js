import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {ScreensConstants} from '../utils/ScreenMapConstants';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import TabNavigation from './TabNaviagtion';

const RootNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName={ScreensConstants.SPLASH}>
      <Stack.Screen
        name={ScreensConstants.SPLASH}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.HOME}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={ScreensConstants.TAB_NAVIGATION}
        component={TabNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
