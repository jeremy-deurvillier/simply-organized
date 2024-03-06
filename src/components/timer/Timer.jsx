import { Box, IconButton, Flex, Strong, Text } from '@radix-ui/themes';
import { FaCheck, FaPlay, FaPencil } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getActivityById } from '../../features/ProjectsSlice';
import './Timer.css';

export default function Timer() {
    const { id } = useParams();
    const dispatch = useDispatch()
    const activity = dispatch(getActivityById(id));
    const [pomodoriElements, setPomodoriElements] = useState([]);
console.log(activity);
    const pomodoriList = () => {
        const pomodori = [1].map(
            p => <Box key={p} width='3' height='3' />
        );

        setPomodoriElements(pomodori);
    }

    useEffect(() => {
        pomodoriList();
    }, []);

    return (
        <Flex direction='column' justify='center' align='center' p='2' gap='3' className='pomodoro'>
            <Box className='pomodoriList'>
                {pomodoriElements}
            </Box>
            <Box className='activityInfo'>
                <Flex>
                    <Text>{activity && activity.name}</Text>
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
                        <Text>Note rapide</Text>
                    </Box>
                    <FaPencil />
                </Flex>
            </Box>
        </Flex>
    );
};
