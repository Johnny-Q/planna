import { List, ListItem, Text, Flex, Center, Box } from '@chakra-ui/react';
import TodoItem from "./TodoItem"
import VertLine from "./VertLine";
const TodoList = ({ title, subtitle }) => {
    return (
        <>
            <Flex>
                <Center mr={1}>
                    <VertLine width={1} color="green" />
                    <VertLine width={1} color="tomato" />
                </Center>
                <Box>
                    <Text fontSize="xl">{title}</Text>
                    <Text fontSize="small">{subtitle}</Text>
                </Box>
            </Flex>
            <List>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </List>
        </>
    )
}

export default TodoList;
