import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  Typography,
  CardContent,
  IconButton,
  Avatar,
  TextField,
} from "@mui/material";
import { useCustomContext } from "context/custom";
import ScrollBar from "react-perfect-scrollbar";
import { MoreVert } from "@mui/icons-material";
import ListMessages from "./components/ListMessages";
import { MessageProps } from "interfaces";
import Animation from "components/Animation";
import json from "assets/animations/empty.json";
import wait from "utils/wait";

const Messages = ({ msgs, sendMessage }: { msgs: Array<MessageProps>; sendMessage: Function }) => {
  const { height, receiver } = useCustomContext();
  const [text, setText] = useState("");
  const divRef = useRef<any>(null);

  const handleSend = async () => {
    sendMessage(text);
    await wait(500);
    setText("");
  };

  useEffect(() => {
    if (divRef.current) divRef.current.scrollIntoView();
  }, [msgs]);

  return (
    <React.Fragment>
      <Card elevation={0} sx={{ width: "100%", position: "relative" }}>
        {receiver._id ? (
          <CardHeader
            avatar={<Avatar src={receiver.profile_picture} alt="A" />}
            action={
              <IconButton>
                <MoreVert />
              </IconButton>
            }
            title={
              <Typography color="whitesmoke" variant="h5">
                {receiver.f_name}
              </Typography>
            }
          />
        ) : (
          <Typography color="GrayText" align="center">
            Seleccione una persona para empezar a chatear
          </Typography>
        )}
        {msgs.length > 0 ? (
          <ScrollBar style={{ height, border: "2px solid red" }}>
            <CardContent sx={{ pb: 5, border: "2px solid green" }} component="div">
              <ListMessages msgs={msgs} />
              <div ref={divRef} />
            </CardContent>
          </ScrollBar>
        ) : (
          <Box>
            <Animation src={json} style={{ maxWidth: "50%" }} />
            <Typography color="GrayText" align="center">
              {receiver.f_name
                ? `Aún no iniciaste la conversación con ${receiver.f_name}`
                : "D'Aux"}
            </Typography>
          </Box>
        )}

        {receiver._id && (
          <Box sx={{ position: "absolute", bottom: 0, width: "100%", bgcolor: "inherit" }} px={6}>
            <TextField
              label="Escribe tu mensaje..."
              fullWidth
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="send"
            />
          </Box>
        )}
      </Card>
    </React.Fragment>
  );
};

export default Messages;
