import { FC } from "react";
import Content, { ContentProps } from "@home/components/content/content";

export type ContentListProps = {
  contents: ContentProps[];
};

const ContentList: FC<ContentListProps> = ({ contents = [] }) => {
  return (
    <>
      {contents.map(({ description, media, subtitle, title }) => (
        <Content
          description={description}
          key={title}
          media={media}
          subtitle={subtitle}
          title={title}
        />
      ))}
    </>
  );
};

export default ContentList;
