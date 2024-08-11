import {StackActions, useNavigation} from '@react-navigation/native';
import React, {createContext, useEffect, useRef, useState} from 'react';
import {Alert, AppState} from 'react-native';
import LocalStorageManager from '../localStorage/LocalStorageManager';
import {ScreensConstants} from '../utils/Constants';

const AppContext = createContext();

const UserInactivityProvider = ({children}) => {
  const [appState, setAppState] = useState(AppState.currentState);
  const navigation = useNavigation();
  const SESSION_EXPIRY_TIME = 1000000;

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const isUserLoggedIn =
        LocalStorageManager.getInstance().getIsUserLoggedIn();
      if (isUserLoggedIn) {
        if (nextAppState === 'active') {
          const elapsed =
            Date.now() -
            LocalStorageManager.getInstance().getInactiveTimeDuration();
          console.log('Time->' + elapsed);
          if (elapsed > SESSION_EXPIRY_TIME) {
            console.log('session expired');
            Alert.alert('Session Expired', 'Your session has been expired');
          } else {
            // navigation.goBack();
            const pushAction = StackActions.push(ScreensConstants.LOCK_SCREEN);
            navigation.dispatch(pushAction);
          }
        }
        if (nextAppState === 'background') {
          console.log('background hit');
          //   const popAction = StackActions.pop(1);
          //   navigation.dispatch(popAction);
          // const pushAction = StackActions.push(ScreensConstants.BLUR_SCREEN);
          // navigation.dispatch(pushAction);
          //recordInactiveTime
          LocalStorageManager.getInstance().startInactiveTimeDuration(
            Date.now(),
          );
        }
        setAppState(nextAppState);
      }
    });

    return () => {
      subscription.remove();
    };
  }, [navigation]);

  return <AppContext.Provider value={null}>{children}</AppContext.Provider>;
};

export {AppContext, UserInactivityProvider};
