import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
    LineChart
} from "react-native-chart-kit";

const LineChartScrollableOne = () => {

    const data = {
        labels: ['January', 'February', 'August'],
        datasets: [
            {
                data: [
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                    Math.random() * 100,
                ]
            }
        ]
    }
    return (<View style={styles.container}>
        <ScrollView horizontal>
            <LineChart
                data={data}
                width={600}
                height={400}
                chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`
                }}
                bezier
            />
        </ScrollView>
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

export default LineChartScrollableOne
