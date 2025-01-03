import { Container } from "@mui/material";
import "./Resume.css";
import Grid from "@mui/material/Grid2";

const Resume = () => {
  return (
    <>
      <Container className="about_me">
        <Grid container></Grid>
      </Container>
      <Container className="education_experience">
        <Grid container></Grid>
      </Container>
      <Container className="Skills">
        <Grid container></Grid>
      </Container>
      <Container className="Contact">
        <Grid container></Grid>
      </Container>
    </>
  );
};

export default Resume;
