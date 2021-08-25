import React, { Children } from 'react'
import { TouchableOpacity } from 'react-native'
import { useHistory } from 'react-router-native'

export default function Route() {

    const History = useHistory()
    const handlePress = () => {
      history.push(to)  
    }

    return (
        <TouchableOpacity onPress={handlePress}>
           <Text>{Children}</Text> 
        </TouchableOpacity>
    )
}
