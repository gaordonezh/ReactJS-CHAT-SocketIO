import React from "react";
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
import CreateRoom from "./components/CreateRoom";
import ListMessages from "./components/ListMessages";

interface UserProps {
  messages: Array<object>;
  receiver: { profile_picture?: string; f_name?: string };
  obtainMessages: Function;
}

const Messages = ({ messages, receiver, obtainMessages }: UserProps) => {
  const { height } = useCustomContext();

  return (
    <React.Fragment>
      <Card elevation={0} sx={{ width: "100%", position: "relative" }}>
        <CardHeader
          avatar={<Avatar src={receiver.profile_picture} alt={receiver.f_name} />}
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
        <ScrollBar style={{ height }}>
          <CardContent sx={{ pb: 5 }}>
            {messages.length > 0 ? (
              <ListMessages messages={messages} />
            ) : (
              <CreateRoom receiver={receiver} obtainMessages={obtainMessages} />
            )}
          </CardContent>
        </ScrollBar>
        {messages.length > 0 && (
          <Box sx={{ position: "absolute", bottom: 0, width: "100%", bgcolor: "inherit" }} px={6}>
            <TextField label="Escribe tu mensaje..." fullWidth className="send" />
          </Box>
        )}
      </Card>
    </React.Fragment>
  );
};

export default Messages;
