import { Box, IconButton, Button, Flex, Strong, Text } from '@radix-ui/themes'
import { FaCheck, FaPlay, FaPencil, FaNoteSticky } from 'react-icons/fa6'
import './Timer.css'

export default function Timer() {
    return (
        <Flex direction='column' justify='center' align='center' p='2' gap='6' className='pomodoro'>
            <Box className='pomodoriList'>
                {
                    [1].map(
                        p => <Box key={p} width='3' height='3' />
                    )
                }
            </Box>
            <Box className='activityInfo'>
                <Flex>
                    <Text>Mon titre 1</Text>
                    <IconButton variant='ghost'>
                        <FaCheck />
                    </IconButton>
                </Flex>
            </Box>
            <Flex justify='center' align='center' className='timer'>
                <Text>
                    <Strong>25:00</Strong>
                </Text>
            </Flex>
            <Box className='playPause'>
                <IconButton variant='outline' radius='full'>
                    <FaPlay />
                </IconButton>
            </Box>
            <Box className='quicknotes'>
                <Flex>
                    <Box>
                        <FaPencil />
                        <Text>Note rapide</Text>
                    </Box>
                    <FaNoteSticky />
                </Flex>
            </Box>
        </Flex>
    )
}
