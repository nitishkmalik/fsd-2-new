import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  InputAdornment,
  IconButton
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let temp = {};

    if (!email.includes("@")) {
      temp.email = "Please enter a valid email address";
    }

    if (password.length < 6) {
      temp.password = "Password must be at least 6 characters";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("✨ Login Successful!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg, #74ebd5, #9face6)"
      }}
    >
      <Paper
        elevation={10}
        sx={{
          width: 380,
          p: 4,
          borderRadius: 4,
          textAlign: "center",
          backdropFilter: "blur(10px)",
          animation: "fadeIn 0.9s ease"
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ mb: 1 }}
        >
          Welcome Back 👋
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          mb={3}
        >
          Login to continue
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)}
            helperText={errors.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              )
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
            helperText={errors.password}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            type="submit"
            fullWidth
            sx={{
              mt: 3,
              py: 1.4,
              borderRadius: 3,
              fontSize: "16px",
              fontWeight: "bold",
              color: "#fff",
              background:
                "linear-gradient(90deg, #667eea, #764ba2)",
              transition: "0.3s",
              "&:hover": {
                transform: "scale(1.06)",
                boxShadow:
                  "0px 10px 30px rgba(0,0,0,0.25)"
              }
            }}
          >
            LOGIN
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default App;
