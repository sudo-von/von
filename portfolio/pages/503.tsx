import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import OutOfService from "@common/components/out-of-service/out-of-service";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const InProgress: NextPage = () => {
  return (
    <MetaLayout description="This page is under construction." title="Page in progress">
      <CenteredLayout>
        <OutOfService title="503" description="This page is under construction." />
      </CenteredLayout>
    </MetaLayout>
  );
};

export default InProgress;
