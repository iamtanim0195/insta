import { Box, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
const Navigation = () => {
    return (
        <Box>
            <Typography
                variant='h4'
                sx={{ pt: 2 }}
            >insta</Typography>
            <Box
                sx={{ pt: 1 }}
                display="flex"
                gap={1}>
                <HomeIcon />
                <Typography
                >Home</Typography>
            </Box>
            <Box
                sx={{ pt: 1 }}
                display="flex"
                gap={1}>
                <SearchIcon />
                <Typography
                >Home</Typography>
            </Box>
            <Box
                sx={{ pt: 1 }}
                display="flex"
                gap={1}>
                <MessageIcon />
                <Typography
                >Home</Typography>
            </Box>
            <Box
                sx={{ pt: 1 }}
                display="flex"
                gap={1}>
                <PersonIcon />
                <Typography
                >Home</Typography>
            </Box>
        </Box>
    )
}

export default Navigation