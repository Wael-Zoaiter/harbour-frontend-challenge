import { Header } from "Components";
import { FC } from "react";
import { ScholarshipPage } from "Types";
import { ScholarshipDetailsWrapper } from "./Styles";

const ScholarshipDetails: FC<{ data?: ScholarshipPage }> = ({ data }) => {
  return (
    <ScholarshipDetailsWrapper>
      <Header
        name={data?.scholarship?.program?.name || ''}
      />
    </ScholarshipDetailsWrapper>
  );
};

export default ScholarshipDetails;