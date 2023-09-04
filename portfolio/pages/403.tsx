import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import OutOfService from "@common/components/out-of-service/out-of-service";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const Forbidden: NextPage = () => {
  return (
    <MetaLayout title="Page access forbidden" description="You are not authorized to view this page.">
      <CenteredLayout>
        <OutOfService title="403" description="You are not authorized to view this page." />
      </CenteredLayout>
    </MetaLayout>
  );
};

export default Forbidden;
