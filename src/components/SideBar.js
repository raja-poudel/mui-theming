import { Typography, Box, Drawer } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const SideBar = ({ open, closeSideBar }) => {
    const handleClose = () => {
        closeSideBar();
    }
    if (!open) return;
    return (
        <Drawer
            anchor="left"
            open={open}
            PaperProps={{ sx: { width: 256 } }}
            sx={{
                zIndex: 1200
            }}
        >

            <Box sx={{my: 8}}>
                <Typography onClick={handleClose}>Home</Typography>
                <Typography onClick={handleClose}>About</Typography>
                <Typography onClick={handleClose}>Contact</Typography>
            </Box>
        </Drawer>
    )
}