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
import ListMessages from "./components/ListMessages";

const Messages = () => {
  const { height } = useCustomContext();

  return (
    <React.Fragment>
      <Card elevation={0} sx={{ width: "100%", position: "relative" }}>
        <CardHeader
          avatar={<Avatar src="" alt="A" />}
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title={
            <Typography color="whitesmoke" variant="h5">
              Name
            </Typography>
          }
        />
        <ScrollBar style={{ height, border: "2px solid red" }}>
          <CardContent sx={{ pb: 5, border: "2px solid green" }} component="div">
            <ListMessages />
          </CardContent>
        </ScrollBar>

        <Box sx={{ position: "absolute", bottom: 0, width: "100%", bgcolor: "inherit" }} px={6}>
          <TextField label="Escribe tu mensaje..." fullWidth className="send" type="text" />
        </Box>
      </Card>
    </React.Fragment>
  );
};

export default Messages;
