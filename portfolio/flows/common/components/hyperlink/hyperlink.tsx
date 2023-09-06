import Link from "next/link";
import { FC, ReactNode } from "react";

export type HyperlinkProps = {
  children: ReactNode;
  path: string;
  replace?: boolean;
};

const Hyperlink: FC<HyperlinkProps> = ({ children, path, replace }) => {
  return (
    <Link href={path} replace={replace}>
      {children}
    </Link>
  );
};

export default Hyperlink;
