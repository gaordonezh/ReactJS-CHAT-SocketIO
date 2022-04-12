import { useCustomContext } from "context/custom";
import { Box, IconButton, Stack } from "@mui/material";
import { Chat } from "@mui/icons-material";

const Sidebar = () => {
  const { spacing } = useCustomContext();

  return (
    <Box>
      <Stack sx={{ height: "100%" }} alignItems="center" justifyContent="center" spacing={spacing}>
        <IconButton>
          <Chat />
        </IconButton>
        <IconButton>
          <Chat />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Sidebar;
