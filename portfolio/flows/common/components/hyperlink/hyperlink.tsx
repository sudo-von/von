import Link from "next/link";
import { FC, ReactNode } from "react";

export type HyperlinkProps = {
  path: string;
  replace?: boolean;
  children: ReactNode;
};

const Hyperlink: FC<HyperlinkProps> = ({ children, path, replace }) => {
  return (
    <Link href={path} replace={replace}>
      {children}
    </Link>
  );
};

export default Hyperlink;
