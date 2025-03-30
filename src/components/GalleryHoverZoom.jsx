import React from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';
import gourmet from '../Images/gourmet.jpeg';
import gourmet1 from '../Images/gourmet1.jpeg';
import gourmet2 from '../Images/gourmet2.jpeg';

const images = [
  { img: gourmet, title: 'Gourmet' },
  { img: gourmet1, title: 'Gourmet 1' },
  { img: gourmet2, title: 'Gourmet 2' },
];

const GalleryHoverZoom = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
      <ImageList
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2,
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
                maxWidth: { xs: '100%', md: 450 },
                height: 'auto',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GalleryHoverZoom;
