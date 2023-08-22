import Link from "next/link";
import { FC, ReactNode } from "react";

export type HyperlinkProps = {
  path: string;
  children: ReactNode;
};

const Hyperlink: FC<HyperlinkProps> = ({ path, children }) => {
  return <Link href={path}>{children}</Link>;
};

export default Hyperlink;
