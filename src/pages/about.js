import React, { useCallback, useState } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link'
import { MainLayout } from '../components/MainLayout';
import Todos from '../components/Todos';
export default function About() {
    const [todos, setTodos] = useState(['Go To School'])
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        console.log('handleIncrement is recreated')
        setCount(prev => prev + 1)
    }
    const handleAddTodos = useCallback((data) => {
        console.log("Handle Adding Todos is recreated");
        setTodos(prev => [...prev, data]);
    }, [todos])
    return (
        <Box sx={{
            py: 8
        }}>
            <Container>
                <Typography sx={{
                    mb: 4,
                    fontSize: 24
                }}>Using CallBack</Typography>
                <Typography>Count is {count} </Typography>
                <Box>
                    <Button variant="contained" onClick={handleIncrement}>INCREMENT</Button>
                    </Box>
                    <Todos todos={todos} handleAddTodos={handleAddTodos}/>
                <Box sx={{
                    my: 8
                }}>
                    <Link href="/">Go Back</Link>
                </Box>
            </Container>

        </Box>
    )
}

About.getLayout = (page) => <MainLayout>{page}</MainLayout>