import { NextPage } from "next";
import Header from "@common/components/header/header";
import Loader from "@common/components/loader/loader";
import useSignout from "@signout/hooks/use-signout/use-signout";
import MetaLayout from "@common/layouts/meta-layout/meta-layout";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";

const Signout: NextPage = () => {
  useSignout();
  return (
    <MetaLayout description="Come back soon." title="Sign out from sudo-von.com">
      <CenteredLayout>
        <div className="flex flex-col justify-center items-center gap-2.5">
          <Loader color="dark" />
          <Header heading="Signing out" subheading="Come back soon!" />
        </div>
      </CenteredLayout>
    </MetaLayout>
  );
};

export default Signout;
