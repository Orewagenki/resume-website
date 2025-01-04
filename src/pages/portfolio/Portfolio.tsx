import Grid from "@mui/material/Grid2";
import "./portfolio.css";
import { Container, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import resumeData from "../../utils/resumeData";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");

  return (
    <Container className="section pb_45 pt_45">
      <Grid className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Tabs
          value={tabValue}
          className="custom_tabs"
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
                  tabValue === "All"
                    ? "customTabs_item active"
                    : "customTabs_item"
                }
              />
            )
          )}
        </Tabs>
      </Grid>
    </Container>
  );
};

export default Portfolio;
