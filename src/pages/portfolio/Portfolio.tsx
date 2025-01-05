import Grid from "@mui/material/Grid2";
import "./portfolio.css";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grow,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Container className="section pb_45 pt_45">
      <Grid className="section_title mb_20">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>
      <Grid size={{ xs: 12 }} className="mb_20">
        <Tabs
          value={tabValue}
          indicatorColor="secondary"
          className="customTabs"
          onChange={(e, newValue) => setTabValue(newValue)}
        >
          <Tab
            label="All"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(resumeData.projects.map((item) => item.tag))].map(
            (tag) => (
              <Tab
                label={tag}
                value={tag}
                className={
                  tabValue === tag
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Grid container spacing={2}>
          {resumeData.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid key={project.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent>
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customCard_description"
                          >
                            {project.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={projectDialog}
        onClose={() => setProjectDialog(false)}
        className="projectDialog"
      >
        <DialogTitle>{projectDialog.title}</DialogTitle>
        <img src={projectDialog.image} alt="" className="projectDialog_image" />
        <DialogContent>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>
        <DialogActions className="projectDialog_actions">
          {projectDialog?.links?.map((link: { link: string | undefined }) => (
            <a href={link.link} target="_blank" className="projectDialog_icon">
              {link.icon}
            </a>
          ))}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Portfolio;
