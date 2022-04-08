import { Grid } from "@mui/material";
import Animation from "components/Animation";
import animation from "assets/animations/empty.json";

const Page404 = () => {
  return (
    <Grid
      container
      minHeight="100vh"
      component="section"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item component="article">
        <Animation src={animation} style={{ maxWidth: "100%", maxHeight: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default Page404;
