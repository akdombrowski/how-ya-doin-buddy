import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ThemeOptions } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

export const themeOptions: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#002147",
    },
    secondary: {
      main: "#ffff8d",
    },
    background: {
      default: "#4281a4",
      paper: "#004848",
    },
    error: {
      main: "#721817",
    },
  },
};
const HomeNotSignedIn = () => {
  const { data: session } = useSession();

  return (
    <Container maxWidth="xl" sx={{ height: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        sx={{ height: "100%", justifyContent: "center" }}
        spacing={0}
      >
        <Grid item xs={6}>
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            how ya doin, buddy?
          </Typography>
        </Grid>

        <Grid item xs={3}>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "100%",
            }}
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeNotSignedIn;
