import {
  Avatar,
  FormHelperText,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import moment from "moment-timezone";
import { io } from "socket.io-client";
import { API_SOCKETIO } from "config/api.config";
import { useChatContext } from "context";

const socket = io(API_SOCKETIO ?? "");

interface UserProps {
  usr: {
    profile_picture: string;
    f_name: string;
    latestDate: string;
    latestMessage: string;
    _id: string;
  };
  obtainMessages: Function;
}

const Chat = ({ usr, obtainMessages }: UserProps) => {
  return (
    <ListItem button divider onClick={() => obtainMessages(usr)}>
      <ListItemAvatar>
        <Avatar src={usr.profile_picture} alt={usr.f_name} variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography color="whitesmoke" noWrap>
            {usr.f_name}
          </Typography>
        }
        secondary={
          <Typography color="GrayText" variant="inherit" noWrap>
            {usr.latestMessage}
            <br />
            <FormHelperText component="span">{moment(usr.latestDate).fromNow()}</FormHelperText>
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Chat;
