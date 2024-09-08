import { Container, Grid } from "@mui/material";
import UapCollapseCard from "../components/uap/uapCollapseCard";
import { useTheme } from "@mui/material/styles";
import assemblageImg from "../assets/img/mach.png";
import plaqueImg from "../assets/img/plaque.png";
import finitionCharge from "../assets/img/charge.png";
const data = {
    "UAP-Assemblage": {
        KPIs: {
            TRS: 95,
            TP: 84,
            TD: 100,
            TQ: 99,
            Tde: 8,
        },
        OFs: {
            TBS: 658702,
            "SOVEMA 1": 658702,
            "SOVEMA 2": 658702,
        },
        Quantities: {
            "Qté Conf  [batterie]": 560,
            "Qté NC [batterie]": 10,
            "Qté Ret [batterie]": 36,
            "Qté déchet [Kg]": 318,
        },
        Eng: {
            "Energie  [KWh]": 14536,
            "P [KW]": 15.32,
            "Q [KVAR]": 8.99,
            "cos ϕ [ ]": 0.862,
            "CO2 [Kg]": 7268,
        },
    },
    "UAP-Plaque": {},
    "UAP-Finition-charge": {},
};
const UapList = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="sm">
            <Grid rowSpacing={15}>
                <Grid>
                    <UapCollapseCard
                        title={"Assemblage"}
                        subTitle={"UAP"}
                        image={assemblageImg}
                        backgroundColor={theme.palette.secondary.light}
                        route="/uap/ligne"
                        data={data["UAP-Assemblage"]}
                    />
                </Grid>
                <Grid>
                    <UapCollapseCard
                        title={"Plaque"}
                        subTitle={"UAP"}
                        image={plaqueImg}
                        backgroundColor={theme.palette.secondary.light}
                        route="/uap/ligne"
                        data={data["UAP-Plaque"]}
                    />
                </Grid>
                <Grid>
                    <UapCollapseCard
                        title={"Finition-charge"}
                        subTitle={"UAP"}
                        image={finitionCharge}
                        backgroundColor={theme.palette.secondary.light}
                        route="/uap/ligne"
                        data={data["UAP-Finition-charge"]}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default UapList;
