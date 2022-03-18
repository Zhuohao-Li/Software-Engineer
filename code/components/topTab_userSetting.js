import React from 'react';
import { View } from 'react-native';
import {Hello} from '../View/hello'

class UserTab extends React.Component {
    render() {
        const tabs = [
            { title: '我的设置' },
            { title: '修改资料' },
        ];


        return (
            <View style={{ flex: 1 }}>
                <Hello/>

            </View>
        );
    }
}
export default UserTab;
export const title = 'Tabs';
export const description = 'Tabs example';
