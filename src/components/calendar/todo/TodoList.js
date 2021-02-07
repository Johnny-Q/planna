import { List, ListItem, Text, Flex, Center } from '@chakra-ui/react';
import TodoItem from "./TodoItem"
import VertLine from "./VertLine";
const TodoList = () => {
    return (
        <>
            <Flex>
                <Center mr={1}>
                    <VertLine width={1} color="green"/>
                    <VertLine width={1} color="tomato"/>
                </Center>
                <Text>Computer Science</Text>
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
