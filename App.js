import { StatusBar, TouchableOpacity } from 'react-native';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import React, { useState } from 'react';
import Register from './Register';
import Log from './Log In';

export default function App() {
  const [component, setCompon] = useState(Log);
  const [det, setDet] = useState(true);
  const [Buttons, setButtons] = useState("create account");
  function Func() {
    if(det){
      setCompon(Register);
      setButtons("Already have account? Log In");
      setDet(false)
    }
    else if(!det) {
      setCompon(Log)
      setButtons("create account");
      setDet(true)
    }
  }

  return (
    <>
      <StatusBar />
      <ImageBackground source={require('./BGFull.png')} style={styles.container}>
      <Text style = {{ elevation: 5,position: 'absolute', top: 35-5, left: 35-5,fontWeight: 'bold', fontSize: 35-8, color: 'ghostwhite',}}>Tinker <Text style = {{color: 'tomato'}}>3</Text><Text style = {{color: 'teal'}}>D</Text></Text>
        <View style = {{height: '75%', width: '91%', backgroundColor: '#ffffff11', borderRadius: 31-1}}>
          {component}
        </View>
        <TouchableOpacity onPress={Func} style = {{marginVertical: 15}}><Text style = {{textDecorationLine: 'underline',color: 'grey'}}>{Buttons}</Text></TouchableOpacity>
        <View style = {{flexDirection: 'row'}}>
          <View style = {{backgroundColor: '#333', borderRadius: 54, height: 8, width: 8, marginHorizontal: 1}} />
          <View style = {{backgroundColor: 'tomato', borderRadius: 54, height: 8, width: 8, marginHorizontal: 1}} />
          <View style = {{backgroundColor: 'teal', borderRadius: 54, height: 8, width: 8, marginHorizontal: 1}} />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'left',
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
