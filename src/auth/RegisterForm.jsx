import { Password } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Paper } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser, register } from '../redux/Auth/Action';

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, auth.jwt]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    };

    dispatch(register(userData));
    console.log(userData);
  };

  return (
    <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3 }}>
      <Typography variant="h4" align="center" color="primary" gutterBottom>
        Create Your Account
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First Name"
              fullWidth
              autoComplete="given-name"
              variant="outlined"
              sx={{ bgcolor: 'white' }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last Name"
              fullWidth
              autoComplete="family-name"
              variant="outlined"
              sx={{ bgcolor: 'white' }}
            />
          </Grid>

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
              Register
            </Button>
          </Grid>
        </Grid>
      </form>

      <div className="flex justify-center flex-col items-center mt-4">
        <Typography variant="body2" color="textSecondary">
          Already have an account?{' '}
          <Button onClick={() => navigate("/login")} color="primary" size="small">
            Login
          </Button>
        </Typography>
      </div>
    </Paper>
  );
};

export default RegisterForm;
