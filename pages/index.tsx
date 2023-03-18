import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import HomeNotSignedIn from "../src/components/HomeNotSignedIn";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import theme from "../src/theme";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography } from "@mui/material";

const IndexPage = () => {
  const { data: session } = useSession();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  errors ? console.log(errors) : console.log();
  if (session) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xs" className="h-100">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              Signed in as {session.user?.email} <br />
            </Grid>
          </Grid>

          <form id="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <label>
                  <Typography variant="h1">How ya doin, buddy?</Typography>
                </label>
                <Controller
                  name="mood"
                  control={control}
                  defaultValue={5}
                  render={({ field }) => (
                    <Slider
                      {...field}
                      onChange={(_, value) => {
                        field.onChange(value);
                      }}
                      valueLabelDisplay="auto"
                      marks
                      max={10}
                      min={1}
                      step={1}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label>
                  <Typography variant="h3">Are ya gettin shit done?</Typography>
                </label>
                <Controller
                  name="motivation"
                  control={control}
                  defaultValue={5}
                  render={({ field }) => (
                    <Slider
                      {...field}
                      onChange={(_, value) => {
                        field.onChange(value);
                      }}
                      valueLabelDisplay="auto"
                      marks
                      max={10}
                      min={1}
                      step={1}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label>
                  <Typography variant="h3">
                    Feelin like a social butterfly?
                  </Typography>
                </label>
                <Controller
                  name="social"
                  control={control}
                  defaultValue={5}
                  render={({ field }) => (
                    <Slider
                      {...field}
                      onChange={(_, value) => {
                        field.onChange(value);
                      }}
                      valueLabelDisplay="auto"
                      marks
                      max={10}
                      min={1}
                      step={1}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label>
                  <Typography variant="h3">People pissing you off?</Typography>
                </label>
                <Controller
                  name="anger"
                  control={control}
                  defaultValue={5}
                  render={({ field }) => (
                    <Slider
                      {...field}
                      onChange={(_, value) => {
                        field.onChange(value);
                      }}
                      valueLabelDisplay="auto"
                      marks
                      max={10}
                      min={1}
                      step={1}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <label>
                  <Typography variant="h3">
                    U pissin other people off?
                  </Typography>
                </label>
                <Controller
                  name="annoying"
                  control={control}
                  defaultValue={5}
                  render={({ field }) => (
                    <Slider
                      {...field}
                      onChange={(_, value) => {
                        field.onChange(value);
                      }}
                      valueLabelDisplay="auto"
                      marks
                      max={10}
                      min={1}
                      step={1}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" size="large" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>

          <Grid item xs={12}>
            <Button onClick={() => signOut()}>Sign out</Button>
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

export default IndexPage;
