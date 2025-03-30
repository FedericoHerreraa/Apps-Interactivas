import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(isOpen);
  };

  const handleNavigation = (section) => {
    setOpen(false);
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.62)', fontFamily: 'Playfair Display, Georgia, Times New Roman, Times, serif', marginTop: '15px' }}>
        <Toolbar variant="dense">
          <Typography variant="h4" color="white" component="div" sx={{ fontFamily: 'inherit' }}>
            L'Atelier Gourmet
          </Typography>
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu" 
            sx={{ ml: 'auto' }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
        <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                width: 280,
                transition: 'transform 0.3s ease-in-out',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                },
            }}
            >
            <h1 style={{ color: 'white', paddingLeft: 20, paddingTop: 20, fontSize: '30px' }}>L'Atelier Gourmet</h1>
            <List sx={{ padding: 2 }}>
                <ListItem
                    button
                    onClick={() => handleNavigation('home')}
                    sx={{
                        backgroundColor: '#444',
                        marginBottom: 1,
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: '#666' },
                }}
                >
                    <ListItemText primary="Home" sx={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }} />
                </ListItem>
                <ListItem
                    button
                    onClick={() => handleNavigation('menuSection')}
                    sx={{
                        backgroundColor: '#444',
                        borderRadius: '8px',
                        '&:hover': { backgroundColor: '#666' },
                    }}
                >
                    <ListItemText primary="Menu" sx={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }} />
                </ListItem>
            </List>
        </Drawer>
    </Box>
  );
}