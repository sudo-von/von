import { NextPage } from "next";
import OutOfService from "../components/OutOfService/OutOfService";

const NotFound: NextPage = () => {
  return (
    <OutOfService title="404" description="This page could not be found." />
  );
};

export default NotFound;
