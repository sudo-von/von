import { NextPage } from "next";
import CenteredLayout from "../layouts/CenteredLayout/CenteredLayout";
import OutOfService from "../components/OutOfService/OutOfService";

const NotFound: NextPage = () => {
  return (
    <CenteredLayout>
      <OutOfService title="404" description="This page could not be found." />
    </CenteredLayout>
  );
};

export default NotFound;
