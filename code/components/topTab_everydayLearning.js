import React from 'react';
import { ScrollView, View } from 'react-native';
import { Tabs } from '@ant-design/react-native';
import {Learning} from '../View/learning'
import {Pure} from '../View/pure'
import Appy from '../View/essaysearch'


class BasicTab extends React.Component {
    render() {
        const tabs = [
            { title: '语篇阅读' },
            { title: '文献专区' },
        ];

        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}>
                    <ScrollView >
                        <Learning/>
                    </ScrollView>
                    <ScrollView>
                        <Appy/>
                    </ScrollView>

                </Tabs>

            </View>
        );
    }
}
export default BasicTab;
export const title = 'Tabs';
export const description = 'Tabs example';
