import { Chip, List, Stack, Typography } from "@mui/material";
import { useCustomContext } from "context/custom";
import ScrollBar from "react-perfect-scrollbar";
import Chat from "../../Chat/containers/Chat";

const Chats = () => {
  const { height } = useCustomContext();

  return (
    <List
      sx={{ width: 250 }}
      subheader={
        <Stack spacing={2}>
          <Typography color="whitesmoke" variant="h4">
            CHATS
          </Typography>
          <Stack spacing={1} direction="row" justifyContent="space-evenly">
            <Chip label="Todos" color="primary" variant="filled" />
            <Chip label="Abiertos" color="primary" variant="outlined" />
            <Chip label="No leidos" color="primary" variant="outlined" />
          </Stack>
        </Stack>
      }
    >
      <ScrollBar style={{ height }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
          <Chat key={index} />
        ))}
      </ScrollBar>
    </List>
  );
};

export default Chats;
