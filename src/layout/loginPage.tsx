import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import logo from "../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
    const [matricule, setMatricule] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // const handleLoginClick = async (
    //     event: React.MouseEvent<HTMLFormElement>
    // ) => {
    //     event.preventDefault(); // Prevent default form submission behavior
    //     try {
    //         const response = await axios.post(
    //             "http://192.168.100.121:3000/api/v1/signin",
    //             {
    //                 matricule,
    //                 motDePasse: password,
    //             }
    //         );
    //         if (response.status === 200) {
    //             sessionStorage.setItem("user", JSON.stringify(response.data));
    //             navigate("/uap");
    //         } else {
    //             console.error("Login failed:", response.statusText);
    //         }
    //     } catch (error) {
    //         console.error("Network error:", error);
    //     }
    // };

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
                    alt="Logo"
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
                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 1 }}
                        onSubmit={() => navigate("/uap")}
                    >
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
                            onChange={(e) => setMatricule(e.target.value)}
                            value={matricule}
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
                            sx={{ backgroundColor: "white" }}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Log in
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
}
