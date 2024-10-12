import styled from "styled-components";
import { Paragraph } from "./Texts";



const EducationElemWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
gap: 1em;
padding: 1em 0;
border-bottom: 1px solid var(--borderGreen);
`
const EducationDate = styled(Paragraph)`
color: var(--greyText);
`



export function EducationItem({id, date, content}){
    return(
        <EducationElemWrapper>
            <EducationDate>{date}</EducationDate>
            <Paragraph>{content}</Paragraph>
        </EducationElemWrapper>
    )
}

const EducationLink = styled.span`
color: var(--mainGreen);
cursor: pointer;

&:hover{
    color: var(--mainGreenHovered);
}
`

export function EducationTypeItem({ id, date, content, link, onLinkClick, slideIndex }) {
    return (
        <EducationElemWrapper>
            <EducationDate>{date}</EducationDate>
            <Paragraph>
                {content}
                <EducationLink onClick={() => onLinkClick(slideIndex)}>
                    {link}
                </EducationLink>
            </Paragraph>
        </EducationElemWrapper>
    );
}
