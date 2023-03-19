import HomeNotSignedIn from "../src/components/HomeNotSignedIn";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { useSession, signIn, signOut } from "next-auth/react";
import { DatabaseSchema } from "../src/xata";

export const Dashboard = (props: DatabaseSchema) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="md" sx={{ height: "100vh" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              Signed in as {session.user?.email} <br />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid>
              <Typography>{JSON.stringify(props)}</Typography>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    );
  }

  return (
    <>
      <HomeNotSignedIn></HomeNotSignedIn>
    </>
  );
};

export default Dashboard;
