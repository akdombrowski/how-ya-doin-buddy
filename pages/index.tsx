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
                    defaultValue={[1, 10]}
                    render={({ field }) => (
                      <Slider
                        {...field}
                        onChange={(_, value) => {
                          field.onChange(value);
                        }}
                        valueLabelDisplay="auto"
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
                    defaultValue={[1, 10]}
                    render={({ field }) => (
                      <Slider
                        {...field}
                        onChange={(_, value) => {
                          field.onChange(value);
                        }}
                        valueLabelDisplay="auto"
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
  // return (
  //   <div className="container">
  //     {user ? (
  //       <span className="hello-user">Hello, {user.name}!</span>
  //     ) : (
  //       <form onSubmit={onSubmit}>
  //         <div className="row">
  //           <h3 className="form-header">LOGIN</h3>
  //         </div>
  //         <div className="row">
  //           <input
  //             type="text"
  //             placeholder="user name"
  //             {...register("username", {
  //               required: { value: true, message: "User name is required" },
  //               minLength: {
  //                 value: 3,
  //                 message: "User name cannot be less than 3 character",
  //               },
  //             })}
  //             className={"form-field" + (errors.username ? " has-error" : "")}
  //           />
  //           {errors.username && (
  //             <span className="error-label">{errors.username.message}</span>
  //           )}
  //         </div>
  //         <div className="row">
  //           <input
  //             type="password"
  //             placeholder="password"
  //             {...register("password", {
  //               required: {
  //                 value: true,
  //                 message: "Please enter your password",
  //               },
  //             })}
  //             className={"form-field" + (errors.password ? " has-error" : "")}
  //           />
  //           {errors.password && (
  //             <span className="error-label">{errors.password.message}</span>
  //           )}
  //         </div>
  //         <div className="row row-remember">
  //           <input type="checkbox" id="remember" {...register("remember")} />
  //           <label htmlFor="remember" className="remember-label">
  //             Remember me
  //           </label>
  //         </div>
  //         <div className="row">
  //           <button type="submit" className="btn login-btn">
  //             Login
  //           </button>
  //         </div>
  //       </form>
  //     )}
  //   </div>
  // );
};

export default IndexPage;
