import { Grid } from "@mui/material";
import Animation from "components/Animation";
import json from "assets/animations/empty.json";
import { LoadingButton } from "@mui/lab";
import { createRoom } from "requests/room";
import { useChatContext } from "context";

const CreateRoom = ({
  receiver,
  obtainMessages,
}: {
  receiver: { f_name?: string; _id?: string };
  obtainMessages: Function;
}) => {
  const { user } = useChatContext();

  const handleCreate = async () => {
    try {
      const toSend = {
        name: `Chat privado de ${user.f_name} y ${receiver.f_name}`,
        sender: user._id,
        users: [receiver._id, user._id],
      };
      await createRoom(toSend);
      obtainMessages(receiver);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container justifyContent="center" direction="column" alignItems="center" spacing={5}>
      <Grid item>
        <Animation src={json} style={{ width: 200 }} />
      </Grid>
      <Grid item>
        <LoadingButton size="large" onClick={handleCreate}>
          ENVIAR MENSAJE
        </LoadingButton>
      </Grid>
    </Grid>
  );
};

export default CreateRoom;
