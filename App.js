import React, { memo, useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  Button
} from 'react-native';

import TouchID from 'react-native-touch-id';
import { firebase } from './src/firebase/config'



function  showAlert1(msg) {
        Alert.alert(
            'Hexagon',
            msg,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('Login')},
            ]
        );
    }


function handleSubmit(){
        const {
          username,
          password,
          shouldEnableTouchID,
        } = this.state;
}



function DemoNativeAuth(){

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const login = () => {

    firebase.auth().signInWithEmailAndPassword(username,password)
    .then(success => {
      showAlert1("Login Successful");
    })
    .catch(error =>{
      showAlert1("Login Unsuccessful " + error);
    })

  }

  const loginWithFingerprint = () => {

    TouchID.authenticate('to demo this react-native component')
        .then(success => {
          showAlert1("Login Successful");
        })
        .catch(error => {
          // Failure code
          showAlert1("Login Unsuccessful " + error);
        });

  }


  return(
    <View style={styles.container}>
      <Text style={styles.titleText}> Hexagon </Text>
      <TextInput
        placeholder="Enter Username"
        placeholderTextColor="grey"
        onChangeText={(text) => setUsername(text)}
        style={styles.textInput}
        value={username}
      />
      <TextInput
        placeholder="Enter Username"
        placeholderTextColor="grey"
        style={styles.textInput}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View  style={{marginTop: 20,width:350,flexDirection:"row"}}>
        <View style={{width:160, height: 40, marginLeft:30}}>
        <Button
           onPress = {login}
           title = "Login"
           color = "black"
           style = {{marginLeft:330}}
        />
        </View>
        <View style={{width:160, height: 40, marginLeft:30}}>
        <Button
           onPress = {loginWithFingerprint}
           title = "Fingerprint"
           color = "black"
        />
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ADD8E6",
    height:"100%"
  },
  textInput: {
    width: 350,
    height: 40,
    borderWidth: 1,
    marginLeft: 30,
    marginTop: 10
  },
  titleText: {
    fontSize: 50,
    textAlign: 'center',
    fontFamily: "Cochin",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom:10
  }
});


export default memo(DemoNativeAuth)
