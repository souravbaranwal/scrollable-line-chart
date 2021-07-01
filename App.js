import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LineChartScrollableTwo from "./LineChartScrollableTwo";
import LineChartScrollableOne from "./LineChartScrollableOne"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LineChartScrollableOne />
      <LineChartScrollableTwo/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
