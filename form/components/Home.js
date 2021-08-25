import React from 'react'
import { StyleSheet, Text, View, NativeRouter } from 'react-native';

export default function Home() {

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Homepage</Text>  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    mainTitle:{
        color: "white",
        fontSize: 40,
        fontWeight: 900,
    },
    txt:{
        color: "white",
    },
})