import { Card, Typography, CardContent } from "@mui/material";
import { Timeline, TimelineItem, TimelineContent } from "@mui/lab";
import { MessageProps } from "interfaces";
import { useChatContext } from "context";

const ListMessages = ({ msgs }: { msgs: Array<MessageProps> }) => {
  const { user } = useChatContext();

  return (
    <Timeline position="left">
      {msgs.map((row, index) => (
        <TimelineItem key={index} sx={{ display: "block" }}>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: `flex-${row.sender === user._id ? "end" : "start"}`,
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ color: "#bbb" }}>{row.content}</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ListMessages;
