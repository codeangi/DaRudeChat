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
import moment from "moment";
import MessageItem from "../components/MessageItem";
import MessageInput from "../components/MessageInput";


export default function ChatScreen() {
  const [outputText, setOutputText] = useState("");

  const [allMessages, setAllMessages] = useState([{
    key :
    moment()
      .valueOf()
      .toString()+ "OTHER1",
    time:
      moment()
        .valueOf()
        .toString(),
    messageText: "Hey!!",
    messageType: "OTHER",
    sender: "OTHER"
  },{
    key :
    moment()
      .valueOf()
      .toString()+ "OTHER2",
    time:
      moment()
        .valueOf()
        .toString(),
    messageText: "What are you upto?",
    messageType: "OTHER",
    sender: "OTHER"
  },]);

  const USER_NAME = "";

  const getReply = Usermessage => {
    console.log("inside-reply machine");
    console.log(Usermessage);
    if (Usermessage.includes("Hi")) {
      return {
        key: moment()
          .valueOf()
          .toString(),
        time: moment()
          .valueOf()
          .toString(),
        messageText: "Hello!!",
        messageType: "OTHER",
        sender: "OTHER"
      };
    } else if (Usermessage.includes("where are")) {
      return {
        key: moment()
          .valueOf()
          .toString(),
        time: moment()
          .valueOf()
          .toString(),
        messageText: "I'm from mars",
        messageType: "OTHER",
        sender: "OTHER"
      };
    } else if (Usermessage.includes("bro")) {
      return {
        key: moment()
          .valueOf()
          .toString(),
        time: moment()
          .valueOf()
          .toString(),
        messageText: "bro pls..",
        messageType: "OTHER",
        sender: "OTHER"
      };
    } else {
      return {
        key: moment()
          .valueOf()
          .toString(),
        time: moment()
          .valueOf()
          .toString(),
        messageText: "hahaha",
        messageType: "OTHER",
        sender: "OTHER"
      };
    }
  };






  const sendMessageHandler = typedMessage => {
    if (typedMessage.length > 0) {
      setAllMessages(currentMessages => [
        ...allMessages,
        {
          key:moment().valueOf().toString() + "SELF",
          time: moment().valueOf().toString(),
          messageText: typedMessage,
          messageType: "SELF",
          sender: "You"
        },
        getReply(typedMessage)
      ]);

      this.messageInput.clear();
    }
  };

  return (
  
  <View style={styles.screen}>
      <View style={styles.chat_box}>
        <FlatList
          data={allMessages}
          renderItem={itemData => (
            <MessageItem
              messageType={itemData.item.messageType}
              time={itemData.item.time}
              messageText={itemData.item.messageText}
              sender={itemData.item.sender}
            />
          )}
        />
      </View>
      <MessageInput onSendMessage={sendMessageHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 30,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "space-between",
    height: "100%"
  },
  self_bubble: {
    marginVertical: 20,
    backgroundColor: "#b2b2b2",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flex: 1,
    alignSelf: "flex-end",
    maxWidth: "60%",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20
  },
  self_sender: {
    fontWeight: "bold",
    paddingRight: 10,
    fontSize: 12,
    color: "black"
  },
  self_message: {
    fontSize: 18,
    color: "black"
  },

  bubble: {
    marginVertical: 20,
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: 1,
    alignSelf: "flex-start",
    maxWidth: "60%",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 15,
    borderRadius: 20
  },

  message: {
    fontSize: 18,
    color: "black"
  },
  sender: {
    fontWeight: "bold",
    paddingRight: 10,
    color: "black",
    fontSize: 12
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
  item: { color: "white", marginVertical: 10 },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "white"
  }
});
