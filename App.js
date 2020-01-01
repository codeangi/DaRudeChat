import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/Login/LoginScreen.jsx'
import ChatScreen from './src/Chat/ChatScreen.jsx'



const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Chat: {screen: ChatScreen},
});

const App = createAppContainer(MainNavigator);

export default App;



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
