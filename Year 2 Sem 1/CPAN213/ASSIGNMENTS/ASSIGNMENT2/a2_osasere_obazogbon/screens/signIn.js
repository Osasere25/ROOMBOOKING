import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const SignIn = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigation.navigate("Dashboard");
    } else {
      Alert.alert(
        "Invalid Credentials",
        "Please enter correct username and password."
      );
    }
  };

  return (
    <View style={styles.container}>
        <Text style = {styles.header}> BOOK A STUDY ROOM</Text>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        />
        <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />

        <View style={styles.buttonWrapper}>
            <View style={styles.buttonContainer}>
                <Button title='Login' onPress = {handleLogin} color= "white" />
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
    flex: 1, 
    justifyContent: "center", 
    padding: 20,
    backgroundColor:'pink'  
},
header:{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",

},
title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
input: {
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 10, 
    borderRadius: 5 
},
buttonWrapper: {
    alignItems: "center", 
},
buttonContainer: {
    marginTop: 10,
    width: '80%', 
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#7B0323',
},
});

export default SignIn;
