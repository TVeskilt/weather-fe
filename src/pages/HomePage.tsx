import Page from "../components/Page.tsx";
import WeatherTable from "../components/WeatherTable.tsx";

const HomePage = () => {
  return (
    <Page title="Weather">
      <WeatherTable />
    </Page>
  );
};

export default HomePage;
