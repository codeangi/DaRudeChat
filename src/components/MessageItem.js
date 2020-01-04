import React, { Component, useState } from "react";
import {
    StyleSheet,
    Text,
    Button,
    View,
    TextInput,
    KeyboardAvoidingView
  } from "react-native";
  import moment, { min } from "moment";


  function getDiff(time) {
    console.log("diff");
    var dateString = moment(time).utc().local().format('ddd, h:mA');
    return(dateString);

    // var duration = moment.duration(dateString.diff(CurrentDate));
    // var hours = duration.asHours();
    // var minutes= duration.asMinutes()

    // console.log(minutes.toString());


    // if(minutes<2){
    //     console.log("Just now");

    //     return("Just now");
    // }
    // else if(minutes<5){
    //     console.log("minutes");

    //         return(minutes.toString()+" minutes ago");
    //     }
    
    // else {
    //     console.log("time");

    //     r
    // //}
      
      
  }
const MessageItem = props =>{
    if (props.messageType.includes("SELF")) {
        return (
          <View style={styles.self_bubble}>
            <Text style={styles.self_sender}>{props.sender}</Text>
            <Text style={styles.self_message}>
              {props.messageText}
            </Text>
            <Text style={styles.self_date}>
                {
                    getDiff(props.time)
                }
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
            <Text style={styles.self_date}>
                {
                   getDiff(props.time)
                }
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
      backgroundColor: "#1EADAE",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      flex: 2,
      alignSelf: "flex-end",
      maxWidth: "60%",
      paddingHorizontal: 15,
      paddingTop: 10,
      paddingBottom: 10,
      paddingStart:12,
      paddingEnd:12,
      borderRadius: 20
    },
    self_sender: {
      fontSize: 10,
      color: "black"
    },
    self_message: {
      fontSize: 18,
      color: "black"
    },
    self_date: {
      fontSize: 8,
      color: "black"
    },
    bubble: {
      marginVertical: 20,
      backgroundColor: "#F3BF24",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      flex: 2,
      alignSelf: "flex-start",
      maxWidth: "60%",
      paddingHorizontal: 15,
      paddingStart:12,
      paddingEnd:12,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 20
    },
  
    message: {
      fontSize: 18,
      color: "black"
    },
    sender: {
      color: "black",
      fontSize: 10
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