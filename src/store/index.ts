import { configureStore } from '@reduxjs/toolkit';
import notificationSlice from './notification-slice';

const store = configureStore({
    reducer : {
        notification : notificationSlice.reducer
    }
})

export default store;