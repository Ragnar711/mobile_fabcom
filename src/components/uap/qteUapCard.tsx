import { Card, CardHeader, Typography, CardContent, Grid } from "@mui/material";
import qteIcon from "../../assets/img/quantity.png";

import GridItem from "./gridItem";
interface OfPerformanceCardProps {
  data: any;
}
const QteUapCard = ({ data }: OfPerformanceCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
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
            Qté | Détail des quantités produites
          </Typography>
        }
        action={<img src={qteIcon} width={25} height={25} />}
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
            <GridItem
              title="Qté Conf  [batterie]"
              subtitle="Quantité totale produites conformes"
              value={(data?.["Qté Conf  [batterie]"] ?? "").toString()}
            />
            <GridItem
              title="Qté NC [batterie]"
              subtitle="Quantité totale non conformes"
              value={(data?.["Qté NC [batterie]"] ?? "").toString()}
            />
            <GridItem
              title="Qté Ret [batterie]"
              subtitle="Quantité totale retouchée"
              value={(data?.["Qté Ret [batterie]"] ?? "").toString()}
            />
            <GridItem
              title="Qté déchet [Kg]"
              subtitle="Quantité déchet déclarée vers recyclage"
              value={(data?.["Qté déchet [Kg]"] ?? "").toString()}
            />
          </Grid>
        </>
      </CardContent>
    </Card>
  );
};

export default QteUapCard;
