import React, { useEffect, useState } from 'react';
import { Box, Fade } from '@mui/material';

const IntroOverlay = () => {
  const [show, setShow] = useState(true);
  const [text, setText] = useState('');
  const fullText = "L'Atelier Gourmet";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        const nextChar = fullText.charAt(i);
        setText((prev) => {
          const updated = prev + nextChar;
          console.log("Typing:", updated); // Ver el progreso
          return updated;
        });
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Fade in={show} timeout={500}>
      <Box
        sx={{
          position: 'fixed',
          zIndex: 9999,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0c0b09',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <Box
        sx={{
            fontSize: { xs: '2rem', md: '4rem' },
            color: '#cda45e',
            fontWeight: 'bold',
            fontFamily: "'Playfair Display', Georgia, serif",
            textAlign: 'center',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap', 
            userSelect: 'none',
        }}
        >
        {text}
        </Box>

      </Box>
    </Fade>
  );
};

export default IntroOverlay;
