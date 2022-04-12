import { Box, Stack } from "@mui/material";
import Page from "components/Page";
import { useCustomContext } from "context/custom";
import Chats from "../components/Chats";
import Messages from "../components/Messages";

const Home = () => {
  const { spacing } = useCustomContext();

  return (
    <Page title="Chat">
      <Stack spacing={spacing} direction="row">
        <Box>
          <Chats />
        </Box>
        <Messages />
      </Stack>
    </Page>
  );
};

export default Home;
