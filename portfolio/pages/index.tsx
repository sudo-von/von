import { NextPage } from "next";
import HeightLayout from "../layouts/HeightLayout/HeightLayout";
import OutOfService from "../components/OutOfService/OutOfService";

const Home: NextPage = () => {
  return (
    <HeightLayout>
      <OutOfService
        title="VoN"
        description="This page is under construction."
      />
    </HeightLayout>
  );
};

export default Home;
