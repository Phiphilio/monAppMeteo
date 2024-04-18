import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import about from "./composants/about.js"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>yo, érudit si tu vois ça, alors tu vois ma première application mobile </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
