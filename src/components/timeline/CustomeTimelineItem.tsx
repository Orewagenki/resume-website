import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Typography } from "@mui/material";
import "./CustomTimeline.css";

interface Props {
  title: string;
  text: string;
  link: string;
}

const CustomeTimelineItem = ({ title, text, link }: Props) => {
  return (
    <TimelineItem className="timeline_firstItem">
      <TimelineSeparator className="separator_padding">
        <TimelineDot className="timeline_dot" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography>
          <span>{title}:</span>
          {link ? (
            <a href={link} target="_blank">
              {text}
            </a>
          ) : (
            text
          )}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CustomeTimelineItem;
