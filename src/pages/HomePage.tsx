import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CssBaseline,
  Paper,
  Alert,
} from "@mui/material";
import axios from "axios";

const HomePage: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await axios.post("http://31.28.27.102:5000/api/send-phone", {
        name,
        phone,
      });
      setSuccess(true);
      setName("");
      setPhone("");
    } catch (err) {
      setError(
        "Произошла ошибка при отправке формы. Пожалуйста, попробуйте позже."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src="/images/17.jpg" // Путь от public/
        alt="Фоновое изображение"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(0.7)", // Затемнение для лучшей читаемости текста
        }}
      />
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{
            my: 4,

            color: "white",
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom align="center">
            Бесплатная консультация
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            align="center"
            sx={{ mt: 4 }}
          >
            Оставьте свои контакты, и мы свяжемся с вами
          </Typography>

          <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField
                  label="Ваше имя"
                  variant="outlined"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <TextField
                  label="Ваш телефон"
                  variant="outlined"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  type="tel"
                />

                {success && (
                  <Alert severity="success">
                    Спасибо! Мы свяжемся с вами в ближайшее время.
                  </Alert>
                )}
                {error && <Alert severity="error">{error}</Alert>}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{ mt: 2 }}
                >
                  {loading ? "Отправка..." : "Отправить"}
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
