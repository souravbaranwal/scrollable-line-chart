import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Area, Chart, HorizontalAxis, Line, VerticalAxis } from 'react-native-responsive-linechart';


const LineChartScrollableTwo = () => {
  return (<View style={styles.container}>
    <Chart
      style={{ height: 200, width: 400 }}
      data={[
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 3 },
        { x: 4, y: 5 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
      ]}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 0, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
      viewport={{ size: { width: 5 } }}
    >
      <VerticalAxis
        tickValues={[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110]}
        theme={{
          axis: { stroke: { color: '#aaa', width: 2 } },
          ticks: { stroke: { color: '#aaa', width: 2 } },
          labels: { formatter: (v) => v.toFixed(2) },
        }}
      />
      <HorizontalAxis
        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
        theme={{
          axis: { stroke: { color: '#aaa', width: 2 } },
          ticks: { stroke: { color: '#aaa', width: 2 } },
          labels: { visible: false, label: { rotation: 50 }, formatter: (v) => v },
        }}
      />
      <Area theme={{ gradient: { from: { color: '#f3fff2' }, to: { color: '#578CCA', opacity: 0.2 } }}} />
      <Line
        theme={{ stroke: { color: '#83acdb', width: 3 }, scatter: { default: { width: 8, height: 8, rx: 4, color: '#578CCA' }, selected: { color: 'purple' } } }}
      />
    </Chart>
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LineChartScrollableTwo
