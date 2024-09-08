import { Card, CardHeader, Typography, CardContent, Grid } from "@mui/material";
import GridItem from "../uap/gridItem";
import processIcon from "../../assets/img/process.png";
interface ProcessCardProps {
    data: any;
}
const ProcessLigneCard = ({ data }: ProcessCardProps) => {
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
                    <img src={processIcon} width={25} height={25} alt="icon" />
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
                    <GridItem
                        title="TC Env [sec]"
                        subtitle="Cadence réelle de la phase enveloppeuse"
                        value={(data?.["TC Env [sec]"] ?? "").toString()}
                    />
                    <GridItem
                        title="TC COS [sec]"
                        subtitle="Temps de cycle réel de la phase COS"
                        value={(data?.["TC COS [sec]"] ?? "").toString()}
                    />
                    <GridItem
                        title="TC SC [sec]"
                        subtitle="Temps de cycle réel soudure des connexions"
                        value={(data?.["TC SC [sec]"] ?? "").toString()}
                    />
                    <GridItem
                        title="TC BC [sec]"
                        subtitle="Temps de cycle réel soudure Bac/couvercle"
                        value={(data?.["TC BC [sec]"] ?? "").toString()}
                    />
                    <GridItem
                        title="TC th [sec]"
                        subtitle="Temps de cycle théorique de la ligne"
                        value={(data?.["TC th [sec]"] ?? "").toString()}
                    />
                </Grid>
            </CardContent>
        </Card>
    );
};

export default ProcessLigneCard;
