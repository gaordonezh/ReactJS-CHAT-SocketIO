import { Fragment } from "react";
import { Card, Typography, CardContent } from "@mui/material";
import { Timeline, TimelineItem, TimelineContent } from "@mui/lab";
import Animation from "components/Animation";
import figure from "assets/animations/empty.json";

interface MessageProps {
  messages: Array<{ active?: boolean; content?: string }>;
}

const ListMessages = ({ messages }: MessageProps) => {
  return (
    <Fragment>
      {messages.length > 1 ? (
        <Timeline position="alternate" sx={{ border: "1px solid red" }}>
          {messages
            .filter((item) => item.active && item.content !== "initial_message")
            .map((msg, index) => (
              <TimelineItem key={index}>
                <TimelineContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Card variant="outlined">
                    <CardContent>
                      <Typography sx={{ color: "#bbb" }}>{msg.content}</Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      ) : (
        <Fragment>
          <Animation src={figure} style={{ width: "50%" }} />
          <Typography color="whitesmoke" align="center" variant="body2">
            ARE YOU READY?
          </Typography>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ListMessages;
