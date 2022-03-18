import React from 'react';
import { Text, View } from 'react-native';
import {SearchBar, TabBar } from '@ant-design/react-native';
import {Hello} from '../View/hello'
import Page from '../View/writing'
import Appy from '../View/essaysearch'
import Icon from 'react-native-vector-icons/AntDesign'
import Pagex from '../View/explanation'
import BasicTabs from '../components/topTab_practice'
import BasicTab from '../components/topTab_everydayLearning'
import {Learning} from '../View/learning'
import WateringTab from '../components/topTab_wateringSquare'
import UserTab from '../components/topTab_userSetting'


class HomeTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }
    renderContent(pageText) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <SearchBar placeholder="Search" showCancelButton />
                <Text style={{ margin: 50 }}>{pageText}</Text>
            </View>
        );
    }
    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5"
            >
                <TabBar.Item
                    title="每日语汇"
                    icon={ <Icon style={{color:'grey'}} name={'pluscircleo'} size={20}/>}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => this.onChangeTab('blueTab')}
                >
                    <BasicTab/>
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon style={{color:'grey'}} name={'edit'} size={20}/>}
                    title="实战应用"
                    //badge={2}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => this.onChangeTab('redTab')}
                >
                    <BasicTabs/>
                </TabBar.Item>
                <TabBar.Item
                    icon={ <Icon style={{color:'grey'}} name={'staro'} size={20}/>}
                    title="学习记录"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => this.onChangeTab('greenTab')}
                >
                    <WateringTab/>
                </TabBar.Item>
                <TabBar.Item
                    icon={ <Icon style={{color:'grey'}} name={'user'} size={20}/>}
                    title="个人中心"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => this.onChangeTab('yellowTab')}
                >
                    <UserTab/>
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default HomeTab
