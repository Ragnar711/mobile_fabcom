import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useSidebar } from "./SidebarContext";
import person from "../assets/img/person.png";
import diconnect from "../assets/img/disconnect.png";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";

const SideBar: React.FC = () => {
    const { open, toggleSidebar } = useSidebar();
    const navigate = useNavigate();
    const data = sessionStorage.getItem("user");
    const parsedData = JSON.parse(data || "{}");
    const user = parsedData.user;

    useEffect(() => {
        if (!user) {
            navigate("/auth");
        }
    }, [navigate, user]);

    const DrawerList = (
        <Box
            sx={{
                width: 250,
                bgcolor: "#404040",
                height: "100%",
                borderRight: "5px solid #edd42f",
            }}
            role="presentation"
            onClick={toggleSidebar}
        >
            <Box
                component="img"
                src={person}
                sx={{
                    width: 100, // Adjust width as needed
                    height: 100, // Adjust height as needed
                    borderRadius: "50%", // Makes the image circular if it's a square
                    objectFit: "cover",
                    marginBottom: 2,
                    marginLeft: 9,
                }}
            />
            <Typography
                variant="body2"
                sx={{
                    color: "white",
                    marginBottom: 2,
                    marginLeft: 8,
                }}
            >
                {`${user?.prenom ?? ""} ${user?.nom ?? ""}`}
            </Typography>
            <Divider sx={{ bgcolor: "yellow" }} />
            <List sx={{ marginTop: 10, marginLeft: 5 }}>
                {["All mail", "Trash", "Spam"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            sx={{
                                "&:active": {
                                    backgroundColor: "white !important",
                                },
                            }}
                        >
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box
                component="img"
                src={diconnect}
                sx={{
                    width: "22%", // Make sure the image takes the full width of the sidebar
                    position: "absolute",
                    bottom: 20,
                    marginLeft: 12,
                }}
                onClick={() => {
                    sessionStorage.removeItem("token");
                    sessionStorage.removeItem("user");
                    window.location.href = "/auth";
                }}
            />
        </Box>
    );

    return (
        <Drawer open={open} onClose={toggleSidebar}>
            {DrawerList}
        </Drawer>
    );
};

export default SideBar;
