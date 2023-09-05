import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import OutOfService from "@common/components/out-of-service/out-of-service";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const Forbidden: NextPage = () => {
  return (
    <MetaLayout description="You are not authorized to view this page." title="Page access forbidden">
      <CenteredLayout>
        <OutOfService description="You are not authorized to view this page." title="403" />
      </CenteredLayout>
    </MetaLayout>
  );
};

export default Forbidden;
