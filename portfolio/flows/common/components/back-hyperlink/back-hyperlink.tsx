import { FC } from "react";
import Hyperlink, { HyperlinkProps } from "../hyperlink/hyperlink";
import Icon from "../icon/icon";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import HyperlinkDescription from "./components/hyperlink-description/hyperlink-description";

type BackHyperlinkProps = HyperlinkProps;

const BackHyperlink: FC<BackHyperlinkProps> = ({ children, path }) => {
  return (
    <Hyperlink path={path} replace>
      <div className="flex flex-row justify-start items-center gap-2.5 cursor-pointer">
        <Icon icon={IoArrowBackCircleSharp} color="dark" />
        <HyperlinkDescription>{children}</HyperlinkDescription>
      </div>
    </Hyperlink>
  );
};

export default BackHyperlink;
