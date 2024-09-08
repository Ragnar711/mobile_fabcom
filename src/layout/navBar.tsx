import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useSidebar } from "./SidebarContext";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const { toggleSidebar } = useSidebar();
    const theme = useTheme();

    const handleLoginClick = () => {
        navigate("/auth/sign-in");
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ backgroundColor: theme.palette.secondary.light }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        <img
                            src={logo}
                            style={{
                                height: "40px",
                                marginTop: "20px",
                            }}
                            alt="Logo"
                        />
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            size="large"
                            edge="end"
                            color="inherit"
                            aria-label="menu"
                            sx={{ ml: 2 }}
                            onClick={toggleSidebar}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button color="inherit" onClick={handleLoginClick}>
                            <PersonIcon />
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
