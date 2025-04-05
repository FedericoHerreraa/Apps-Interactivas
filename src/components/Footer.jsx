import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  LocationOn
} from '@mui/icons-material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#000',
        color: '#fff',
        py: 6,
        fontFamily: "'Georgia', serif"
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={6}
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          {/* Location */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#cda45e' }}>
              Location
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap={1}
              mb={2}
            >
              <LocationOn fontSize="small" />
              <Typography variant="body2">
                Av Libertador 1560, Buenos Aires
              </Typography>
            </Box>
          </Grid>

          {/* Enlaces */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#cda45e' }}>
              Enlaces
            </Typography>
            <Box display="flex" flexDirection="column" gap={0.5}>
              <Link href="#" underline="hover" color="inherit">
                Inicio
              </Link>
              <Link href="#menuSection" underline="hover" color="inherit">
                Menu
              </Link>
            </Box>
          </Grid>

          {/* Redes sociales */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#cda45e' }}>
              Redes
            </Typography>
            <Box display="flex" justifyContent="center" gap={1} mt={1}>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <Facebook />
              </IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <Twitter />
              </IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <LinkedIn />
              </IconButton>
              <IconButton href="#" sx={{ color: '#fff' }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Pie inferior */}
        <Box mt={5}>
          <Typography
            variant="body2"
            color="gray"
            align="center"
            sx={{ fontSize: { xs: '12px', sm: '14px' } }}
          >
            © {new Date().getFullYear()} LAtelierGourmet — Todos los derechos reservados
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
