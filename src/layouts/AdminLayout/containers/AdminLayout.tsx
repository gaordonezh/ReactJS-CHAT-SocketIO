import { Box, Container, Stack } from "@mui/material";
import { useCustomContext } from "context/custom";
import Content from "../components/Content";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const AdminLayout = () => {
  const { spacing } = useCustomContext();

  return (
    <Container maxWidth="lg">
      <Box p={spacing}>
        <Stack spacing={spacing} direction="column">
          <Topbar />
          <Stack direction="row" spacing={spacing}>
            <Sidebar />
            <Content />
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default AdminLayout;
