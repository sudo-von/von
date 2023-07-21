import { NextPage } from "next";
import CenteredLayout from "../../layouts/CenteredLayout/CenteredLayout";
import OutOfService from "../../components/OutOfService/OutOfService";

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
