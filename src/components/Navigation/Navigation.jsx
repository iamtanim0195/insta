import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
    return (
        <Box>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    display: { xs: 'none', sm: 'flex' }
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <List>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <Box>
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
                        </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </Box>
    );
}