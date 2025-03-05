import { Button, Grid, TextField, Typography, Paper } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/Auth/Action";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    dispatch(login(userData));
    console.log(userData);
  };

  return (
    <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Login to Your Account
      </Typography>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              autoComplete="email"
              variant="outlined"
              sx={{ bgcolor: 'white' }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              autoComplete="password"
              variant="outlined"
              sx={{ bgcolor: 'white' }}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{
                padding: "0.8rem",
                bgcolor: "#9153FD",
                "&:hover": { bgcolor: "#7c42c2" },
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center mt-4">
        <Typography variant="body2" color="textSecondary">
          Don't have an account?{" "}
          <Button onClick={() => navigate("/register")} color="primary" size="small">
            Register
          </Button>
        </Typography>
      </div>
    </Paper>
  );
};

export default LoginForm;
