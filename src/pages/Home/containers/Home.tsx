import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Page from "components/Page";
import { useCustomContext } from "context/custom";
import Chats from "../components/Chats";
import Messages from "../components/Messages";
import { io } from "socket.io-client";
import { API_SOCKETIO } from "config/api.config";
import { getInitialMessages } from "requests/message";
import { useChatContext } from "context";

const socket = io(API_SOCKETIO ?? "");

const Home = () => {
  const { spacing } = useCustomContext();
  const { user } = useChatContext();
  const [messages, setMessages] = useState([]);
  const [receiver, setReceiver] = useState({});

  /* useEffect(() => {
    obtainData();
  }, []);

  const obtainData = () => {
    socket.emit("register", "123");
    socket.emit("get_users", "123");
    socket.on("users_data", (data) => {
      const result = data.filter((item: { _id: string }) => item._id !== user._id);
      setUsers(result);
    });
  }; */

  const obtainMessages = async (usr: { _id: string }) => {
    try {
      setReceiver({ ...usr });
      const toSend = { from: user._id, to: usr._id };
      const data = await getInitialMessages(toSend);
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Page title="Chat">
      <Stack spacing={spacing} direction="row">
        <Box>
          <Chats obtainMessages={obtainMessages} />
        </Box>
        <Messages messages={messages} receiver={receiver} obtainMessages={obtainMessages} />
      </Stack>
    </Page>
  );
};

export default Home;
