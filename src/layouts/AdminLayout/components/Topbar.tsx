import { Grid, Typography } from "@mui/material";
import Logo from "components/Logo";

const Topbar = () => {
  return (
    <Grid container sx={{ border: "1px solid blue" }} direction="row">
      <Grid item xs={3}>
        <Typography component="figure">
          <Logo />
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography color="whitesmoke" textAlign="justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quaerat architecto
          veniam iste reiciendis adipisci. Adipisci labore, aliquam sint illum alias quidem neque
          impedit necessitatibus.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Topbar;
