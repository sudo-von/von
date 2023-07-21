import { NextPage } from "next";
import VerticalAlignLayout from "../layouts/VerticalAlignLayout/VerticalAlignLayout";
import OutOfService from "../components/OutOfService/OutOfService";

const NotFound: NextPage = () => {
  return (
    <VerticalAlignLayout>
      <OutOfService title="404" description="This page could not be found." />
    </VerticalAlignLayout>
  );
};

export default NotFound;
