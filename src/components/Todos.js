import React, { memo } from 'react';
import { Box, Typography, Button } from '@mui/material'
const Todos = ({ todos, handleAddTodos }) => {
    console.log("Todos Component is recreated");
    return (
        todos.length > 0 ?
            todos.map((todo, index) => {
                return (<Box
                    key={index}
                    sx={{
                        mt: 2,
                        padding: 8,
                        borderRadius: 10,
                    }}>
                    <Typography>{index + 1}. {todo}</Typography>

                    <Button onClick={() => handleAddTodos("Home")}>Add Todos</Button>
                </Box>)
            })
            : null
    )
}

export default memo(Todos)