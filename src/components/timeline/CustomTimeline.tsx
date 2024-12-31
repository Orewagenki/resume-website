import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import CustomTimelineSeparator from "./CustomTimelineSeparator";
import WorkIcon from "@mui/icons-material/Work";
import "./CustomTimeline.css";

interface Props {
  title: string;
  icon: string;
  children: string;
}

const CustomTimeline = () => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">
            <WorkIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            Header
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomTimeline;
