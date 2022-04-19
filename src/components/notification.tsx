import React from 'react'
import { Alert, AlertColor } from '@mui/material';

interface NotificationParams {
    severity: AlertColor,
    message: string
}

const Notification = ({ severity, message }: NotificationParams) => {
    return (
        <div>
            <Alert severity={severity}>
                {message}
            </Alert>
        </div>
    )
}

export default Notification;