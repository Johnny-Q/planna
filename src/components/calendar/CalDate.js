import { Box, Text, IconButton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons";

const CalDate = ({ dayOfWeek, dateNum, isToday }) => {
    let header = <></>;
    // header
    if (dayOfWeek) {
        header = 
        <>
            <Box>
                <Text
                    fontSize="xl"
                >{dayOfWeek}</Text>
                <Text
                    position="absolute"
                    top={1}
                    right={2}
                >{dateNum}</Text>
            </Box>
        </>
    }

    return (
        <Box w="100%" h="100%" p={4} border="1px solid black;" position="relative">
            {header}
            <IconButton
                position="absolute"
                bottom={1}
                right={1}
                isRound="true"
                icon={<AddIcon />}
            />
        </Box>
    )
}

export default CalDate
