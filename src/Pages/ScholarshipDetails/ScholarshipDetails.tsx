import { Header } from "Components";
import { FC } from "react";
import { ScholarshipPage } from "Types";
import IntroSection from "./Sections/Intro";
import AboutSection from "./Sections/About";
import DetailsSection from "./Sections/Details";
import SliderSection from "./Sections/Slider";
import FaqSection from "./Sections/Faq";
import { ScholarshipDetailsWrapper } from "./Styles";

const ScholarshipDetails: FC<{ data?: ScholarshipPage }> = ({ data }) => {
  return (
    <ScholarshipDetailsWrapper>
      <Header name={data?.scholarship?.program?.name || ''} />
      <IntroSection scholarship={data?.scholarship} />
      <AboutSection scholarship={data?.scholarship} />
      <DetailsSection scholarship={data?.scholarship} />
      <SliderSection testimonials={data?.testimonials} />
      <FaqSection faqs={data?.scholarship.faqs} />
    </ScholarshipDetailsWrapper>
  );
};

export default ScholarshipDetails;