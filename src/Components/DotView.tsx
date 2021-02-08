import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Colors} from '../Utils';

export const DotView = ({ isSelected }) => {
  return (
    <View style={[style.circel, isSelected ? {borderColor : Colors.primaryColor, backgroundColor: Colors.primaryColor } : null ]}></View>
  );
};
const style = StyleSheet.create({
  circel: {
    height: 10,
    width: 10,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 5,
  },
});
