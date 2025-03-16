import { PropsWithChildren } from "react";
import { Grid2 as Grid } from "@mui/material";
import PageHeader from "src/components/PageHeader.tsx";

interface Props extends PropsWithChildren {
  title: string;
}

const Page = ({ children, title = "" }: Props) => (
  <>
    <title>{title}</title>
    <Grid container>
      <Grid sx={{ flexGrow: 1, mx: "auto", px: 8, maxWidth: 1280, justifyContent: "center" }}>
        <PageHeader heading="test" />
        {children}
      </Grid>
    </Grid>
  </>
);

export default Page;
