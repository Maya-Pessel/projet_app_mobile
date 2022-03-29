import * as React from 'react';
import { Center, Heading, HStack, Spinner } from "native-base";

const Loading = ({loadingMessage="Chargement"}) => {
    return (
        <Center position="absolute" top={0} bottom={0} right={0} left={0} zIndex={999} space={4} shadow="3">
            <HStack space={2} alignItems="center">
                <Spinner accessibilityLabel="Loading posts" color={"primary.500"} size="lg" />
                <Heading color="primary.500" fontSize="lg">
                    {loadingMessage}
                </Heading>
            </HStack>
        </Center>
    );
}

export default Loading;
