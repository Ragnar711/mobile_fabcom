import {
    Card,
    CardContent,
    Typography,
    CardHeader,
    Box,
    Grid,
} from "@mui/material";
import kpiIcon from "../assets/img/iconKpi.webp";

const titleStyle = { fontWeight: "bold", marginBottom: "-5px" };
const valueStyle = {
    border: "1px solid black",
    borderRadius: 2,
    padding: "4px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "150px", // Fixed width, adjust as needed
    height: "30px", // Fixed height, adjust as needed
    overflow: "hidden", // Ensure content does not overflow
    textOverflow: "ellipsis", // Handle overflow text gracefully
};

const KpiPerformanceCard = ({ data }) => {
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
                        KPI | Performance de l'UAP
                    </Typography>
                }
                action={<img src={kpiIcon} width={25} height={25} alt="kpi" />}
                color="primary"
                sx={{
                    color: "blue",
                    backgroundColor: "white",
                    fontWeight: "fontWeightMedium",
                    boxShadow: 5,
                }}
            />
            <CardContent>
                <>
                    <Grid container spacing={1}>
                        {/* First Line TRS */}
                        <Grid item xs={10}>
                            <Box>
                                <Typography variant="subtitle2" sx={titleStyle}>
                                    TRS
                                </Typography>
                                <Typography variant="caption">
                                    Taux de rendement synthétique
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} container justifyContent="flex-end">
                            <Box sx={valueStyle}>
                                <Typography variant="body2">
                                    {Number(data?.TRS ?? 0).toFixed(0)}%
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Second Line TP */}
                        <Grid item xs={10}>
                            <Box>
                                <Typography variant="subtitle2" sx={titleStyle}>
                                    TP
                                </Typography>
                                <Typography variant="caption">
                                    Taux de performance
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} container justifyContent="flex-end">
                            <Box sx={valueStyle}>
                                <Typography variant="body2">
                                    {Number(data?.TP ?? 0).toFixed(0)}%
                                </Typography>
                            </Box>
                        </Grid>
                        {/* Third Line TD */}
                        <Grid item xs={10}>
                            <Box>
                                <Typography variant="subtitle2" sx={titleStyle}>
                                    TD
                                </Typography>
                                <Typography variant="caption">
                                    Taux de disponibilité
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} container justifyContent="flex-end">
                            <Box sx={valueStyle}>
                                <Typography variant="body2">
                                    {Number(data?.TD ?? 0).toFixed(0)}%
                                </Typography>
                            </Box>
                        </Grid>
                        {/* 4th Line TQ */}
                        <Grid item xs={10}>
                            <Box>
                                <Typography variant="subtitle2" sx={titleStyle}>
                                    TQ
                                </Typography>
                                <Typography variant="caption">
                                    Taux de qualité
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} container justifyContent="flex-end">
                            <Box sx={valueStyle}>
                                <Typography variant="body2">
                                    {Number(data?.TQ ?? 0).toFixed(0)}%
                                </Typography>
                            </Box>
                        </Grid>
                        {/* 5th Line Tde */}
                        <Grid item xs={10}>
                            <Box>
                                <Typography variant="subtitle2" sx={titleStyle}>
                                    Tde
                                </Typography>
                                <Typography variant="caption">
                                    Taux déchet
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2} container justifyContent="flex-end">
                            <Box sx={valueStyle}>
                                <Typography variant="body2">
                                    {Number(data?.TDech ?? 0).toFixed(0)}%
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </>
            </CardContent>
        </Card>
    );
};

export default KpiPerformanceCard;
