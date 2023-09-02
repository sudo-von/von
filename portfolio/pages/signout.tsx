import { NextPage } from "next";
import Loader from "@common/components/loader/loader";
import useSignout from "@signout/hooks/use-signout/use-signout";
import CenteredLayout from "@common/layouts/centered-layout/centered-layout";
import SignoutHeader from "@signout/components/signout-header/signout-header";

const Signout: NextPage = () => {
  useSignout();
  return (
    <CenteredLayout>
      <div className="flex flex-col justify-center items-center gap-2.5">
        <Loader color="dark" />
        <SignoutHeader heading="Signing out" subheading="Come back soon!" />
      </div>
    </CenteredLayout>
  );
};

export default Signout;
