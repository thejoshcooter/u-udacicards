import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Alert } from 'react-native'

export const testNotification = () => {
    PushNotificationIOS.addNotificationRequest({
        id: `${Math.random() * 1000}`,
        title: 'Testing!',
        body: 'You have successfully sent a test notification.'
    })
}

export const testFutureNotification = () => {
    PushNotificationIOS.addNotificationRequest({
        id: `${Math.random() * 1000}`,
        title: 'Testing',
        body: 'Testing a future notification',
        fireDate: new Date(Date.now() + (1000 * 1000))
    })
}

export const removePerms = () => {
    console.log('abandon perms')
    PushNotificationIOS.abandonPermissions()
}

export const requestPerms = () => {
    PushNotificationIOS.requestPermissions()
}

export const checkPerms = () => {
    PushNotificationIOS.checkPermissions((res) => {
        Alert.alert('Authorized Permissions', `Alert: ${res.alert}, AuthStatus: ${res.authorizationStatus}, Badge: ${res.badge}, Lock Screen: ${res.lockScreen}, Sound: ${res.sound}`)
    })
}

export const checkScheduledNotifications = () => {
    PushNotificationIOS.getScheduledLocalNotifications((res) => {
        console.log(res)
    })
}

export const clearScheduledNotifications = () => {
    PushNotificationIOS.cancelAllLocalNotifications()
}