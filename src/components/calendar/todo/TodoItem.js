import { Center, ListItem, ListIcon, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const TodoItem = () => {
    return <ListItem display="flex">
        <Center pl={1} pr={3}>
            {/* <ListIcon as={ChevronRightIcon} /> */}
            <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="3.5" r="3.5" fill="#4F4F4F" />
            </svg>
        </Center>
        <Text lineHeight="1.35" noOfLines={2} isTruncated>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
        </Text>
    </ListItem>
}

export default TodoItem;
