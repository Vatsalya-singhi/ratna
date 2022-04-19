import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
    name: "notification",
    initialState: { notification: null },
    reducers: {
        showNotification(state, action) {
            let notification: any = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            }
            state.notification = notification;
        }
    }
})

export const notificationAction = notificationSlice.actions;
export default notificationSlice;