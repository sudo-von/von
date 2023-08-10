import { NextPage } from "next";
import CenteredLayout from "../layouts/centered-layout/centered-layout";
import OutOfService from "../features/common/components/out-of-service/out-of-service";

const InternalServer: NextPage = () => {
  return (
    <CenteredLayout>
      <OutOfService
        title="500"
        description="Oops, something went wrong. Please try again later."
      />
    </CenteredLayout>
  );
};

export default InternalServer;
