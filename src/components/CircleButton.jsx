import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

import Icon from './Icon';

export default function CircleButton(props) {
  const { style, name } = props;
  return (
    <View style={[styles.addBtn, style]}>
      <Icon name={name} size={40} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  memoClose: {
    color: '#b0b0b0',
    fontSize: 24,
    fontWeight: '100',
  },
  addBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#467fd3',
    position: 'absolute',
    right: 40,
    bottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  addBtnPlus: {
    fontSize: 48,
    color: '#ffffff',
    fontWeight: '200',
  },
});
