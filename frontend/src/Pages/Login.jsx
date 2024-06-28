// import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import background from "../assets/backgroundimage.jpeg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log("Login successful", data);
  };

  return (
    <>
      <div>
        <img
          src={background}
          alt="background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
            filter: "blur(5px)",
          }}
        />
      </div>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: "500px",
          margin: "auto",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          top: "50%",
          right: "5%",
          transform: "translateY(-50%)",
          "@media (max-width: 600px)": {
            right: "2%",
          },
        }}
      >
        <Typography variant="h5" component="div" sx={{ mb: 2 }}>
          Login Form
        </Typography>
        <TextField
          fullWidth
          label="Username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Username must be at least 3 characters",
            },
          })}
          error={Boolean(errors.username)}
          helperText={errors.username?.message}
          margin="normal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
          margin="normal"
          sx={{ mt: 2 }}
        />
        <FormControlLabel
          control={<Checkbox {...register("rememberMe")} color="primary" />}
          label="Remember Me"
          sx={{ mt: 1, textAlign: "left" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
          <Box mt={1}>
            <Link href="#" variant="body2">
              Do not have an account? Sign Up
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
