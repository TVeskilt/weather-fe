import { Box, Grid2 as Grid, Typography } from "@mui/material";

interface PageHeaderProps {
  heading: string;
}

export default function PageHeader({ heading }: PageHeaderProps) {
  return (
    <Box sx={{ mb: 4, alignItems: "center" }}>
      <Grid direction="row" alignItems="center">
        <Box display="flex" alignItems="center" sx={{ gap: 2 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Grid>
    </Box>
  );
}
