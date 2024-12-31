import "./App.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }} bgcolor="blue">
          <Profile />
        </Grid>
        <Grid size="grow" bgcolor="red">
          <Header /> <Portfolio /> <Resume /> <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
