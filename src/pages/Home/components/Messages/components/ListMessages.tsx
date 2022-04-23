import { Card, Typography, CardContent, Box } from "@mui/material";
import { Timeline, TimelineItem, TimelineContent } from "@mui/lab";

const ListMessages = () => {
  return (
    <Timeline position="left">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((row, index) => (
        <TimelineItem key={index} sx={{ display: "block" }}>
          <TimelineContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: `flex-${index % 2 === 0 ? "end" : "start"}`,
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography sx={{ color: "#bbb" }}>MESSAGE test someone</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default ListMessages;
