import { NextPage } from "next";
import OutOfService from "../components/out-of-service/out-of-service";
import CenteredLayout from "../layouts/centered-layout/centered-layout";

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
