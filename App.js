import React, { Component, useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
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
// import { LoginScreen, ChatScreen } from './src/screens'

export default function DaRudeChat() {
  const [message, sendMessage] = useState("");
  const [sentMessages,setSentMessage]= useState([]);
  const USER_NAME = '';
  
  state = {
    allmessages: [],
  };
  
  function renderItem({item}) {
    if(item.messageType== "SELF"){
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  }else{
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );

  }
  }



  // function componentDidMount() {
  //   subscribe(CHANNEL, allMessages => {
  //     this.setState({allMessages});
  //   });
  // };


  // const [allMessages,setAllMessages]= useState([]);
  


  function messageInputHandler(typedMessage) {
    sendMessage(typedMessage);
  }
  const tryAndGetAReply =(Usermessage) =>{


  }

  const sendMessageHandler = () => {
    setSentMessage(currentMessages=>[...sentMessages,message]);
    setAllMessages(currentMessages=>[...allMessages,message]);
    tryAndGetAReply(message)
    //setSentMessage([...sentMessage, message]);
    this.messageInput.clear();

  };

  return (
    <View style={styles.screen}>
      <View style={styles.chat_box}>
      <FlatList
          ref={input => { this.messageInput = input }}
          data={this.state.allMessages}
          renderItem={this.renderItem}
        />
      {/* //{sentMessages.map((message) => <View key={message}><Text style={{color:'white'}} >{message}</Text></View>)} */}
      </View>

      <KeyboardAvoidingView style={styles.bottom_row} behavior="padding">
        <TextInput
        ref={input => { this.messageInput = input }}
          value={message}
          onChangeText={messageInputHandler}
          placeholder="Your Message"
          style={styles.message_box_style}
          placeholderTextColor="#FFF"
        />

        <Button
          onPress={sendMessageHandler}
          title="Send"
          style={styles.send_button_style}
        />
      </KeyboardAvoidingView>
    </View>
  );
}




const styles = StyleSheet.create({
  screen: {
    padding: 30,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "space-between",
    height: "100%"
  },
  bottom_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  chat_box: {
    flex: 1,
    paddingTop: 30,
    paddingStart: 10,
    paddingEnd: 10,
    flexDirection: "column"
  },
  message_box_style: {
    borderBottomColor: "white",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    color: "white"
  },
  send_button_style: {
    padding: 10,
    width: "20%"
  },
  item: {color:'white',
marginVertical: 10
},
row: {
  padding: 20,
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
},
message: {
  fontSize: 18,
},
sender: {
  fontWeight: 'bold',
  paddingRight: 10,
}

});
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'normal',
//     marginBottom: 48,
//   },
// });
// AppRegistry.registerComponent('DaRudeChat', () => DaRudeChat);

// const MainNavigator = createStackNavigator({
//   Login: {screen: LoginScreen},
//   Chat: {screen: ChatScreen},
// });

// const App = createAppContainer(MainNavigator);
// export default App;

// // import React from 'react';
// import React, { Component } from 'react';
// import { Image } from 'react-native';
// import { View } from 'react-native';
// import { Text  } from 'react-native';
// import {  TextInput } from 'react-native';
//
//
//
// // export default class HelloWorldApp extends Component {
// //   render() {
// //     let pic = {
// //       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
// //     };
// //     return (
// //       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
// //         <Text>Hello, world!</Text>
// //         <Image source={pic} style={{width: 193, height: 110}}/>
// //       </View>
// //     );
// //   }
// // }
//
// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Hello WorlD!! and Fuck You</Text>
// //     </View>
// //   );
// // }
//
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
//
// class Greeting extends Component {
//   render() {
//     return (
//       <View style={{alignItems: 'center', top: 150}}>
//         <Text>Hello {this.props.name}!</Text>
//       </View>
//     );
//   }
// }
//
// // export default class LotsOfGreetings extends Component {
// //   const [value, onChangeText] = React.useState('Useless Placeholder');
// //   //
// //   // render() {
// //   //   <View style={{alignItems: 'center', top: 150}}>
// //   //     <Greeting name='FuckWad'/>
// //   //     <Greeting name='PooKisser'/>
// //   //     <Greeting name='turdball'/>
// //   //     <Greeting name='dickHead'/>
// //   //     <Greeting name='stankBug'/>
// //   //   </View>
// //   // }
// // }
//
// export default function UselessText() {
//   const [value, onChangeText] = React.useState('Useless Placeholder');
//
//   return (
//         <View style={{
//         backgroundColor: value,
//         borderBottomColor: '#000000',
//         borderBottomWidth: 1,
//       }}>
//         <TextInput
//           style={{ height: 40, borderColor: 'gray', borderWidth: 1 , top: 150}}
//           onChangeText={text => onChangeText(text)}
//           value={value}
//         />
//         <UselessTextInput
//        multiline
//        numberOfLines={4}
//        onChangeText={text => onChangeText(text)}
//        value={value}
//      />
//         <Greeting name='FuckWad'/>
//                     </View>
//   );
// }
//
// function UselessTextInput(props) {
//   return (
//     <TextInput
//       {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
//       editable
//       maxLength={40}
//       top={150}
//     />
//   );
// }
