import { Card, Typography, CardContent } from "@mui/material";
import { Timeline, TimelineItem, TimelineContent } from "@mui/lab";
import { Fragment } from "react";

interface MessageProps {
  messages: Array<{ active?: boolean; content?: string }>;
}

const ListMessages = ({ messages }: MessageProps) => {
  console.log(messages);

  return (
    <Fragment>
      {messages.length > 1 ? (
        "READY TO MESSAGES"
      ) : (
        <Timeline position="alternate">
          {messages
            .filter((item) => item.active && item.content !== "initial_message")
            .map((e, index) => (
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
                      <Typography sx={{ color: "#bbb" }}>
                        Because you need strength {index}
                      </Typography>
                    </CardContent>
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
        </Timeline>
      )}
    </Fragment>
  );
};

export default ListMessages;
