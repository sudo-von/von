import { NextPage } from "next";
import VerticalAlignLayout from "../../layouts/VerticalAlignLayout/VerticalAlignLayout";
import OutOfService from "../../components/OutOfService/OutOfService";

const Blog: NextPage = () => {
  return (
    <VerticalAlignLayout>
      <OutOfService
        title="VoN"
        description="This page is under construction."
      />
    </VerticalAlignLayout>
  );
};

export default Blog;
