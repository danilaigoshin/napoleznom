import styled from "styled-components";
import { Container } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import WorkFormatItem from "../components/workformatItem";
import { formatDescriptions } from "../JS/workTexts";
import { breakpoints } from "../components/breakpoints";


const WorkFormatWrapper = styled(Container)`
width: min(95%, 1240px);
padding: 50px 0;

@media (max-width: ${breakpoints.tablet}){
  width: 100%;
}
`

const WorkFormatContainer = styled(Container)`
padding: 0;
`

export default function WorkFormatSection() {
  return (
      <WorkFormatWrapper>
      <WorkFormatContainer>
          <TitleH3>Форматы работы</TitleH3>
      </WorkFormatContainer>
          {formatDescriptions.map((formatDescription, index) => (
            <WorkFormatItem key={formatDescription.title} index={index + 1} {...formatDescription}/>
          ))}
        
      </WorkFormatWrapper>
  );
}