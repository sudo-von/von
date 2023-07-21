import { NextPage } from "next";
import CenteredLayout from "../layouts/CenteredLayout/CenteredLayout";
import OutOfService from "../components/out-of-service/out-of-service";

const NotFound: NextPage = () => {
  return (
    <CenteredLayout>
      <OutOfService title="404" description="This page could not be found." />
    </CenteredLayout>
  );
};

export default NotFound;
