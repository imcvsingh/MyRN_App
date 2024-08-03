// Button.js

import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({onPress, title, style, textStyle, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style, disabled && styles.disabled]}
      disabled={disabled}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', // Matches parent width
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
});

export default Button;
