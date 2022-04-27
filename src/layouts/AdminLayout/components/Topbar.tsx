import { LoadingButton } from "@mui/lab";
import { Grid, Typography } from "@mui/material";
import Logo from "components/Logo";
import { SESSION_USER } from "config/session";
import StorageService from "config/StorageService";
import { useChatContext } from "context";
import { useState } from "react";
import wait from "utils/wait";

const Topbar = () => {
  const { user } = useChatContext();
  const [load, setLoad] = useState(false);

  const logout = async () => {
    setLoad(true);
    StorageService.remove(SESSION_USER);
    await wait(1000);
    setLoad(false);
    window.location.reload();
  };

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography component="figure">
          <Logo />
        </Typography>
      </Grid>
      <Grid item>
        <Typography color="whitesmoke" textAlign="justify" variant="h2">
          {user.f_name?.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item>
        <LoadingButton
          size="large"
          variant="outlined"
          color="secondary"
          onClick={logout}
          loading={load}
        >
          CERRAR SESIÓN
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default Topbar;
