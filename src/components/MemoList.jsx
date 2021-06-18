import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoList}>
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <View style={styles.memoBtn}>
            <Text style={styles.memoClose}>✕</Text>
          </View>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <View style={styles.memoBtn}>
            <Text style={styles.memoClose}>✕</Text>
          </View>
        </View>
      </View>
      <View style={styles.memoList}>
        <View style={styles.memoItem}>
          <View style={styles.memoText}>
            <Text style={styles.memoTitle}>買い物リスト</Text>
            <Text style={styles.memoDate}>2020年12月24日 10:00</Text>
          </View>
          <View style={styles.memoBtn}>
            <Text style={styles.memoClose}>✕</Text>
          </View>
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
