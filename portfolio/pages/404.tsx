import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import OutOfService from "@common/components/out-of-service/out-of-service";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const NotFound: NextPage = () => {
  return (
    <MetaLayout description="This page could not be found." title="Page not found">
      <CenteredLayout>
        <OutOfService description="This page could not be found." title="404" />
      </CenteredLayout>
    </MetaLayout>
  );
};

export default NotFound;
