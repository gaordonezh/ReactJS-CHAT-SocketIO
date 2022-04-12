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
        <Avatar
          src="https://i.pinimg.com/280x280_RS/34/15/0a/34150a928bbe7ab5073f128806eeb9a0.jpg"
          alt="PROFILE"
          variant="rounded"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography color="whitesmoke" noWrap>
            Message subject name extra large
          </Typography>
        }
        secondary={
          <Typography color="GrayText" variant="inherit" noWrap>
            message preview - 25 letters
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <FormHelperText>2h</FormHelperText>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Chat;
