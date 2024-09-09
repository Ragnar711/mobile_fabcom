import { useState, useEffect } from "react";
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
import { Box, Chip, Container, Grid } from "@mui/material";
import warningTriangle from "../../assets/img/alert.png";
import { useNavigate } from "react-router-dom";
import KpiPerformanceCard from "../kpiPerformanceCard";
import { useTheme } from "@mui/material/styles";
import OfLigneCard from "./oFLigneCard";
import ProcessLigneCard from "./processLigneCard";
import { getPoste } from "../../utils/utils";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

interface CollapseCardProps {
    title: string;
    subTitle: string;
    image: string;
    backgroundColor: string;
    route: string;
    machine: string;
}

type Data = {
    KPIs: {
        TRS: number;
        TP: number;
        TD: number;
        TQ: number;
        TDech: number;
    };
    OF: {
        Article: string;
        NOF: string;
        QD: number;
        QO: number;
        QP: number;
    };
};

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

export default function LigneCollapseCard({
    title,
    subTitle,
    backgroundColor,
    image,
    route,
    machine,
}: CollapseCardProps) {
    const theme = useTheme();
    const [data, setData] = useState<Data>();
    const [expanded, setExpanded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMachineData = async () => {
            try {
                const res = await fetch(
                    `http://${window.location.hostname}:3001/api/v1/machine/${machine}`
                );
                const resData = await res.json();
                setData(resData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMachineData();
    }, [machine]);

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

                <Grid
                    container
                    spacing={0.3}
                    marginLeft={"auto"}
                    marginTop={"5px"}
                >
                    {expanded && (
                        <>
                            <Grid item xs={3}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "0.6rem" }}
                                >
                                    Temps d’arrêt I poste
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Chip
                                    label={
                                        <Typography
                                            variant="body2"
                                            sx={{ fontSize: "0.7rem" }}
                                            marginLeft={0}
                                        >
                                            00:00:00
                                        </Typography>
                                    }
                                    sx={{
                                        backgroundColor:
                                            theme.palette.error.main,
                                        color: "white",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Chip
                                    label={
                                        <Typography
                                            variant="body2"
                                            sx={{ fontSize: "0.7rem" }}
                                            marginLeft={0}
                                        >
                                            00:00:00
                                        </Typography>
                                    }
                                    sx={{
                                        backgroundColor:
                                            theme.palette.success.main,
                                        color: "black",
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Typography
                                    variant="body2"
                                    sx={{ fontSize: "0.6rem" }}
                                >
                                    Temps de marche I Poste
                                </Typography>
                            </Grid>
                        </>
                    )}
                </Grid>

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
                    {!expanded ? (
                        <IconButton aria-label="add to favorites">
                            <img
                                src={warningTriangle}
                                width={50}
                                height={35}
                                alt="warningTriangle"
                            />
                        </IconButton>
                    ) : (
                        <Typography variant="body2" sx={{ fontSize: "0.6rem" }}>
                            Poste: {getPoste()}
                        </Typography>
                    )}
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
                        <OfLigneCard data={data?.OF} />
                        <KpiPerformanceCard data={data?.KPIs} />
                        <ProcessLigneCard />
                    </CardContent>
                </Collapse>
            </Card>
        </Container>
    );
}
