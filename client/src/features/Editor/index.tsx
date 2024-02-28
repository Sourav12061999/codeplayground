import { Flex } from '@mantine/core';
import Folders from './Folder';
import Code from './Code';
import Output from './Output';
function Editor() {
    return (
        <Flex>
            <Folders />
            <Code />
            <Output />
        </Flex>
    )
}

export default Editor