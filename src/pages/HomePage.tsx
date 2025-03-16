import WeatherTable from "src/components/WeatherTable.tsx";
import Page from "src/components/Page.tsx";

const HomePage = () => {
  return (
    <Page title="Weather">
      <WeatherTable />
    </Page>
  );
};

export default HomePage;
