import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import { List, SearchBar, TabBar, Provider } from '@ant-design/react-native';
import Icon from 'react-native-vector-icons/AntDesign'

export const Hello = () => {
    const id = "1234567";
    const gender = "喵星人";
    const loca = "未填写";
    const birthday = "未填写";
    const school = "未填写";
    const conste = "未填写";
    return (
      <Provider>
    <ScrollView>
        <View
            style={{height: 105,backgroundColor:'white',flexDirection:"row"}}
        >
            <View
                style={{width:'25%',alignItems:'center'}}
            >
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 80, height: 80, marginTop:13 }}
                />
            </View>
            <View
               style={{width:'60%'}}
            >
                <Text
                    style={{marginTop:20,color:'darkslategrey'}}
                > 流泪猫猫头 </Text>
                <Text
                    style={{marginTop:5, color:'grey'}}
                > ID 1234567 / <Text style={{color:'steelblue'}}>LVL 9</Text>
                </Text>
            </View>
            <View
                style={{width:'15%'}}
            >
                <Icon name={"right"} style={{color: "grey", marginTop:40}} size={15}/>
            </View>

        </View>
        <View
            style={{width:"92%", height:80,backgroundColor:'whitesmoke',borderColor:'black',borderRadius:10,marginLeft:"4%",marginTop:0,flexDirection:"row"}}
        >
            <View
                style={{justifyContent: 'center',width:'33%',alignItems:'center'}}
            >
                <Text style={{color:'steelblue'}}
                >1</Text>
                <Text
                    style={{color:'grey',fontSize:13}}
                >
                    输入语料
                </Text>
            </View>
            <View style={{justifyContent: 'center',width:'34%',alignItems:'center'}}
            >
                <Text style={{color:'steelblue'}}
                >1</Text>
                <Text
                    style={{color:'grey',fontSize:13}}
                >
                    输出语料
                </Text>
            </View>
            <View style={{justifyContent: 'center',width:'33%',alignItems:'center'}}
            >
                <Text style={{color:'steelblue'}}
                >1</Text>
                <Text
                    style={{color:'grey',fontSize:13}}
                >
                    连续签到
                </Text>
            </View>
        </View>
        <List renderHeader={'个人资料'}
              style={{marginTop:20}}>
            <View style={{height:13,backgroundColor:'whitesmoke'}}>
                <Text> </Text>
            </View>
            <List.Item style={{height: 50,justifyContent: 'center'}}>
                <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{width:"15%"}}>
                        <Text style={{color:'black'}}>昵称</Text>
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{color:'grey'}}>流泪猫猫头</Text>
                    </View>
                    <View
                        style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                    >
                        <Icon name={"right"} style={{color: "grey"}} size={15}/>
                    </View>
                </View>
            </List.Item>
            <List.Item style={{height: 50 ,justifyContent: 'center'}}>
                <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{width:"15%"}}>
                        <Text style={{color:'black'}}>邮箱</Text>
                    </View>
                    <View style={{width:"70%"}}>
                        <Text style={{color:'darkred'}}>未绑定</Text>
                    </View>
                    <View
                        style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                    >
                        <Icon name={"right"} style={{color: "grey"}} size={15}/>
                    </View>
                </View>
            </List.Item>
        </List>        
        <List style={{marginTop:20}}>
            <View style={{height:13,backgroundColor:'whitesmoke'}}>
                <Text> </Text>
            </View>
            <List.Item style={{height: 50,justifyContent: 'center'}}>
                <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{width:"30%"}}>
                        <Text style={{color:'black'}}>修改密码</Text>
                    </View>
                    <View style={{width:"55%"}}>
                        <Text style={{color:'grey'}}></Text>
                    </View>
                    <View
                        style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                    >
                        <Icon name={"right"} style={{color: "grey"}} size={15}/>
                    </View>
                </View>
            </List.Item>
            <List.Item style={{height: 50,justifyContent: 'center'}}>
                <View style={{flexDirection:"row",alignItems: 'center',justifyContent: 'center'}}>
                    <View style={{width:"30%"}}>
                        <Text style={{color:'black'}}>退出登录</Text>
                    </View>
                    <View style={{width:"55%"}}>
                        <Text style={{color:'grey'}}></Text>
                    </View>
                    <View
                        style={{width:'15%',alignItems: 'center',justifyContent: 'center'}}
                    >
                        <Icon name={"right"} style={{color: "grey"}} size={15}/>
                    </View>
                </View>
            </List.Item>
        </List>
    </ScrollView>
    </Provider>
  );
};