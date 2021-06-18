import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.logout}>ログアウト</Text>
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

      <View style={styles.addBtn}>
        <Text style={styles.addBtnPlus}>＋</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
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
