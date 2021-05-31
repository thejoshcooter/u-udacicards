import * as React from 'react'
import styled from 'styled-components/native'
import { SafeAreaView, View, Text, TouchableOpacity, Alert } from 'react-native'
import { ORANGE } from '../../utils/colors'
import * as API from '../../../data/_data'
import * as notifs from '../../../utils/notifications'

const Storage = ({ navigation }) => {    
    return (
        <>
        <Container>
            <MenuItem onPress={() => notifs.testNotification()}><Text>Test Notification</Text></MenuItem>
            <MenuItem onPress={() => notifs.testFutureNotification()}><Text>Test Future Notification</Text></MenuItem>
            <MenuItem onPress={() => notifs.requestPerms()}><Text>Set Notification Permissions</Text></MenuItem>
            <MenuItem onPress={() => notifs.checkPerms()}><Text>Check Permissions</Text></MenuItem>
            <MenuItem onPress={() => notifs.checkScheduledNotifications()}><Text>Check Scheduled Notifications</Text></MenuItem>
            <MenuItem onPress={() => notifs.clearScheduledNotifications()}><Text>Clear Scheduled Notifications</Text></MenuItem>
            <MenuItem onPress={() => notifs.scheduleNotification()}><Text>Schedule Reminder</Text></MenuItem>
        </Container>
        </>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
`

const MenuItem = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 0.2);
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`

export default Storage