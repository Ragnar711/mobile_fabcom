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
                        machine="tbs"
                        port={3001}
                    />
                </Grid>
                <Grid>
                    <LigneCollapseCard
                        title={"SOVEMA1"}
                        subTitle={"Ligne"}
                        image={assemblageImg}
                        backgroundColor={theme.palette.success.main}
                        route="/uap/ligne"
                        machine="sovema1"
                        port={3002}
                    />
                </Grid>
                <Grid>
                    <LigneCollapseCard
                        title={"SOVEMA2"}
                        subTitle={"Ligne"}
                        image={assemblageImg}
                        backgroundColor={theme.palette.success.main}
                        route="/uap/ligne"
                        machine="sovema2"
                        port={3003}
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Ligne;
