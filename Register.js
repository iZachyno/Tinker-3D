import { StatusBar } from 'react-native';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native';

export default function Register() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style = {{fontWeight: 'bold', fontSize: 35, color: 'white',}}>Register</Text>
        <View style = {styles.Viewer} />
        <Text style = {{fontWeight: 'bold',color: '#ffffff45', fontSize: 15}}>e-mail</Text>
        
        <TextInput textAlign='center' keyboardType='email-address' style = {styles.input} />
        <Text style = {{fontWeight: 'bold',color: '#ffffff45', fontSize: 15}}>username</Text>
        
        <TextInput textAlign='center' style = {styles.input} />
        
        <Text style = {{fontWeight: 'bold',color: '#ffffff45', fontSize: 15}}>password</Text>
        
        <TextInput textAlign='center' passwordRules='numbers'  secureTextEntry style = {styles.input} />
        
        <Text style = {{fontWeight: 'bold',color: '#ffffff45', fontSize: 15}}>confirm password</Text>
        
        <TextInput textAlign='center' passwordRules='numbers'  secureTextEntry style = {styles.input} />
        
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
