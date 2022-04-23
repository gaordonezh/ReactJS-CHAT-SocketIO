import { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Page from "components/Page";
import { useCustomContext } from "context/custom";
import Chats from "../components/Chats";
import Messages from "../components/Messages";
import { io } from "socket.io-client";
import { API_SOCKETIO } from "config/api.config";
import { useChatContext } from "context";
import { UserProps, MessageProps } from "interfaces";
import { getMessagesByRoom } from "requests/message";

const socket = io(API_SOCKETIO ?? "");

const Home = () => {
  const { spacing, receiver } = useCustomContext();
  const { user, generalKEY } = useChatContext();
  const [users, setUsers] = useState<Array<UserProps>>([]);
  const [msgs, setMsgs] = useState<Array<MessageProps>>([]);

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = () => {
    socket.emit("register", generalKEY);
    socket.emit("socket_user", generalKEY);
    socket.on("socket_user_data", (data) => {
      const filtered = data.filter((row: UserProps) => row._id !== user._id);
      setUsers([...filtered]);
    });
  };

  const obtainInitialMessages = async (roomId: string) => {
    try {
      const data = await getMessagesByRoom(roomId);
      setMsgs([...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = (text: string) => {
    socket.emit("register", receiver.room);

    const toSend = { sender: user._id, room: receiver.room, content: text };

    socket.emit("create_message", toSend);
    socket.on("get_messages", (data) => setMsgs([...data]));
  };

  return (
    <Page title="Chat">
      <Stack spacing={spacing} direction="row">
        <Box>
          <Chats users={users} getMessages={obtainInitialMessages} />
        </Box>
        <Messages msgs={msgs} sendMessage={sendMessage} />
      </Stack>
    </Page>
  );
};

export default Home;
