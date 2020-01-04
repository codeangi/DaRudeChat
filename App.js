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
import MessageItem from "./src/components/MessageItem";
import MessageInput from "./src/components/MessageInput";
import ChatScreen from"./src/screens/ChatScreen";
import LoginScreen  from "./src/screens/LoginScreen";


export default function DaRudeChat() {
  return (
  <View>
    <LoginScreen/>
    </View>
  );
  }
