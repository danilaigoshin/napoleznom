import styled from "styled-components";
import { Paragraph } from "./Texts";
import { breakpoints } from "./breakpoints";

const PrefItemWrapper = styled.div`
display: flex;
flex-direction: row;
height: auto;
padding: 1.4em 0;
gap: 1.3em;
border-bottom: 1px solid var(--borderGrey);

@media (max-width: ${breakpoints.tablet}){
    width: 100%;
}

@media (max-width: ${breakpoints.mobile}){
    padding: 0.8em 0;
}
`

export default function PrefItem({number, content}){
    return(
        <PrefItemWrapper>
            <Paragraph style={{color: "var(--mainGreen)"}}>{number}</Paragraph>
            <Paragraph>{content}</Paragraph>
        </PrefItemWrapper>
    )
    

}

