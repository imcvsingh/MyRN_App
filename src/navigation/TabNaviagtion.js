import React from 'react';
import {StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreensConstants} from '../utils/Constants';

import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabBarIconHome = ({focused, color}) => {
  const image_name = focused ? 'home-outline' : 'home-outline';
  return <Ionicons name={image_name} size={24} color={color} />;
};

const TabBarIconProfile = ({focused, color}) => {
  const image_name = focused ? 'person' : 'person';
  return <Ionicons name={image_name} size={24} color={color} />;
};

const TabBarIconSettings = ({focused, color}) => {
  const image_name = focused ? 'settings-outline' : 'settings-outline';
  return <Ionicons name={image_name} size={24} color={color} />;
};

function TabNavigation() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={'#fff'}
        showHideTransition={'slide'}
        barStyle={'dark-content'}
      />
      <Tab.Navigator
        initialRouteName={ScreensConstants.HOME_SCREEN}
        screenOptions={({route}) => ({
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {paddingBottom: 5},
        })}>
        <Tab.Screen
          name={ScreensConstants.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: TabBarIconHome,
          }}
        />
        <Tab.Screen
          name={ScreensConstants.PROFILE_SCREEN}
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: TabBarIconProfile,
          }}
        />
        <Tab.Screen
          name={ScreensConstants.SETTINGS_SCREEN}
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            headerShown: false,
            tabBarIcon: TabBarIconSettings,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabNavigation;
