import * as React from 'react';
import {Button, View, Center, Heading, HStack, Spinner, Text} from "native-base";

const Loading = () => {
    return (
        <Center h="full" space={4}>

        <HStack space={2} alignItems="center">
                <Spinner accessibilityLabel="Loading posts" size="lg" />
                <Heading color="primary.500" fontSize="lg">
                    Loading
                </Heading>
            </HStack>
        </Center>
    );
}

export default Loading;
