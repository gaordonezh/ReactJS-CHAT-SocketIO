import { Alert, AlertTitle, Collapse } from "@mui/material";

const Notification = ({
  title,
  message,
  type,
  open,
}: {
  title: string;
  message: string;
  type: "error" | "info" | "success" | "warning";
  open: boolean;
}) => {
  return (
    <Collapse in={open}>
      <Alert severity={type} variant="filled">
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Collapse>
  );
};

export default Notification;
