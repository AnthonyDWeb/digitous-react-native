import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, Alert } from 'react-native';
import konexio from './assets/konexio-logo.png'
import Btnalert from './components/BtnAlert';


export default function App() {
  const [showLoading,setShowLoading] = useState(false)

  useEffect(()=>{

  },[])

  const handlePress = () =>{
    setShowLoading(!showLoading);
    Alert.alert("why did you hit me !")
  }

    return (


        // <View style={styles.mainContainer}>
        //     <View style={styles.textContainer}>
        //         <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
        //         <Text style={styles.text2}>Open up App.js to start working on your app!</Text>
        //         <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
        //     </View>
        // </View>

       
            <ScrollView style={styles.mainContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text1}>Open up App.js to start working on your app!</Text>
                    <Text style={styles.text2}>Open up App.js to start working on your app!</Text>
                    <Text style={styles.text3}>Open up App.js to start working on your app!</Text>
                    <Image style={styles.img} source={konexio} />
                    <Image style={styles.img} source={"https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"} />
                    <Btnalert onPress={handlePress}/>
                    {showLoading && <ActivityIndicator size="large" color="red" /> }
                </View>
                  

            </ScrollView>
      




    );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  textContainer: {
    backgroundColor: "whitesmoke"
  },
  text1:{
    fontSize: 30,
    marginVertical: 80,
  },
  text2:{
    textAlign: 'center',
    marginVertical: 80 ,
  },
  text3:{
    fontWeight: 'bold',
    marginVertical: 80 ,
  },
  list:{
    margin: 10,
  },
  img:{
    height: 50,
    width: 200,
  },
});
