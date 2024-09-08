import {
    Card,
    CardHeader,
    Typography,
    CardContent,
    Grid,
    LinearProgress,
    Box,
} from "@mui/material";
import ofIcon from "../../assets/img/of.png";

import GridItem from "../uap/gridItem";
interface OfCardProps {
    data: any;
}
const OfLigneCard = ({ data }: OfCardProps) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                title={
                    <Typography
                        sx={{
                            fontSize: "medium",
                            fontWeight: "bold",
                            textAlign: "left",
                            color: "#012160",
                        }}
                    >
                        OF | Progression d'OF
                    </Typography>
                }
                action={<img src={ofIcon} width={25} height={25} alt="icon" />}
                color="primary"
                sx={{
                    color: "blue",
                    backgroundColor: "white",
                    fontWeight: "fontWeightMedium",
                    boxShadow: 5,
                }}
            />
            <Box sx={{ width: "90%" }} marginTop={"10px"} marginLeft={"10px"}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ width: "100%", mr: 1 }}>
                        <LinearProgress
                            variant="determinate"
                            color="success"
                            sx={{
                                height: "10px",
                            }}
                            value={50}
                        />{" "}
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >{`${Math.round(50)}%`}</Typography>
                    </Box>
                </Box>
                <Typography variant="body2" sx={{ fontSize: "0.75rem" }}>
                    Progression de la réalisation
                </Typography>
            </Box>
            <CardContent>
                <Grid container spacing={1}>
                    <GridItem
                        title="N°OF"
                        subtitle="Numéro de l’ordre de fabrication"
                        value={(data?.["N°OF"] ?? "").toString()}
                    />
                    <GridItem
                        title="Réf Art"
                        subtitle="Référence de l’article à réaliser"
                        value={(data?.["Réf Art"] ?? "").toString()}
                    />
                    <GridItem
                        title="Qté Obj"
                        subtitle="Quantité objectif à réaliser"
                        value={(data?.["Qté Obj"] ?? "").toString()}
                    />
                    <GridItem
                        title="Production"
                        subtitle="Quantité réalisée jusqu’à l’instant"
                        value={(data?.["Production"] ?? "").toString()}
                    />
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OfLigneCard;
