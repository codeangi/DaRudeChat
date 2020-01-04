import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    Button,
    View,
    TextInput,
    KeyboardAvoidingView
  } from "react-native";

const MessageItem = props =>{
    if (props.messageType.includes("SELF")) {
        return (
          <View style={styles.self_bubble}>
            <Text style={styles.self_sender}>{props.sender}</Text>
            <Text style={styles.self_message}>
              {props.messageText}
            </Text>
          </View>
        );
      } else {
        return (
          <View style={styles.bubble}>
            <Text style={styles.sender}>{props.sender}</Text>
            <Text style={styles.message}>
              {props.messageText}
            </Text>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    screen: {
      padding: 30,
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

export default MessageItem;