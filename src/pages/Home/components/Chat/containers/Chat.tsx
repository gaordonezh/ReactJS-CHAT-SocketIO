import {
  Avatar,
  FormHelperText,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";

const Chat = () => {
  return (
    <ListItem button divider>
      <ListItemAvatar>
        <Avatar src="" alt="A" variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography color="whitesmoke" noWrap>
            Name
          </Typography>
        }
        secondary={
          <Typography color="GrayText" variant="inherit" noWrap>
            last message
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <FormHelperText component="span">1h</FormHelperText>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Chat;
