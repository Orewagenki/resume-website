import { Container, Typography } from "@mui/material";
import "./Resume.css";
import Grid from "@mui/material/Grid2";
import resumeData from "../../utils/resumeData";

const Resume = () => {
  return (
    <>
      <Container className="section pb_45">
        <Grid className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About me</h6>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Container>
      <Container>
        <Grid></Grid>
      </Container>
      <Container>
        <Grid></Grid>
      </Container>
      <Container>
        <Grid></Grid>
      </Container>
    </>
  );
};

export default Resume;
