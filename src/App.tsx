import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavMenu } from "./components/NavMenu";
import HomePage from "./pages/HomePage";
import { Container } from "@mui/material";
import Cases from "./pages/Cases";

function App() {
  return (
    <Router>
      <NavMenu />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/contacts" element={<Cases />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
