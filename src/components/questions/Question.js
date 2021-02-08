import React from 'react';
import { AspectRatio, Box, Center, Stack, Text } from "@chakra-ui/react";

const Question = () => {
    return (
        <AspectRatio ratio={1 / 1} position="relative">
            <Box w="100%" h="100%" bg="white" /*border="1px solid gray"*/ p={50}>
                <Text position="absolute" top={1} left={2}>due month</Text>
                <Text position="absolute" top={1} right={2}>due time</Text>
                <Stack w="100%" direction="column" spacing={0}>
                    <Text noOfLines={1} textAlign="left" fontSize="3xl">Question</Text>
                    <Text noOfLines={1} textAlign="left" fontSize="sm">Student Name</Text>
                </Stack>
            </Box>
        </AspectRatio>
    )
}

export default Question
