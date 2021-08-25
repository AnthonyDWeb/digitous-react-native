import React from 'react'
import {Alert, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function Btnalert(props) {

    return (
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
            <Text style={styles.btnText}>Click Me !</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        height: 20,
        width: 70,
        backgroundColor: "black",
    },
    btnText:{
        color: "whitesmoke"
    }
})
