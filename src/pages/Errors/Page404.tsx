import { Grid } from "@mui/material";
import Animation from "components/Animation";
import animation from "assets/animations/empty.json";
import Page from "components/Page";

const Page404 = () => {
  return (
    <Page title="Página no encontrada...">
      <Grid
        container
        minHeight="100vh"
        component="section"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item component="article">
          <Animation src={animation} style={{ maxWidth: "100%", maxHeight: "100%" }} />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Page404;
