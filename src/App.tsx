import { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Grid container>
        <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }} bgcolor="blue">
          ABC
        </Grid>
        <Grid size="grow" bgcolor="red">
          XYZ
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
