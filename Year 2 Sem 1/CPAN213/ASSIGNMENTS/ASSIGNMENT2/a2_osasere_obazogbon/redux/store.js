import {configureStore} from "@reduxjs/toolkit";
import bookingReducer from "./reducers/bookingReducer";

const store = configureStore ({
    reducer:  bookingReducer
});

export default store;