import styled from "styled-components";
import { Paragraph } from "./Texts";
import { breakpoints } from "./breakpoints";

const WorkParagraph = styled(Paragraph)`
  display: flex;
  gap: 1em;
  width: 100%;
  color: var(--secondaryText);
  
  @media (max-width: ${breakpoints.mobile}){
    line-height: 1.3em;
}
  
  svg {
    flex-shrink: 0;
  }

  span {
    flex-grow: 1;
  }
`;

export default function WorkItem({ content }) {
  return (
    <WorkParagraph>
      <svg width="14" height="24" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1L4.75 9L1 5.36364" stroke="#739544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{content}</span>
    </WorkParagraph>
  );
}