import { NextPage } from "next";
import CenteredLayout from "../layouts/CenteredLayout/CenteredLayout";
import OutOfService from "../components/OutOfService/OutOfService";

const Home: NextPage = () => {
  return (
    <CenteredLayout>
      <OutOfService
        title="VoN"
        description="This page is under construction."
      />
    </CenteredLayout>
  );
};

export default Home;
