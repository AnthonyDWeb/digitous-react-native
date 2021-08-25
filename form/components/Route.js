import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useHistory } from 'react-router-native'

export default function Route({Children, to}) {
    const History = useHistory()

    const handlePress = () => {
      History.push(to)  
    }

    return (
        <TouchableOpacity onPress={handlePress} style={styles.btn}>
           <Text style={styles.txt}>{Children}</Text> 
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  btn:{
  backgroundColor: "black"
  },
  txt:{
    color: "white"
  },
})
