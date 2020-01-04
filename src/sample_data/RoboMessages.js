import React, { Component, useState } from "react";
import moment, { min } from "moment";

const RoboMessageDirectory = props => {
  const [olderMessages, setOlderMessages] = useState([
    {
      key:
        moment()
          .valueOf()
          .toString() + "OTHER1",
      time: moment("2019-05-13T14:23:00.607Z")
        .valueOf()
        .toString(),
      messageText: "Hey!!",
      messageType: "OTHER",
      sender: "OTHER"
    },
    {
      key:
        moment("2019-05-13T13:23:00.607Z")
          .valueOf()
          .toString() + "OTHER2",
      time: moment()
        .valueOf()
        .toString(),
      messageText: "What are you upto?",
      messageType: "OTHER",
      sender: "OTHER"
    }
  ]);
  

   function getPreLoadedMessages(){
    return olderMessages;
  };


   function getReply(Usermessage) {
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
};

export default RoboMessageDirectory;
