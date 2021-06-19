import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';

import Icon from './Icon';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoList}>
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={32} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={32} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Icon name="delete" size={32} color="#b0b0b0" />
          </TouchableOpacity>
        </View>
      </View>
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
});
