import React from "react";
import { Card, CardContent, Typography, Avatar, Grid, Box, useTheme, useMediaQuery } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import icon from "../images/icon (2).png";
const reviews = [
  { name: "Lola", text: "¡Un restaurante asombroso! ¡Volveré!" },
  { name: "Tiziana", text: "¡Muy buen lugar!" },
  { name: "Federico", text: "¡Muy recomendado!" },
];

export default function Review() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box id="reseñas" sx={{ padding: 4, backgroundColor: "#0c0b09" }}>
      {/* Título de la sección */}
      <Typography
        variant="h4"
        align="center"
        fontFamily={"Playfair Display, Georgia, Times New Roman, Times, serif"}
        gutterBottom
        sx={{ fontWeight: "bold", marginBottom: 6, color: "#ffffff" }}
      >
        Reseñas
      </Typography>

      {isMobile ? (
        // Mobile: CARRUSEL
        <SwipeableViews enableMouseEvents>
          {reviews.map((user, index) => (
            <Box key={index} sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
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
                  backgroundColor: "white",
                }}
              >
                <Avatar src={icon} alt={user.name} sx={{ width: 90, height: 90, marginBottom: 2 }} />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.text}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </SwipeableViews>
      ) : (
        // Desktop: Grid
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
                  backgroundColor: "white",
                }}
              >
                <Avatar src={icon} alt={user.name} sx={{ width: 90, height: 90, marginBottom: 2 }} />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" gutterBottom>
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
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
