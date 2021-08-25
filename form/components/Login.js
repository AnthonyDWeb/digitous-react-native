import React from 'react'
import { StyleSheet, Text, View, NativeRouter, TextInput, TouchableOpacity } from 'react-native';

export default function Login() {

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Login</Text> 
            <View style={styles.containerInput}>
                <TextInput style={styles.txtInput} value="test value"/>
                <TouchableOpacity  style={styles.Btn}>
                    <Text  style={styles.txtBtn}>test</Text>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
    },
    containerInput:{
        flexDirection: "row",
        marginVertical: 10,
    },
    mainTitle:{
        color: "white",
        fontSize: 40,
        fontWeight: 900,
    },
    txt:{
        color: "white",
    },
    txtInput:{
        color: "white",
        paddingLeft: 5,
        paddingBottom: 3,
        margin: 10,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: 'center',
    },
    txtBtn:{
        color: "white",
    },
    Btn:{
        color: "white",
        padding: 5,
        // paddingBottom: 3,
        margin: 10,
        borderWidth: 1,
        borderColor: "white",
        justifyContent: 'center',
    },
})