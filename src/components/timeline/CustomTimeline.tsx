import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import "./CustomTimeline.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon: any;
}

const CustomTimeline = ({ icon, children }: Props) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="timeline_firstItem">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header"> {icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header"></Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
};

export default CustomTimeline;
