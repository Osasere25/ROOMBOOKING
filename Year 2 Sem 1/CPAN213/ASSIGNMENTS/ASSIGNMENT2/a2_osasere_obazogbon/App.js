import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { StyleSheet, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "./screens/signIn";
import Dashboard from "./screens/dashboard";
import Booking from "./screens/booking";
import RoomList from "./screens/roomListScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Stack = createNativeStackNavigator();

export default function App() {
  const headerOptions = ({ route, navigation }) => ({
    headerStyle: { backgroundColor: "#7B0323" },
    headerTintColor: "white",
    headerTitleAlign: "center",
    headerTitleStyle: { fontWeight: "bold" },
    headerRight: () => (
      <Pressable onPress={() => navigation.replace("Sign In")}>
        <Icon name="logout" size={24} color="white" />
      </Pressable>
    ),
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Sign In">
          <Stack.Group screenOptions={headerOptions}>
            <Stack.Screen
              name="Sign In"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Booking" component={Booking} />
            <Stack.Screen name="RoomList" component={RoomList} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
