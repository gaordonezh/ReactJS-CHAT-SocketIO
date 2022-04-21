import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import Page from "components/Page";
import { useCustomContext } from "context/custom";
import Chats from "../components/Chats";
import Messages from "../components/Messages";
import { io } from "socket.io-client";
import { API_SOCKETIO } from "config/api.config";
import { getInitialMessages } from "requests/message";
import { useChatContext } from "context";
import wait from "utils/wait";

const socket = io(API_SOCKETIO ?? "");

const Home = () => {
  const { spacing } = useCustomContext();
  const { user } = useChatContext();
  const [messages, setMessages] = useState<Array<{ room?: string }>>([]);
  const [receiver, setReceiver] = useState<{ _id?: string }>({});
  const [users, setUsers] = useState([]);
  const [text, setText] = useState("");

  const obtainMessages = async (usr: { _id: string }) => {
    try {
      setMessages([]);
      setReceiver({ ...usr });
      obtainData();
      await wait(1000);
      const data = await getInitialMessages(usr);
      setMessages(data);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    try {
      if (text) {
        const toSend = {
          sender: user._id,
          room: messages[0].room,
          content: text,
        };

        setText("");

        socket.emit("register", toSend.room);
        socket.emit("send_message", toSend);
        socket.on("get_messages", (data) => setMessages([...data]));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtainData();
  }, []);

  const obtainData = () => {
    socket.emit("register", user._id);
    socket.emit("get_users", user._id);
    socket.on("users_data", (data) => setUsers(data));
    console.log("HWERE");
  };

  return (
    <Page title="Chat">
      <Stack spacing={spacing} direction="row">
        <Box>
          <Chats obtainMessages={obtainMessages} users={users} />
        </Box>
        <Messages
          messages={messages}
          receiver={receiver}
          obtainMessages={obtainMessages}
          sendMessage={sendMessage}
          text={text}
          setText={setText}
          currentUser={user._id ?? ""}
        />
      </Stack>
    </Page>
  );
};

export default Home;
