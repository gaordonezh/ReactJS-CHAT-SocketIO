import { useEffect, useState } from "react";
import { Chip, List, Stack, Typography } from "@mui/material";
import { useCustomContext } from "context/custom";
import ScrollBar from "react-perfect-scrollbar";
import Chat from "../../Chat/containers/Chat";
import { io } from "socket.io-client";
import { API_SOCKETIO } from "config/api.config";
import { useChatContext } from "context";

const socket = io(API_SOCKETIO ?? "");

const Chats = ({ obtainMessages }: { obtainMessages: Function }) => {
  const { height } = useCustomContext();
  const { generalKey, user } = useChatContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = () => {
    socket.emit("register", user._id);
    socket.emit("get_users", user._id);
    socket.on("users_data", (data) => setUsers(data));
  };

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
        {users.map((item, index) => (
          <Chat key={index} usr={item} obtainMessages={obtainMessages} />
        ))}
      </ScrollBar>
    </List>
  );
};

export default Chats;
