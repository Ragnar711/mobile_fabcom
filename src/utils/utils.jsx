export const calculateAverageKPI = (data, kpi) => {
    let total = 0;
    for (const machine of data) {
        total += machine?.data?.KPIs?.[kpi] ?? 0;
    }
    return total / data.length;
};

export function getPoste() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 14) {
        return "Matin";
    } else if (currentHour >= 14 && currentHour < 22) {
        return "Après-midi";
    } else {
        return "Nuit";
    }
}
