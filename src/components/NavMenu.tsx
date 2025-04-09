import { AppBar, Toolbar, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NavMenu = () => {
  const location = useLocation();
  return (
    <AppBar position="static" sx={{ mb: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", gap: 1 }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{
                fontWeight: location.pathname === "/" ? "bold" : "normal",
                borderBottom:
                  location.pathname === "/" ? "2px solid white" : "none",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Главная
            </Button>
            <Button
              component={Link}
              to="/cases"
              color="inherit"
              sx={{
                fontWeight: location.pathname === "/cases" ? "bold" : "normal",
                borderBottom:
                  location.pathname === "/cases" ? "2px solid white" : "none",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Дела
            </Button>
            <Button
              component={Link}
              to="/contacts"
              color="inherit"
              sx={{
                fontWeight:
                  location.pathname === "/contacts" ? "bold" : "normal", // <-- Вот здесь
                borderBottom:
                  location.pathname === "/contacts"
                    ? "2px solid white"
                    : "none",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
              }}
            >
              Контакты
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
