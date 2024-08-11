// CustomKeyboard.js
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CustomKeyboard = ({onPressKey, onPressReset, onPressBackspace}) => {
  return (
    <View>
      <View style={styles.container}>
        {[1, 2, 3].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              onPressKey(key);
            }}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.container}>
        {[4, 5, 6].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              onPressKey(key);
            }}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        {[7, 8, 9].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              onPressKey(key);
            }}>
            <Text style={styles.keyText}>{key}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        {[
          'Reset',
          0,
          <Ionicons name={'backspace'} size={32} color={'#000'} />,
        ].map((key, index) => (
          <TouchableOpacity
            key={index}
            style={styles.key}
            onPress={() => {
              switch (index) {
                case 0:
                  onPressReset(key);
                  break;
                case 1:
                  onPressKey(key);
                  break;
                case 2:
                  onPressBackspace('backspace');
                  break;
              }
            }}>
            <Text style={index === 0 ? styles.resetKeyText : styles.keyText}>
              {key}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default CustomKeyboard;
