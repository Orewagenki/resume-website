import { TimelineConnector, TimelineDot, TimelineSeparator } from "@mui/lab";
import "./CustomTimeline.css";

const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator className="separator_padding">
      <TimelineDot className="timeline_dot" />
      <TimelineConnector />
    </TimelineSeparator>
  );
};

export default CustomTimelineSeparator;
