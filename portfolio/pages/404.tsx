import { NextPage } from "next";
import OutOfService from "../components/out-of-service/out-of-service";
import CenteredLayout from "../layouts/centered-layout/centered-layout";

const NotFound: NextPage = () => {
  return (
    <CenteredLayout>
      <OutOfService title="404" description="This page could not be found." />
    </CenteredLayout>
  );
};

export default NotFound;
