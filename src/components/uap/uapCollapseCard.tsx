import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import KpiPerformanceCard from "../kpiPerformanceCard";
import OFUapCard from "./oFUapCard";
import QteUapCard from "./qteUapCard";
import EngUapCard from "./engUapCard";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface CollapseCardProps {
    title: string;
    subTitle: string;
    image: string;
    backgroundColor: string;
    route: string;
    data;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function UapCollapseCard({
    title,
    subTitle,
    backgroundColor,
    image,
    route,
    data,
}: Readonly<CollapseCardProps>) {
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(route);
    };
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Container>
            <Card
                sx={{
                    maxWidth: 345,
                    borderRadius: "16px",
                    boxShadow: 4,
                    marginTop: "30px",
                }}
            >
                <CardHeader
                    onClick={handleClick}
                    avatar={
                        <Typography
                            sx={{
                                fontWeight: "bold",
                                textAlign: "center",
                                color: "#012160",
                                position: "absolute",
                            }}
                        >
                            {subTitle}
                        </Typography>
                    }
                    title={
                        <Typography
                            sx={{
                                fontSize: "x-large",
                                fontWeight: "bolder",
                                textAlign: "center",
                                color: "#012160",
                            }}
                        >
                            {title}
                        </Typography>
                    }
                    color="primary"
                    sx={{
                        color: "blue",
                        backgroundColor: backgroundColor,
                        fontWeight: "fontWeightMedium",
                        boxShadow: 4,
                    }}
                />
                <CardMedia
                    component="img"
                    image={image}
                    alt="Paella dish"
                    sx={{
                        height: "60%", // Takes 80% of the parent's height
                        width: "auto", // Maintain aspect ratio
                        maxWidth: "60%", // Optionally constrain width if needed
                        objectFit: "cover", // Adjust image to cover the area
                        objectPosition: "center", // Center the image
                        display: "block", // Ensure the image is displayed as a block-level element
                        margin: "auto", // Center the image horizontally
                    }}
                />
                <CardActions disableSpacing>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <Box
                            height={24}
                            width={24}
                            sx={{
                                borderRadius: 1,
                                border: "2px solid DimGray",
                            }}
                        >
                            <ExpandMoreIcon />
                        </Box>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent
                        sx={{
                            padding: "10px",
                            gap: "8px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <KpiPerformanceCard data={data?.KPIs} />
                        <OFUapCard data={data?.OFs} uapTitle={title} />
                        <QteUapCard data={data?.Quantities} />
                        <EngUapCard data={data?.Eng} />
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
