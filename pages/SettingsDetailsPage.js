import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Text} from 'native-base';
import CustomHeader from "../components/CustomHeader";

const SettingsDetailsPage = props => {
    return (
        <View style={{flex: 1}}>
            <CustomHeader title='Settings Details' isHome={false} navigation={props.navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SettingsDetailsPage;
