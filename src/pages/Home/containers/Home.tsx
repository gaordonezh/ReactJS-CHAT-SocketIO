import { Box, Stack } from "@mui/material";
import Page from "components/Page";
import { useCustomContext } from "context/custom";
import Chats from "../components/Chats";
import Messages from "../components/Messages";
import { io } from "socket.io-client";
import { API_SOCKETIO } from "config/api.config";

/* const socket = io(API_SOCKETIO ?? "");

socket.emit("register", toSend.room);
socket.emit("send_message", toSend);
socket.on("get_messages", (data) => setMessages([...data])); */

const Home = () => {
  const { spacing } = useCustomContext();

  return (
    <Page title="Chat">
      <Stack spacing={spacing} direction="row">
        <Box>
          <Chats />
        </Box>
        <Messages />
      </Stack>
    </Page>
  );
};

export default Home;
