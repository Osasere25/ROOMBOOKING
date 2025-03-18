
import { ADD_BOOKING, DELETE_BOOKING} from "../actionTypes";

const initialState = {
    bookings:[]
     
    
};

const bookingReducer = (state = initialState, action) => {
    console.log(`Action received: ${action.type}`);
    console.log (`Payload: ${JSON.stringify(action.payload)}`);

    switch (action.type) {
        case ADD_BOOKING:
            return {
                ...state,
                bookings: [...state.bookings, action.payload],
            };
        case DELETE_BOOKING:
            return {
                ...state,
                bookings: state.bookings.filter((booking) => booking.id !== action.payload),
            };

        default:
            return state;
    }
};

export default bookingReducer;

