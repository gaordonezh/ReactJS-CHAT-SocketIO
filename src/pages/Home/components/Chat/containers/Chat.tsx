import {
  Avatar,
  FormHelperText,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";

interface UserProps {
  usr: {
    profile_picture?: string;
    f_name?: string;
    latestDate?: string;
    latestMessage?: string;
    room?: string;
    _id?: string;
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
            {usr.latestMessage}pending
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <FormHelperText component="span">{usr.latestDate}1h</FormHelperText>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Chat;
