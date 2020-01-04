import React, { Component, useState } from "react";
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack"
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  KeyboardAvoidingView,
  FlatList
} from "react-native";
import moment from "moment";
import MessageItem from "./src/components/MessageItem";
import MessageInput from "./src/components/MessageInput";
import ChatScreen from"./src/screens/ChatScreen";
import LoginScreen  from "./src/screens/LoginScreen";


const AppNavigator = createStackNavigator(  
  {  
      Login: LoginScreen,  
      Chat: ChatScreen  
  },  
  {   
    header: {
    titleStyle: {
      color:"white"
     /* this only styles the title/text (font, color etc.)  */
    },
    style: {
      color:"red"
     /* this will style the header, but does NOT change the text */
    },
    tintColor: {
      color:"white"
      /* this will color your back and forward arrows or left and right icons */
    }
  }
  }  
);  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  componentDidMount(){
    AppContainer.s
    LoginScreen.navigationOptions={
      title: 'Login',
      headerStyle: {
        backgroundColor: 'red',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };
    ChatScreen.navigationOptions={
      title: 'Bad Robo',
      headerBackTitle: 'Logout',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };



  }

  render() {  
      return (
        <KeyboardAvoidingView style={styles.bottom_row} behavior="padding">
        <AppContainer/>
        </KeyboardAvoidingView>
    
        );  
  }  
}
  


const styles = StyleSheet.create({
  bottom_row: {
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});





// export default function DaRudeChat() {


//   const validateUserHandler = userName => {
//     console.log(userName);
//     if (userName.indexOf("admin") !== -1) {
//      console.log("Login Success"+userName);
//      this.props.navigation.navigate('Chat')
//     }
//   };
  
//   return (
//   <View>
//     <LoginScreen onValidateUser={validateUserHandler}/>
//     </View>
//   );
//   }
