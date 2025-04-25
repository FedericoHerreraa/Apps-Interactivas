import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import gourmet from '../images/gourmet.jpeg';
import gourmet1 from '../images/gourmet1.jpeg';
import gourmet2 from '../images/gourmet2.jpeg';

const images = [
  { img: gourmet, title: 'Gourmet' },
  { img: gourmet1, title: 'Gourmet 1' },
  { img: gourmet2, title: 'Gourmet 2' },
];

const GalleryHoverZoom = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <h1 style={{ color: 'white', alignItems: 'start', fontFamily: 'Georgia' }}>Conoce nuestro espacio</h1>
      <p style={{ color: '#cda45e' }}>Un rincón donde el sabor y la elegancia se encuentran.</p>
      <div id='images'>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            overflow: 'hidden',
            py: 6,
            backgroundColor: '#0c0b09', 
          }}
        >
          <ImageList
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 6,
              m: 0,
              overflow: 'hidden',
            }}
          >
            {images.map((item) => (
              <ImageListItem key={item.img} sx={{ flexShrink: 0 }}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    flexShrink: 0, 
                    mx: { md: 5 }, 
                    mb: { xs: 4, md: 0 },
                    maxWidth: { xs: '100%', md: 600 },
                    height: 'auto',
                    borderRadius: 3,
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
};

export default GalleryHoverZoom;
