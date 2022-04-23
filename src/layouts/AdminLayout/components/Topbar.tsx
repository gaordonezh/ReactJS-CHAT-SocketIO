import { Grid, Typography } from "@mui/material";
import Logo from "components/Logo";
import { useChatContext } from "context";

const Topbar = () => {
  const { user } = useChatContext();

  return (
    <Grid container direction="row" sx={{ borderBottom: "1px solid #fff", borderRadius: 1 }}>
      <Grid item xs={3}>
        <Typography component="figure">
          <Logo />
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography color="whitesmoke" textAlign="justify" variant="h2">
          {user.f_name?.toUpperCase()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Topbar;
