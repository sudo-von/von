import { FC } from "react";
import Section from "../section/section";
import Banner from "../../../../components/banner/banner";

export type ResumeProps = {
  name: string;
  quote: string;
  interest: string;
  position: string;
};

const Resume: FC<ResumeProps> = ({ name, quote, interest, position }) => {
  return (
    <>
      <Banner>{name}</Banner>
      <Section title={position} subtitle={interest} description={quote} />
    </>
  );
};

export default Resume;
