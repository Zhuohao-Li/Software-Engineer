import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    ScrollView,
} from "react-native";

const date = () => {
    return <Text style={styles.date_text}>{"2021.12.20 Monday  "}</Text>;
};

const topic = () => {
    return <Text style={styles.topic}>{"Topic: Multiculturalism "}</Text>;
};

const passage1 = () => {
    return (
        <Text style={styles.passage}>
            {
                "   Multiculturalism (cultural pluralism) refers to a mix of cultures and ethnicities within a particular place or nation-state. It can be understood as another way of speaking about multi-ethnic states, but also refers to government policies, particularly with respect to immigration. "
            }
        </Text>
    );
};

const passage2 = () => {
    return (
        <Text style={styles.passage}>
            {
                "   Given that populations are arguably more mobile now, multiculturalism continues to be an issue in the context of education, social cohesion and social welfare systems. "
            }
        </Text>
    );
};

const passage3 = () => {
    return (
        <Text style={styles.passage}>
            {
                '   Two phrases are often used to describe the United States of America as a multi-ethnic state. One is melting pot" and the other "salad bowl."'
            }
        </Text>
    );
};

export const Pure = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.date_box}>{date()}</View>
            <ScrollView style={styles.scroll}>
                <View style={styles.topic_box}>{topic()}</View>
                <View style={styles.passage_box}>{passage1()}</View>
                <View style={styles.passage_box}>{passage2()}</View>
                <View style={styles.passage_box}>{passage3()}</View>
            </ScrollView>
            <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnText}>核心词句</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    scroll: {
        backgroundColor: "whitesmoke",
    },
    date_box: {
        paddingHorizontal: 14,
        paddingTop: 8,
        paddingBottom: 8,
    },
    date_text: {
        color: "steelblue",
        fontSize: 20,
    },
    topic: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
    },
    topic_box: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingHorizontal: 14,
        backgroundColor:"white",
    },
    passage: {
        color: "black",
        fontSize: 15,
        lineHeight: 40,
    },
    passage_box: {
        backgroundColor: "aliceblue",
        paddingTop: 3,
        paddingBottom: 3,
        paddingHorizontal: 14,
    },
    btnStyle: {
        height: 30,
        width: 80,
        borderRadius: 5,
        marginTop: 7,
        marginBottom: 7,
        backgroundColor: 'rgba(79, 230, 148, 0.1)',
        justifyContent: 'center',
        alignSelf: "flex-end",
        marginRight: 10,
        borderColor: 'black',
        borderWidth: 1
    },
    btnText: {
        color: "black",
        fontSize: 17,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
});

