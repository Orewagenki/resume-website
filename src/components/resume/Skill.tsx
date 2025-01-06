import { TimelineDot } from "@mui/lab";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

interface Props {
  skill: {
    title: string;
    description: string[];
  };
}

const Skill = ({ skill }: Props) => {
  return (
    <>
      <Grid size={{ xs: 12, sm: 6, md: 4 }}>
        <Paper elevation={0} className="skill">
          <Typography variant="h6" className="skill_title">
            {skill.title}
          </Typography>
          {skill.description.map((item) => (
            <Typography
              variant="body2"
              className="skill_description"
              key={item}
            >
              <TimelineDot variant="outlined" className="timeline_dot" />
              {item}
            </Typography>
          ))}
        </Paper>
      </Grid>
    </>
  );
};

export default Skill;
