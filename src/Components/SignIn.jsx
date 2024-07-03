import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function Login() {
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);
  const [showInvalid, setShowInvalid] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");

    let newError = {
      email: "",
      password: "",
    };

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setShowInvalid(true);
      newError.email = "Email Address Mismatch";
    }
    if (password.length < 8) {
      setShowInvalid(true);
      newError.password = "Password Mismatch";
    }
    setError(newError);

    if (newError.email === "" && newError.password === "") {
      // Assuming user data is stored in localStorage
      const profilePage = JSON.parse(localStorage.getItem("user"));
      if (
        profilePage &&
        profilePage.email === email &&
        profilePage.password === password
      ) {
        navigate("/profile");
        localStorage.setItem("isLoggedIn",true)
      } else {
        setShowInvalid(true); // Show error for incorrect credentials
        setError({
          email: "Email Address Mismatch",
          password: "Password Mismatch",
        });
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginBlock: 14,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isSubmit === true && (
          <Box component="h1" m="{1}" sx={{ color: "red" }}>
            Sumitted
          </Box>
        )}
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onChange={() => setShowInvalid(false)}
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            //   autoFocus
          />
          {error.email !== "" && (
            <Box component="p" m="{1}" sx={{ color: "red" }}>
              Invalid Email
            </Box>
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {error.password !== "" && (
            <Box component="p" m="{1}" sx={{ color: "red" }}>
              Invalid Password
            </Box>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, bgcolor: "black" }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs className="font-medium">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item className="font-medium">
              <Link to="">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
