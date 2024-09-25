import { Card, CardContent, Typography, CardHeader, Grid } from "@mui/material";
import ofIcon from "../../assets/img/of.png";
import GridItem from "./gridItem";

interface OfPerformanceCardProps {
    data;
    uapTitle: string;
}

const OFUapCard = ({ data, uapTitle }: OfPerformanceCardProps) => {
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
                        OF | Running OFs
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
            <CardContent>
                <Grid container spacing={1}>
                    {Object.entries(data ?? {}).map(([key, value]) => (
                        <GridItem
                            key={key}
                            title={key}
                            subtitle={"ligne d'" + uapTitle + " " + key}
                            value={(value as number).toString() ?? ""}
                        />
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default OFUapCard;
