import { FC } from "react";
import Hyperlink from "../hyperlink/hyperlink";
import Icon from "../icon/icon";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import HyperlinkDescription from "./components/hyperlink-description/hyperlink-description";

type PreviousPageProps = {
  page: string;
};

const PreviousPage: FC<PreviousPageProps> = ({ page }) => {
  return (
    <Hyperlink path={page} replace>
      <div className="flex flex-row justify-start items-center gap-2.5 cursor-pointer">
        <Icon icon={IoArrowBackCircleSharp} color="dark" />
        <HyperlinkDescription>Back to the previous page</HyperlinkDescription>
      </div>
    </Hyperlink>
  );
};

export default PreviousPage;
