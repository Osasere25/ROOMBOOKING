import React from "react";
import {View,Text, FlatList, Button, StyleSheet} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { deleteBooking } from "../redux/actions";

const RoomList = ({navigation}) => {
    const bookedRooms = useSelector((state) => state.bookings.bookedRooms);
    const dispatch = useDispatch();

    return(
        <View style ={styles.container}>
            <Text style={styles.title}>Booked Rooms</Text>
            {bookedRooms.length === 0 ? (
                <Text>No Bookings</Text>

            ) : (
                <FlatList
                data={bookedRooms}
                keyExtractor={(item) => item.roomNumber}
                renderItem={({item}) => (
                    <View style = {styles.roomContainer}>
                        <Text>{item.roomNumber} - {item.people} people</Text>
                        <Button title="Cancel" onPress={() => dispatch(deleteBooking (item.roomNumber))} color={red} />
                    </View>
                )}
                />
            )}
            <Button title="Back to Dashboard" onPress={() => navigation.navigate("Dashboard")} color = "white" />
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

  export default RoomList;