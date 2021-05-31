import PushNotificationIOS from '@react-native-community/push-notification-ios'
import { Alert, AsyncStorage } from 'react-native'

// helpers
const getShortDelayTime = () => {
    return new Date(Date.now() + (5 * 1000))
}

const getLongDelayTime = () => {
    return new Date(Date.now() + (60 * 60 * 1000))
}

const getNextReminderTime = () => {
    return new Date(Date.now() + (60 * 60 * 24 * 1000))
}

const getNextTestTime = () => {
    return new Date(Date.now() + (60 * 1000))
}

const generateReminderId = () => {
    return Math.round(Math.random() * 100000)
}

// notification api
export const getInitialAppPermissions = () => {
    PushNotificationIOS.checkPermissions(res => {
        if (!res.authorizationStatus > 0) {
            PushNotificationIOS.requestPermissions()
            .then(res => {
                console.log('promise res: ', res)
                scheduleNotification()
            })
            .catch(e => console.error(e))
        }
    })
}


export const testNotification = () => {
    PushNotificationIOS.addNotificationRequest({
        id: '1',
        title: 'Test Notification',
        body: 'You have successfully tested a notification!',
        fireDate: getShortDelayTime()
    })
}

export const testFutureNotification = () => {
    PushNotificationIOS.addNotificationRequest({
        id: `${Math.random() * 1000}`,
        title: 'Test Notification',
        body: 'You have successfully tested a notification!',
        fireDate: getLongDelayTime()
    })
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
        let quantity = res.length
        Alert.alert('Scheduled Notifications', `You currently have ${quantity} scheduled notifications.`)
    })
}

export const clearScheduledNotifications = () => {
    PushNotificationIOS.cancelAllLocalNotifications()
    Alert.alert('Notifications Cleared', 'You have successfully cleared ALL pending notifications')
}

export const scheduleNotification = async () => {
    PushNotificationIOS.getScheduledLocalNotifications((res) => {
        console.log('[scheduled notifications]', res)
        if (res.length === 0) {
            console.log('new reminder notification scheduled for: ', getNextTestTime())
            PushNotificationIOS.addNotificationRequest({
                id: `${generateReminderId()}`,
                title: 'Daily quiz reminder!',
                body: 'Remember to take your daily quiz!',
                fireDate: getNextTestTime()
            })
        }
    })
}

export const scheduleNextQuizReminder = () => {
    PushNotificationIOS.cancelAllLocalNotifications()
    console.log('old reminder notifications cancelled')
    scheduleNotification()
}