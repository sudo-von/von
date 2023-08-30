import { FC } from "react";
import Content, { ContentProps } from "../content/content";

export type ContentListProps = {
  contents: ContentProps[];
};

const ContentList: FC<ContentListProps> = ({ contents = [] }) => {
  return (
    <>
      {contents.map(({ description, media, subtitle, title }) => (
        <Content
          key={title}
          description={description}
          media={media}
          subtitle={subtitle}
          title={title}
        />
      ))}
    </>
  );
};

export default ContentList;
