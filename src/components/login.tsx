import { Box } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";

const LoginForm = () => {
  return (
    <Box margin="0 auto" maxWidth="700px">
      <Box>
        <Typography component="h2" mb={2}>
          Login form
        </Typography>
        <TextField
          label="username"
          variant="filled"
          type="text"
          placeholder="Enter your username"
          sx={{ width: "100%" }}
        />
      </Box>
      <Box mt={2}>
        <TextField
          label="password"
          variant="filled"
          type="password"
          placeholder="Enter your password"
          sx={{ width: "100%" }}
        />
      </Box>
      <Button sx={{ mt: 1 }}>Submit</Button>
    </Box>
  );
};

export default LoginForm;
