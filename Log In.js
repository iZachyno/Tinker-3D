import { StatusBar } from 'react-native';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';

export default function Log() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', fontSize: 35, color: 'white',}}>Log In</Text>
        <View style = {styles.Viewer} />
        <View style = {styles.Viewer} />
        <TextInput textAlign='center' placeholder='username' placeholderTextColor={'#ffffff35'} style = {styles.input} />
        <TextInput textAlign='center' placeholder='password' placeholderTextColor={'#ffffff35'} secureTextEntry style = {styles.input} />
        <View style = {styles.Viewer} />
        <TouchableOpacity style = {{ backgroundColor: '#ffffff05',height: 31, width: 115, alignItems: 'center', justifyContent: 'center', borderRadius: 31-11}}><Text style = {{ fontWeight: 'bold',color: 'white', fontSize: 15}}>Submit</Text></TouchableOpacity>
        <View style = {styles.Viewer} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1, 
    borderRadius: 31-1,
    alignItems: 'center'
  },
  input: {
      borderBottomWidth: 1,
      color: 'white',
      fontSize: 15,
      marginVertical: 15,
      borderColor: '#ffffff15'
  },
  Viewer:{
      height: 54
  }
});
