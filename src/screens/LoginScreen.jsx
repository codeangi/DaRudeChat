import React, { Component,useState } from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity
} from "react-native";
import moment from "moment";


export default function ChatScreen() {
  const [outputText, setOutputText] = useState("");
      
  function userNameInputHandler(typedMessage) {
    setOutputText(typedMessage);
  }


    return (
      <View style={styles.screen}>
        <View style={styles.mid_box}>
        <TextInput
          ref={input => {
            this.messageInput = input;
          }}
          value={outputText}
          onChangeText={userNameInputHandler}
          placeholder="User name"
          style={styles.username_input_style}
        
          placeholderTextColor="#FFF"
        />

<TouchableOpacity
         style={styles.login_button_style}  
         onPress={console.log('login')}>
         <Text      style={{color:'white', width:"100%", textAlign: 'center'}}  > Login </Text>
 </TouchableOpacity>
      </View>
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
