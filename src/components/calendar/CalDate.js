import { Box, Text, IconButton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons";
import TodoList from "./todo/TodoList";

const CalDate = ({ dayOfWeek, dateNum, isToday }) => {
    let header = <></>;
    // header
    if (dayOfWeek) {
        header = <>
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
        </>;
    }

    return (
        <Box w="100%" h="100%" p={4} border="1px solid black;" position="relative">
            {header}
            <TodoList title="Computer Science" subtitle="MYP Cohort B"/>
            <TodoList title="Computer Science" subtitle="MYP Cohort B"/>
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
