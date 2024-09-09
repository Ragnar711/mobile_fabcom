import { Container, Grid } from "@mui/material";
import UapCollapseCard from "../components/uap/uapCollapseCard";
import { useTheme } from "@mui/material/styles";
import assemblageImg from "../assets/img/mach.png";
import { useState, useEffect } from "react";
import { calculateAverageKPI } from "../utils/utils";

const machineData = {
    "UAP-Assemblage": {
        KPIs: {
            TRS: 0,
            TP: 0,
            TD: 0,
            TQ: 0,
            Tde: 0,
        },
        OFs: {
            TBS: "",
            // "SOVEMA 1": null,
            // "SOVEMA 2": null,
        },
        Quantities: {
            "Qté Conf  [batterie]": 0,
            "Qté NC [batterie]": 0,
            "Qté Ret [batterie]": 0,
            "Qté déchet [Kg]": 0,
        },
        Eng: {
            "Energie  [KWh]": 0,
            "P [KW]": 0,
            "Q [KVAR]": 0,
            "cos ϕ [ ]": 0,
            "CO2 [Kg]": 0,
        },
    },
};

const UapList = () => {
    const theme = useTheme();
    const [data, setData] = useState([]);

    useEffect(() => {
        const machines = ["tbs"];
        const ports = [3001];
        const intervalIds = machines.flatMap((machine) => {
            return ports.map((port) => {
                return setInterval(() => {
                    fetchData(machine, port);
                }, 1000);
            });
        });

        return () => {
            intervalIds.forEach((intervalId) => clearInterval(intervalId));
        };
    }, []);

    const fetchData = async (machine: string, port: number) => {
        try {
            const res = await fetch(
                `http://${window.location.hostname}:${port}/api/v1/machine/${machine}`
            );
            if (!res.ok) {
                throw new Error(
                    `Network response was not ok: ${res.statusText}`
                );
            }
            const resData = await res.json();
            setData((prevData) => {
                const machineIndex = prevData.findIndex(
                    (item) => item.machine === machine
                );
                if (machineIndex !== -1) {
                    // Replace existing machine data
                    const newData = [...prevData];
                    newData[machineIndex] = { machine, data: resData };
                    return newData;
                } else {
                    // Add new machine data
                    return [...prevData, { machine, data: resData }];
                }
            });
        } catch (error) {
            console.error("Fetching data failed:", error);
        }
    };

    const TRS = calculateAverageKPI(data, "TRS");
    const TD = calculateAverageKPI(data, "TD");
    const TQ = calculateAverageKPI(data, "TQ");
    const TP = calculateAverageKPI(data, "TP");
    const TDech = calculateAverageKPI(data, "TDech");

    let QP = 0;
    for (const machine of data) {
        QP += machine?.data?.OF?.QP ?? 0;
    }
    QP = QP / data.length;

    let QNC = 0;
    for (const machine of data) {
        for (const NC in machine?.data?.NC ?? {}) {
            QNC += machine?.data?.NC[NC] ?? 0;
        }
    }
    QNC = QNC / data.length;

    let QD = 0;
    for (const machine of data) {
        QD += machine?.data?.OF?.QD ?? 0;
    }
    QD = QD / data.length;

    machineData["UAP-Assemblage"].KPIs.TRS = TRS;
    machineData["UAP-Assemblage"].KPIs.TP = TP;
    machineData["UAP-Assemblage"].KPIs.TD = TD;
    machineData["UAP-Assemblage"].KPIs.TQ = TQ;
    machineData["UAP-Assemblage"].KPIs.Tde = TDech;
    machineData["UAP-Assemblage"].Quantities["Qté Conf  [batterie]"] = QP;
    machineData["UAP-Assemblage"].Quantities["Qté NC [batterie]"] = QNC;
    machineData["UAP-Assemblage"].Quantities["Qté déchet [Kg]"] = QD;
    machineData["UAP-Assemblage"].OFs["TBS"] = data[0]?.data?.OF?.NOF;

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
                        data={machineData["UAP-Assemblage"]}
                    />
                </Grid>
                {/* <Grid>
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
                </Grid> */}
            </Grid>
        </Container>
    );
};

export default UapList;
