import { Chip, List, Stack, Typography } from "@mui/material";
import { useCustomContext } from "context/custom";
import ScrollBar from "react-perfect-scrollbar";
import Chat from "../../Chat/containers/Chat";
import { UserProps } from "interfaces";

const Chats = ({ users, getMessages }: { users: Array<UserProps>; getMessages: Function }) => {
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
        {users.map((usr, index) => (
          <Chat key={index} usr={usr} getMessages={getMessages} />
        ))}
      </ScrollBar>
    </List>
  );
};

export default Chats;
