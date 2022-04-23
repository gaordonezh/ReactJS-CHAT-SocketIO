import {
  Avatar,
  FormHelperText,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import { useCustomContext } from "context/custom";
import { UserProps } from "interfaces";

const Chat = ({ usr, getMessages }: { usr: UserProps; getMessages: Function }) => {
  const { setReceiver } = useCustomContext();

  const handleClick = () => {
    getMessages(usr.room);
    setReceiver(usr);
  };

  return (
    <ListItem button divider onClick={handleClick}>
      <ListItemAvatar>
        <Avatar src="" alt="A" variant="rounded" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography color="whitesmoke" noWrap>
            {usr.f_name}
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
