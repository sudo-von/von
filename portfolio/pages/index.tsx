import { NextPage } from "next";
import CenteredLayout from "../layouts/centered-layout/centered-layout";
import OutOfService from "../components/out-of-service/out-of-service";

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
