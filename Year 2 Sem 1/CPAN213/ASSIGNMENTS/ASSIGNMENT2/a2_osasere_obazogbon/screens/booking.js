import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { addBooking } from "../redux/actions";

const roomData = [
  { roomNumber: "A101", capacity: 5, available: true },
  { roomNumber: "A102", capacity: 10, available: false },
  { roomNumber: "A103", capacity: 8, available: false },
  { roomNumber: "A104", capacity: 10, available: true },
  { roomNumber: "A105", capacity: 7, available: true },
];

const Booking = ({ route, navigation }) => {
  const { selectedRoom, people, name } = route.params;
 
  const dispatch = useDispatch();
  const room = roomData.find((r) => r.roomNumber === selectedRoom);

  let message = "Room is not available";
  let canBook = false;

  if (room && room.available && room.capacity >= parseInt(people)) {
    message = "Room is available!";
    canBook = true;
  } else if (room && room.available) {
    message = `Room is available but can only accommodate up to ${room.capacity} people.`;
  }

  const handleBooking = () => {
    if (canBook) {
      dispatch(addBooking({ roomNumber: selectedRoom, people, name}));
      alert("Room booked!");
      navigation.navigate("RoomList");
    }
  };



  return (
    <View style={styles.container}>
      <Text style={styles.result}>{message}</Text>
     

        <View style={styles.buttonContainer}>

          {canBook && (
            <Button title="Book Room" onPress={handleBooking} color="white"/>
          )}
            <Button 
              title="Back to Dashboard"
              onPress={() => navigation.navigate("Dashboard")}color= "white" />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  result: { 
    fontSize: 20, 
    marginBottom: 20, 
    fontWeight: "bold" 
},
buttonContainer: {
    marginTop: 10,
    width: '80%', 
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#7B0323',
},
});

export default Booking;
