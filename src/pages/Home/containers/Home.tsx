import { useState } from "react";
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
  const [messages, setMessages] = useState<Array<{ room?: string }>>([]);
  const [receiver, setReceiver] = useState<{ _id?: string }>({});
  const [text, setText] = useState("");

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

  const sendMessage = async () => {
    try {
      if (text) {
        const toSend = {
          from: user._id,
          to: receiver._id,
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

  return (
    <Page title="Chat">
      <Stack spacing={spacing} direction="row">
        <Box>
          <Chats obtainMessages={obtainMessages} />
        </Box>
        <Messages
          messages={messages}
          receiver={receiver}
          obtainMessages={obtainMessages}
          sendMessage={sendMessage}
          text={text}
          setText={setText}
        />
      </Stack>
    </Page>
  );
};

export default Home;
