import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import icon from "../images/icon (2).png";

const reviews = [
  { name: "Lola", text: "¡Un restaurante asombroso! ¡Volveré!" },
  { name: "Tiziana", text: "¡Muy buen lugar!" },
  { name: "Federico", text: "¡Muy recomendado!" },
];

export default function Review() {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    direction: 'forward', 
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="reseñas" sx={{ padding: 4, backgroundColor: "#0c0b09" }}>
      <Typography
        variant="h4"
        align="center"
        fontFamily={"Playfair Display, Georgia, Times New Roman, Times, serif"}
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: 6, color: "#ffffff" }}
      >
        Reseñas de algunos clientes
      </Typography>

      {isMobile ? (
          <div
            className="embla"
            ref={emblaRef}
            style={{
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <div
              className="embla__container"
              style={{
                display: 'flex',
                color: 'white',
                gap: '1rem',
                transition: 'transform 0.3s ease',
              }}
            >
              {reviews.map((user, index) => (
                <div
                  className="embla__slide"
                  key={index}
                  style={{
                    flex: '0 0 80%',
                    minWidth: 0,
                    padding: '1rem',
                    boxSizing: 'border-box',
                    textAlign: 'center',
                    backgroundColor: '#0a0a0a',
                    borderRadius: '1rem',
                    border: '1px solid #242424',
                  }}
                >
                  <img src={icon} alt={user.name} style={{ width: 60, height: 60, marginBottom: 12 }} />
                  <h3 style={{ margin: 0, marginBottom: 8 }}>{user.name}</h3>
                  <p style={{ margin: 0 }}>{user.text}</p>
                </div>
              ))}
            </div>
          </div>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {reviews.map((user, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  width: 300,
                  height: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 2,
                  borderRadius: 4,
                  boxShadow: 3,
                  backgroundColor: "black",
                  border: '1px solid #242424',
                }}
              >
                <Avatar src={icon} alt={user.name} sx={{ width: 90, height: 90, marginBottom: 2 }} />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom color="gray">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="white">
                    {user.text}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
