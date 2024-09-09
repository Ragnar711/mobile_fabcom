import LigneCollapseCard from "../components/ligne/ligneCollapseCard";
import { useTheme } from "@mui/material/styles";
import assemblageImg from "../assets/img/mach.png";
import { Container, Grid } from "@mui/material";

const Ligne = () => {
    const theme = useTheme();
    return (
        <Container maxWidth="sm">
            <Grid rowSpacing={15}>
                <Grid>
                    <LigneCollapseCard
                        title={"TBS"}
                        subTitle={"Ligne"}
                        image={assemblageImg}
                        backgroundColor={theme.palette.success.main}
                        route="/uap/ligne"
                        machine={"tbs"}
                    />
                </Grid>
                {/* <Grid>
                    <LigneCollapseCard
                        title={"Assemblage"}
                        subTitle={"Ligne"}
                        image={assemblageImg}
                        backgroundColor={theme.palette.success.main}
                        route="/uap/ligne"
                        data={data}
                    />
                </Grid>
                <Grid>
                    <LigneCollapseCard
                        title={"Assemblage"}
                        subTitle={"Ligne"}
                        image={assemblageImg}
                        backgroundColor={theme.palette.warning.main}
                        route="/uap/ligne"
                        data={data}
                    />
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default Ligne;
