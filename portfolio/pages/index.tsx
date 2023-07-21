import { NextPage } from "next";
import VerticalAlignLayout from "../layouts/VerticalAlignLayout/VerticalAlignLayout";
import OutOfService from "../components/OutOfService/OutOfService";

const Home: NextPage = () => {
  return (
    <VerticalAlignLayout>
      <OutOfService
        title="VoN"
        description="This page is under construction."
      />
    </VerticalAlignLayout>
  );
};

export default Home;
