import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleButton(props) {
  const { children, style } = props;
  return (
    <View style={[styles.addBtn, style]}>
      <Text style={styles.addBtnPlus}>{children}</Text>
    </View>
  );
}

CircleButton.propTypes = {
  children: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  memoBtn: {

  },
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
