import React from "react";
import Typography from "../Typography/Typography";

const UnderConstruction = () => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Typography size="large">404</Typography>
      <Typography weight="light" color="secondary">
        |
      </Typography>
      <Typography weight="light" color="secondary">
        This page is under construction.
      </Typography>
    </div>
  );
};

export default UnderConstruction;
