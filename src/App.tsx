import "./App.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
          <Profile />
        </Grid>
        <Grid size="grow" bgcolor="red">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </BrowserRouter>
          <Header /> <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
