import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Dashboard = ({ navigation }) => {
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");
  const [selectedRoom, setSelectedRoom] = useState("A101");

  const handleBooking = () => {
    if (!studentId || !name || !people) {
      alert("All fields are required!");
      return;
    }
    if (isNaN(people) || parseInt(people) <= 0) {
      alert("Please enter a valid number of people.");
      return;
    }
    navigation.navigate("Booking", { studentId, name, people, selectedRoom });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Book A Study Room</Text>
      <TextInput
        placeholder="Student ID"
        style={styles.input}
        value={studentId}
        onChangeText={setStudentId}
        returnKeyType="done"
      />
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
        returnKeyType="done"
      />
      <TextInput
        placeholder="Number of People"
        style={styles.input}
        keyboardType="numeric"
        value={people}
        onChangeText={setPeople}
        returnKeyType="done"
      />

      <Picker
        selectedValue={selectedRoom}
        onValueChange={(itemValue) => setSelectedRoom(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Room A101" value="A101" />
        <Picker.Item label="Room A102" value="A102" />
        <Picker.Item label="Room A103" value="A103" />
        <Picker.Item label="Room A104" value="A104" />
        <Picker.Item label="Room A105" value="A105" />
      </Picker>


      <View style={styles.buttonWrapper}>
        <View style={styles.buttonContainer}>
            <Button
            title="Check Availability"
            onPress={handleBooking}
            color="white"
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button
            title="View My Booking"
            onPress={() => navigation.navigate("RoomList")}
            color="white"
            />
        </View>

        <View style={styles.buttonContainer}>
            <Button
            title="Logout"
            onPress={() => navigation.replace("Sign In")}
            color="white"
            />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
   
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  picker: {
    height: 400,
    width: "100%",
    marginBottom: 10,
  },

  buttonWrapper: {
    alignItems: "center",
  },

  buttonContainer: {
    marginTop: 10,
    width: "80%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#7B0323",
  },
});

export default Dashboard;
