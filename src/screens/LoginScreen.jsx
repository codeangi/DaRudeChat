import React, { Component,useState } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack"

import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import moment from "moment";


const LoginScreen = props =>{
  const [outputText, setOutputText] = useState("");
      
  function userNameInputHandler(typedMessage) {
    setOutputText(typedMessage);
  }

  const validateUserHandler = () => {
    console.log(outputText);
    if (outputText.indexOf("admin") !== -1) {
     console.log("Login Success"+outputText);
     props.navigation.navigate('Chat',{
      userName: outputText,  
     })
    }else{
      Alert.alert(
        'You need to be an admin for this..'
     )
    }

  };

  

    return (
      <View style={styles.screen}>
        <KeyboardAvoidingView style={styles.mid_box}>
        <TextInput
          ref={input => {
            this.userNameInput = input;
          }}
          value={outputText}
          onChangeText={userNameInputHandler}
          placeholder="User name"
          style={styles.username_input_style}
          placeholderTextColor="#FFF"
        />

<TouchableOpacity
          onPress={validateUserHandler}
         style={styles.login_button_style}>
         <Text      style={{color:'white', width:"100%", textAlign: 'center'}}> Login </Text>
 </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
    )
}


const styles = StyleSheet.create({
  screen: {
    padding: 30,
    backgroundColor: "black",
    justifyContent: "space-between",
    height: "100%"
  },
  mid_box: {
    marginVertical: 50,
    flexDirection: "column",
    flex:1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: "50%"
  },
  login_button_style: {
    padding: 10,
    width: "80%",
    textAlign: 'center',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'black',
    color: 'white'
  },
  username_input_style:{
    color: 'white',
    borderBottomColor: "white",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  }
});
export default LoginScreen;