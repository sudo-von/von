import { NextPage } from "next";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import OutOfService from "@common/components/out-of-service/out-of-service";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const Unavailable: NextPage = () => {
  return (
    <MetaLayout description="Oops, something went wrong." title="Page unavailable">
      <CenteredLayout>
        <OutOfService title="500" description="Oops, something went wrong." />
      </CenteredLayout>
    </MetaLayout>
  );
};

export default Unavailable;
