import {MMKV} from 'react-native-mmkv';
import {StorageConstants} from '../utils/Constants';

export const storage = new MMKV();

class LocalStorageManager {
  static instance = null;
  constructor() {}

  static getInstance() {
    if (this.instance === null) {
      this.instance = new LocalStorageManager();
    }
    return this.instance;
  }

  setIsUserLoggedIn(value) {
    storage.set(StorageConstants.IS_USER_LOGGED_IN, value);
  }
  getIsUserLoggedIn() {
    const isUserLoggedIn = storage.getBoolean(
      StorageConstants.IS_USER_LOGGED_IN,
    );
    return isUserLoggedIn != null ? isUserLoggedIn : false;
  }

  startInactiveTimeDuration(value) {
    storage.set(StorageConstants.RECORD_INACTIVE_TIME, value);
  }
  getInactiveTimeDuration() {
    const timeDuration = storage.getNumber(
      StorageConstants.RECORD_INACTIVE_TIME,
    );
    return timeDuration != null ? timeDuration : 0;
  }
}

export default LocalStorageManager;
