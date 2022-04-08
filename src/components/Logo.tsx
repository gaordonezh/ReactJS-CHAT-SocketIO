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
      <LogoImage
        src="https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg"
        alt="Logo images"
      />
    </Link>
  );
};

export default Logo;
