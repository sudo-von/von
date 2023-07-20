import { NextPage } from "next";
import HeightLayout from "../layouts/HeightLayout/HeightLayout";
import OutOfService from "../components/OutOfService/OutOfService";

const NotFound: NextPage = () => {
  return (
    <HeightLayout>
      <OutOfService title="404" description="This page could not be found." />
    </HeightLayout>
  );
};

export default NotFound;
