import { Card, CardHeader, Typography, Grid, CardContent } from "@mui/material";
import engIcon from "../../assets/img/eng.png";

import GridItem from "./gridItem";
interface EngCardProps {
  data: any;
}
const EngUapCard = ({ data }: EngCardProps) => {
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
            Eng | Performance énergétique
          </Typography>
        }
        action={<img src={engIcon} width={25} height={25} />}
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
            title="Energie  [KWh]"
            subtitle="Total consommation d'énergie active"
            value={(data?.["Energie  [KWh]"] ?? "").toString()}
          />
          <GridItem
            title="P [KW]"
            subtitle="Total puissance active"
            value={(data?.["P [KW]"] ?? "").toString()}
          />
          <GridItem
            title="Q [KVAR]"
            subtitle="Total puissance réactive"
            value={(data?.["Q [KVAR]"] ?? "").toString()}
          />
          <GridItem
            title="cos ϕ [ ]"
            subtitle="Facteur de puissance"
            value={(data?.["cos ϕ [ ]"] ?? "").toString()}
          />
          <GridItem
            title="CO2 [Kg]"
            subtitle="Total Empreinte carbone"
            value={(data?.["CO2 [Kg]"] ?? "").toString()}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EngUapCard;
