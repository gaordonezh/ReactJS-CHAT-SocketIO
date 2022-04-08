import { Stack, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Platforms from "./Platforms";

const SignUp = () => {
  return (
    <form action="#" className="sign-up-form" autoComplete="off">
      <Stack direction="column" spacing={3} alignItems="center">
        <Typography variant="h2" component="h2" className="title">
          Registrate
        </Typography>
        <TextField fullWidth label="Usuario" type="text" />
        <TextField fullWidth label="Correo" type="email" />
        <TextField fullWidth label="Contraseña" type="password" />
        <LoadingButton variant="contained" size="large" type="submit">
          CONTINUAR
        </LoadingButton>
        <Typography variant="body2" color="text.secondary">
          O registrate con alguna de estas plataformas.
        </Typography>
        <Platforms />
      </Stack>
    </form>
  );
};

export default SignUp;
