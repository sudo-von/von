import { NextPage } from "next";
import Typography from "../components/Typography/Typography";

const NotFound: NextPage = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Typography size="large">404</Typography>
      <Typography weight="light" color="secondary">
        |
      </Typography>
      <Typography weight="light" color="secondary">
        This page could not be found.
      </Typography>
    </div>
  );
};

export default NotFound;
