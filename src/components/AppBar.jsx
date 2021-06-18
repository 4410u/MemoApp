import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appbar}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.logout}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
  },
  header: {
    // backgroundColor: 'gray',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 24,
    marginBottom: 8,
    lineHeight: 32,
    fontWeight: '400',
  },
  logout: {
    // backgroundColor: 'green',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    lineHeight: 16,
    position: 'absolute',
    right: 19,
    bottom: 8,
  },
});
