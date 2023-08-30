import { FC } from "react";
import Content, { ContentProps } from "../content/content";

export type ContentListProps = {
  contents: ContentProps[];
};

const ContentList: FC<ContentListProps> = ({ contents = [] }) => {
  return (
    <>
      {contents.map(({ media, title, subtitle, description }) => (
        <div key={title} className="grid lg:grid-cols-2 gap-8 mb-56 lg:mb-96">
          <Content
            media={media}
            title={title}
            subtitle={subtitle}
            description={description}
          />
        </div>
      ))}
    </>
  );
};

export default ContentList;
