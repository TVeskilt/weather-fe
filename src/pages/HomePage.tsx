import WeatherTable from "@/components/WeatherTable.tsx";
import Page from "@/components/Page.tsx";

const HomePage = () => {
  return (
    <Page title="Weather">
      <WeatherTable />
    </Page>
  );
};

export default HomePage;
