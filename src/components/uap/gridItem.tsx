import { Grid, Box, Typography } from "@mui/material";
const titleStyle = { fontWeight: "bold", marginBottom: "-5px" };
const valueStyle = {
  border: "1px solid black",
  borderRadius: 2,
  padding: "4px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "120px", // Fixed width, adjust as needed
  height: "30px", // Fixed height, adjust as needed
  overflow: "hidden", // Ensure content does not overflow
  textOverflow: "ellipsis", // Handle overflow text gracefully
  whiteSpace: "nowrap", // Prevent text from wrapping
};
interface GridItemProps {
  title: string;
  subtitle: string;
  value: string;
}
const GridItem = ({ title, subtitle, value }: GridItemProps) => {
  return (
    <>
      <Grid item xs={7}>
        <Box>
          <Typography variant="subtitle2" sx={titleStyle}>
            {title}
          </Typography>
          <Typography variant="caption">{subtitle}</Typography>
        </Box>
      </Grid>
      <Grid item xs={5} container justifyContent="flex-end">
        <Box sx={valueStyle}>
          <Typography variant="body2">{value}</Typography>
        </Box>
      </Grid>
    </>
  );
};

export default GridItem;
