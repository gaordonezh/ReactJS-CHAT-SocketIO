import { Grid, Typography } from "@mui/material";
import Logo from "components/Logo";

const Navbar = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item>
        <Typography component="figure">
          <Logo />
        </Typography>
      </Grid>
      <Grid item>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore quaerat architecto
        veniam iste reiciendis adipisci. Adipisci labore, aliquam sint illum alias quidem neque
        impedit necessitatibus.
      </Grid>
    </Grid>
  );
};

export default Navbar;
