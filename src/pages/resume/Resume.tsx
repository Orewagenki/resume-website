import { Container, Typography } from "@mui/material";
import "./Resume.css";
import Grid from "@mui/material/Grid2";
import resumeData from "../../utils/resumeData";
import CustomTimeline from "../../components/timeline/CustomTimeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

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
        <Grid className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid container size={{ xs: 12 }} spacing={1}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomTimeline title={"Work Experience"} icon={<WorkIcon />}>
              {resumeData.experiences.map((experience) => (
                <TimelineItem>
                  <TimelineSeparator className="separator_padding">
                    <TimelineDot className="timeline_dot" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {experience.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {experience.date}
                    </Typography>
                    <Typography
                      variant={"body2"}
                      className="timeline_description"
                    >
                      {experience.descrition}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
          <Grid size="grow">
            <CustomTimeline title={"Work Experience"} icon={<SchoolIcon />}>
              {resumeData.education.map((experience) => (
                <TimelineItem>
                  <TimelineSeparator className="separator_padding">
                    <TimelineDot className="timeline_dot" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {experience.title}
                    </Typography>
                    <Typography className="timeline_date">
                      {experience.date}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
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
