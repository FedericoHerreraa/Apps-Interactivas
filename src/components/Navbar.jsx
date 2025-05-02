import { useState } from 'react';
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
  const [open, setOpen] = useState(false);

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
          <Typography
            variant="h4"
            color="white"
            component="div"
            sx={{
              fontFamily: 'inherit',
              fontSize: { xs: '1.4rem', sm: '2.125rem' }
            }}
          >
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
            transition: 'transform 0.4s ease, opacity 0.4s ease',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)',
            opacity: open ? 1 : 0.5,
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            color: '#cda45e',
            fontFamily: 'Playfair Display, Georgia, serif',
            fontWeight: 'bold',
            paddingX: 2,
            paddingTop: 4,
            textAlign: 'center',
            fontSize: '1.5rem',
            borderBottom: '1px solid #cda45e',
            paddingBottom: 2,
            marginBottom: 2
          }}
        >
          L'Atelier Gourmet
        </Typography>
        <List sx={{ padding: 2 }}>
          <ListItem
            button
            onClick={() => handleNavigation('menuSection')}
            sx={{
              backgroundColor: '#1a1a1a',
              marginBottom: 2,
              borderLeft: `1px solid #cda45e`,
              cursor: 'pointer',
              borderRight: `1px solid #cda45e`,
              '&:hover': { backgroundColor: '#947948', borderRadius: '5px' },
            }}
          >
            <ListItemText primary="Menu" sx={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation('reviews')}
            sx={{
              backgroundColor: '#1a1a1a',
              marginBottom: 2,
              borderLeft: `1px solid #cda45e`,
              cursor: 'pointer',
              borderRight: `1px solid #cda45e`,
              '&:hover': { backgroundColor: '#947948', borderRadius: '5px' },
            }}
          >
            <ListItemText primary="Reseñas" sx={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }} />
          </ListItem>
          <ListItem
            button
            onClick={() => handleNavigation('images')}
            sx={{
              backgroundColor: '#1a1a1a',
              marginBottom: 2,
              borderLeft: `1px solid #cda45e`,
              cursor: 'pointer',
              borderRight: `1px solid #cda45e`,
              '&:hover': { backgroundColor: '#947948', borderRadius: '5px' },
            }}
            style={{ marginBottom: 15 }}
          >
            <ListItemText primary="Conocenos" sx={{ color: 'white', fontSize: '1.2rem', textAlign: 'center' }} />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}