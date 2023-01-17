import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react";
import HomeNotSignedIn from "../src/components/HomeNotSignedIn";

const IndexPage = () => {
  const { data: session } = useSession();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="range"
            placeholder="How ya doin buddy?"
            {...register("How ya doin buddy?", {
              required: true,
              max: 10,
              min: 1,
            })}
          />
          <input
            type="range"
            placeholder="Are ya gettin shit done?"
            {...register("Are ya gettin shit done?", {
              required: true,
              max: 10,
              min: 1,
            })}
          />
          <input
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            type="tel"
            placeholder="Mobile number"
            {...register("Mobile number", {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <select {...register("Title", { required: true })}>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>

          <input
            {...register("Developer", { required: true })}
            type="radio"
            value="Yes"
          />
          <input
            {...register("Developer", { required: true })}
            type="radio"
            value="No"
          />

          <input type="submit" />
        </form>
        <button onClick={() => signOut()}>Sign out</button>
      </>
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
