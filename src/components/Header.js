import React, { useState} from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, FormControl, Select, MenuItem } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const Header = ({openSideBar }) => {
    const [ mode, setMode ] = useState('light');
    const handleChangeTheme = (e) => {
        setMode(e.target.value)
    }
    const handleOpenSideBar = () => {
        openSideBar();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton onClick={handleOpenSideBar}>
                        <Menu />
                    </IconButton>
                    <Typography sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <FormControl>
                        <Select sx={{border: 0}} value={mode} onChange={handleChangeTheme}>
                            <MenuItem value={"light"}>Light</MenuItem>
                            <MenuItem value={"dark"}>Dark</MenuItem>
                        </Select>
                    </FormControl>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}