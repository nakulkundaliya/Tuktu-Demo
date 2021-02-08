import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from '../Utils';

export const Button = ({title, onPress, isSelected}) => {
  return (
    <TouchableOpacity style={[style.radiusButton, isSelected ? { backgroundColor: Colors.selectedPin,}: null] } onPress={onPress}>
      <Text style={isSelected ? {  color: Colors.white } : { color: Colors.textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  radiusButton: {
    backgroundColor: Colors.unSelectedChip,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
});
