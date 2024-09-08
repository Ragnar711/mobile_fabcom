import {
    Card,
    CardHeader,
    Typography,
    CardContent,
    Grid,
    Box,
    Divider,
} from "@mui/material";
import alertIcon from "../../assets/img/news.png";
interface AlertCardProps {
    data: any;
}
const titleStyle = { fontWeight: "bold", marginBottom: "-5px" };
const valueStyle = {
    border: "1px solid black",
    borderRadius: 2,
    padding: "4px 20px",
    display: "flex",
    flexDirection: "column", // Change the flex direction to column

    alignItems: "center",
    justifyContent: "center",
    width: "100%", // Fixed width, adjust as needed
    height: "50px", // Fixed height, adjust as needed
    overflow: "hidden", // Ensure content does not overflow
    textOverflow: "ellipsis", // Handle overflow text gracefully
};
const AlerteLigneCard = ({ data }: AlertCardProps) => {
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
                        Process | Paramètres process
                    </Typography>
                }
                action={
                    <img src={alertIcon} width={25} height={25} alt="alert" />
                }
                color="primary"
                sx={{
                    color: "blue",
                    backgroundColor: "white",
                    fontWeight: "fontWeightMedium",
                    boxShadow: 5,
                }}
            />
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={10}>
                        <Box>
                            <Typography variant="subtitle2" sx={titleStyle}>
                                Déchet [Kg]
                            </Typography>
                            <Typography variant="caption">
                                Dernier déchet enregistré par cause
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        <Box sx={valueStyle}>
                            <Typography variant="body2">
                                {(data?.["Déchet [Kg]"] ?? "").toString()}
                            </Typography>
                            <Divider>--------</Divider>
                            <Typography variant="body2">Nettoyage</Typography>
                        </Box>
                    </Grid>
                    {/* 2nd line */}
                    <Grid item xs={10}>
                        <Box>
                            <Typography variant="subtitle2" sx={titleStyle}>
                                Arrêt [sec]
                            </Typography>
                            <Typography variant="caption">
                                Dernier arrêt enregistré par cause
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        <Box sx={valueStyle}>
                            <Typography variant="body2">
                                {(data?.["Arrêt [sec]"] ?? "").toString()}
                            </Typography>
                            <Divider>--------</Divider>
                            <Typography variant="body2">Panne</Typography>
                        </Box>
                    </Grid>
                    {/* 3rd line */}
                    <Grid item xs={10}>
                        <Box>
                            <Typography variant="subtitle2" sx={titleStyle}>
                                Qté NC [Kg]
                            </Typography>
                            <Typography variant="caption">
                                Dernier quantité NC déclarée par cause
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={2} container justifyContent="flex-end">
                        <Box sx={valueStyle}>
                            <Typography variant="body2">
                                {(data?.["Qté NC [Kg]"] ?? "").toString()}
                            </Typography>
                            <Divider>--------</Divider>
                            <Typography variant="body2">
                                Soudure bac NC
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default AlerteLigneCard;
