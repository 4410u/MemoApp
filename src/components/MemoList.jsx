import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from './Icon';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoList}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Icon name="delete" size={32} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoList}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Icon name="delete" size={32} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoList}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity
            style={styles.memoDelete}
            onPress={() => { Alert.alert('Are you sure?'); }}
          >
            <Icon name="delete" size={32} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoList: {
    backgroundColor: '#ffffff',
    height: 80,
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  memoTitle: {
    fontSize: 16,
    lineHeight: 32,
    fontWeight: '400',
  },
  memoDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
