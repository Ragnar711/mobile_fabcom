import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

export default function LoginPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const handleLoginClick = () => {
    navigate("/home");
  };
  return (
    <div>
      {/* <NavBar /> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "28vh", // Adjust the height as needed
          width: "80%", // Ensure the box takes the full width
          margin: 5, // Add some space between the image and the form
          marginBottom: "-20px",
        }}
      >
        <img
          src={logo}
          style={{
            height: "150px",
            marginTop: "20px",
          }}
        />
      </Box>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 2,
            backgroundColor: "#fafafa",
          }}
        >
          <Typography component="h1" variant="h5"></Typography>
          <Typography variant="body2">
            Bienvenu dans l'ére digitale 4.0 avec ARAMES
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Identifiant"
              name="email"
              autoComplete="email"
              autoFocus
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLoginClick}
            >
              Log in
            </Button>
            <Typography variant="body2" align="center">
              créer un compte?{" "}
              <Link href="/sign-up" variant="body2">
                Inscription
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
