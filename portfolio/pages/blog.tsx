import { NextPage } from "next";
import CenteredLayout from "../layouts/centered-layout/centered-layout";
import OutOfService from "../features/common/components/out-of-service/out-of-service";

const Blog: NextPage = () => {
  return (
    <CenteredLayout>
      <OutOfService
        title="VoN"
        description="This page is under construction."
      />
    </CenteredLayout>
  );
};

export default Blog;
