import { useState } from "react";
import { Stack, TextField, Typography, InputAdornment, IconButton } from "@mui/material";
import { VisibilityOff, Visibility, AccountBox, Email } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import Platforms from "./Platforms";
import Notification from "components/Notification";
import { useChatContext } from "context";
import { useForm } from "react-hook-form";
import { signUpUser } from "requests/auth";
import StorageService from "config/StorageService";
import { SESSION_USER } from "config/session";
import { UseFormProps } from "interfaces";
import { useNavigate } from "react-router-dom";

interface ItemsProps {
  username: string;
  email: string;
  rol: string;
  confirm_password: string;
  password: string;
}

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useChatContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ message: "", open: false });
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: UseFormProps = useForm();

  const handleRegister = async (items: ItemsProps) => {
    try {
      setLoading(true);
      if (items.password !== items.confirm_password)
        return setError({ message: "Las contraseñas no coinciden", open: true });

      items.username = items.email;
      items.rol = "user";

      const res = await signUpUser(items);
      StorageService.set(SESSION_USER, res.token);
      setUser(res.data);
      navigate("/chat");
    } catch (error) {
      setError({ message: "El correo ya está siendo usada por otra persona.", open: true });
    } finally {
      setLoading(false);
    }
  };

  const handleHidden = () => setError({ message: "", open: false });

  return (
    <form className="sign-up-form" autoComplete="off" onSubmit={handleSubmit(handleRegister)}>
      <Stack direction="column" spacing={3} alignItems="center">
        <Typography variant="h2" component="h2" className="title">
          Registrate
        </Typography>
        <Notification
          title="Error de registro..."
          message={error.message}
          type="info"
          open={error.open}
        />
        <TextField
          fullWidth
          label="Nombre"
          type="text"
          error={Boolean(errors?.f_name ?? false)}
          {...register("f_name", {
            required: true,
            minLength: 3,
            maxLength: 25,
            pattern: /^[A-Z0-9 ñáéíúó]+$/i,
          })}
          onKeyDown={handleHidden}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <AccountBox />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="Correo"
          type="email"
          error={Boolean(errors?.email ?? false)}
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
          })}
          onKeyDown={handleHidden}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <Password
          label="Contraseña"
          errors={errors}
          register={register}
          handleHidden={handleHidden}
          name="password"
        />
        <Password
          label="Confirmar contraseña"
          errors={errors}
          register={register}
          handleHidden={handleHidden}
          name="confirm_password"
        />
        <LoadingButton variant="contained" size="large" type="submit" loading={loading}>
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

const Password = ({
  label,
  errors,
  register,
  handleHidden,
  name,
}: {
  label: string;
  errors: any;
  register: Function;
  handleHidden: Function;
  name: string;
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      fullWidth
      label={label}
      type={visible ? "text" : "password"}
      error={Boolean(errors[name] ?? false)}
      {...register(name, {
        required: true,
        pattern: /^(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$$/i,
      })}
      onKeyDown={handleHidden}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={() => setVisible(!visible)}>
              {visible ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      helperText="Min 8. Debe incluir Mayúsculas, minúsculas, números, simbolos."
    />
  );
};
