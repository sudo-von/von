import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import OutOfService from "@common/components/out-of-service/out-of-service";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const NotFound: NextPage = () => {
  return (
    <MetaLayout title="Page not found" description="This page could not be found.">
      <CenteredLayout>
        <OutOfService title="404" description="This page could not be found." />
      </CenteredLayout>
    </MetaLayout>
  );
};

export default NotFound;
