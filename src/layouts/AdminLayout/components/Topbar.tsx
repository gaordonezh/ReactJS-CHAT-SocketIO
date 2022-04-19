import { Grid, Typography } from "@mui/material";
import Logo from "components/Logo";
import { useChatContext } from "context";

const Topbar = () => {
  const { user } = useChatContext();

  return (
    <Grid container sx={{ border: "1px solid blue" }} direction="row">
      <Grid item xs={3}>
        <Typography component="figure">
          <Logo />
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography color="whitesmoke" textAlign="justify">
          {user.f_name} | {user.email}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Topbar;
