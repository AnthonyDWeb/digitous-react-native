import React from 'react';
import { StyleSheet, Text, View, NativeRouter } from 'react-native';
import Login from './components/Login';
// import myRoute from './components/Route';
// import Home from './components/Home';

export default function App() {
  return (
    <View style={styles.container}>
       <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
});
