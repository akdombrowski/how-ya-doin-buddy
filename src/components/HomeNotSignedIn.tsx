import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
    <Container>
      <Typography>Not Signed In</Typography>
      <Button variant="contained" onClick={() => signIn()}>
        Sign In
      </Button>
    </Container>
  );
};

export default HomeNotSignedIn;
