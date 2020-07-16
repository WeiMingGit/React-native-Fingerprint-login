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
import * as Keychain from 'react-native-keychain';



function  showAlert1() {
        Alert.alert(
            'Welcome',
            'Login Successful',
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

  const loginWithFingerprint = () => {

    TouchID.authenticate('to demo this react-native component')
        .then(success => {
          console.log("success :",success);
          showAlert1();
        })
        .catch(error => {
          // Failure code
        });

  }


  return(
    <View style={styles.container}>
      <Text style={styles.titleText}> Hexagon </Text>
      <TextInput placeholder="Enter Username" placeholderTextColor="grey" style={styles.textInput} value={username}/>
      <TextInput placeholder="Enter Username" placeholderTextColor="grey" style={styles.textInput} value={password}/>
      <View  style={{marginTop: 20,width:350,flexDirection:"row"}}>
        <View style={{width:160, height: 40, marginLeft:30}}>
        <Button
           onPress = {loginWithFingerprint}
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
