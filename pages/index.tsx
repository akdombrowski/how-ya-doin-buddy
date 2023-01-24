import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import HomeNotSignedIn from "../src/components/HomeNotSignedIn";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Input from "@mui/material/Input";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/system";

const IndexPage = () => {
  const { data: session } = useSession();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  if (session) {
    return (
      <Container maxWidth="xs">
        <Stack spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              Signed in as {session.user.email} <br />
            </Grid>
          </Grid>

          <Stack spacing={2}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>How ya doin, buddy?</label>
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
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>Are ya gettin shit done?</label>
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
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>Feelin like a social butterfly?</label>
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
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label>People pissing you off?</label>
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
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("Email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile number", {
                      required: true,
                      minLength: 6,
                      maxLength: 12,
                    })}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <select {...register("Title", { required: true })}>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Miss">Miss</option>
                    <option value="Dr">Dr</option>
                  </select>
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    {...register("Developer", { required: true })}
                    type="radio"
                    value="Yes"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input
                    {...register("Developer", { required: true })}
                    type="radio"
                    value="No"
                  />
                </Grid>
              </Grid>

              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <input type="submit" />
                </Grid>
              </Grid>
            </form>

            <Grid item xs={12}>
              <button onClick={() => signOut()}>Sign out</button>
            </Grid>
          </Stack>
        </Stack>
      </Container>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      <HomeNotSignedIn></HomeNotSignedIn>
    </>
  );
};

export default IndexPage;
