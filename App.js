/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import RootNavigation from './src/navigation/RootNavigation';
import {UserInactivityProvider} from './src/provider/UserInactivityProvider';

const App = () => {
  return (
    <NavigationContainer>
      <UserInactivityProvider>
        <RootNavigation />
      </UserInactivityProvider>
    </NavigationContainer>
  );
};

export default App;
