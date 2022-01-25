import React, { Component } from "react";
import { Alert, StyleSheet } from "react-native";
import { Header, Button, Title, Left, Right, Body, Icon, Pressable } from "native-base";
import ROUTES from "../routes";

const NavigationBar = ({ navigation }) => {
    return (
        <HStack>
            <Pressable onPress={() => navigation.navigate(ROUTES.MESSAGE)}>
                <Text>Message</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text>Home</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate(ROUTES.PROFILE)}>
                <Text>Profile</Text>
            </Pressable>
        </HStack>
    );
}

export default NavigationBar;