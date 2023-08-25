import { NextPage } from "next";
import Profile from "../../features/ask/components/profile/profile";

const Ask: NextPage = () => {
  return (
    <div className="flex flex-col items-center mt-48">
      <div className="flex flex-col w-full sm:w-8/12 md:w-6/12 lg:w-4/12">
        <Profile />
      </div>
    </div>
  );
};

export default Ask;
