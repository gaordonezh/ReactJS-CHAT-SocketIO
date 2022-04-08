import { Player } from "@lottiefiles/react-lottie-player";
import { Box } from "@mui/material";

const Animation = ({ src, style }: { src: object; style: object }) => {
  return (
    <Box p={2}>
      <Player loop src={src} style={{ ...style }} autoplay={true} />
    </Box>
  );
};

export default Animation;
