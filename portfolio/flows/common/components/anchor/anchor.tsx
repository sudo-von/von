import { ComponentPropsWithoutRef, FC } from "react";

type AnchorProps = Pick<
  ComponentPropsWithoutRef<"a">,
  "children" | "href" | "target"
>;

const Anchor: FC<AnchorProps> = ({ children, href, target }) => {
  return (
    <a href={href} target={target}>
      {children}
    </a>
  );
};

export default Anchor;
