import React, { useState, useCallback } from 'react'
import { Box, Typography, Button } from '@mui/material';
import { MainLayout } from '../components/MainLayout';
import Link from 'next/link';

export default function Index({ setMode, mode }) {
  const [open, setOpen] = useState(false);
  const handleChange = useCallback((e) => {
    console.log("handle change is called.");
    setMode(e.target.value);
  }, [mode])
  // const handleChangeOpen = useCallback(() => {
  //   console.log("Open is changed")
  //   setOpen(prev => !prev);
  // }, [open])
  
  const handleChangeOpen = () => {
    console.log("Open is changed")
    setOpen(prev => !prev);
  };
  return (
    <Box sx={{
      py: 8,

    }}>
      <Typography as="h1">Customizing Mui Theme</Typography>
      <Typography color="primary.dark">Hello I am changing</Typography>
      <Typography color="secondary.dark">Hello Color Change</Typography>
      <Typography color="warning.dark">Warning Message Color Will Be applied here.</Typography>
      <Link href="/about">Go To About Page</Link>
      <Box>
        <Button onClick={handleChangeOpen}>Manipulate State</Button>
      </Box>
      <select onChange={handleChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </Box>
  )
}

Index.getLayout = (page) => <MainLayout>{page}</MainLayout>