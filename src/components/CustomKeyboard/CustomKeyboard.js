// CustomKeyboard.js
import React from 'react';
import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CustomKeyboard = ({
  onPressKey,
  onPressReset,
  onPressBackspace,
  isKeyDisabled,
}) => {
  return (
    <View>
      <View style={styles.container}>
        {[1, 2, 3].map((key, index) => (
          <Pressable
            android_ripple={{color: '#D3D3D3'}} // Customize color
            disabled={isKeyDisabled}
            key={index}
            style={({pressed}) => [styles.key, pressed && {opacity: 0.5}]}
            // style={styles.key}
            onPress={() => {
              onPressKey(key);
            }}>
            <Text style={styles.keyText}>{key}</Text>
          </Pressable>
        ))}
      </View>

      <View style={styles.container}>
        {[4, 5, 6].map((key, index) => (
          <TouchableOpacity
            disabled={isKeyDisabled}
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
            disabled={isKeyDisabled}
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
          <Ionicons name={'backspace'} size={32} color={'gray'} />,
        ].map((key, index) => (
          <TouchableOpacity
            disabled={isKeyDisabled}
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
