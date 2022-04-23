import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Logo = () => {
  const LogoImage = styled("img")(({ theme }) => ({
    height: 75,
    width: 75,
    [theme.breakpoints.down("md")]: {
      height: 50,
      width: 50,
    },
  }));

  return (
    <Link to="/">
      <LogoImage src="https://aldo.codes/logo/white.png" alt="Logo" />
    </Link>
  );
};

export default Logo;
