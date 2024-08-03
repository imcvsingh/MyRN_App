import React from 'react';
import {Image, StatusBar, View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen/HomeScreen';
import {ScreensConstants} from '../utils/ScreenMapConstants';

import {SafeAreaView} from 'react-native-safe-area-context';
import ImageConstants from '../utils/ImageConstants';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1}}>
            <Text style={{color: isFocused ? '#673ab7' : '#222'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const TabBarIconHome = ({focused, color}) => {
  // const image_name = focused ? 'home-outline' : 'home-outline';
  return (
    <View>
      <Image
        source={ImageConstants.logo}
        style={{height: 24, width: 24, tintColor: focused ? 'red' : 'green'}}
      />
    </View>
  );
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
        // tabBar={props => <MyTabBar {...props} />}
        initialRouteName={ScreensConstants.HOME}
        screenOptions={({route}) => ({
          // tabBarIcon: ({focused, color, size}) => {
          //   let iconName;

          //   if (route.name === 'Home') {
          //     iconName = focused ? ImageConstants.logo : ImageConstants.logo;
          //   } else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list' : 'ios-list-outline';
          //   }

          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name={ScreensConstants.HOME}
          component={HomeScreen}
          options={{
            // ...tabOptionStyle,
            tabBarLabel: 'home',
            // tabBarIcon: TabBarIconHome,
          }}
        />
        <Tab.Screen
          name={ScreensConstants.SETTINGS}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export default TabNavigation;
