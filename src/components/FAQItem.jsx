import styled from "styled-components";
import { Paragraph, TitleH4 } from "./Texts";
import RoundButtonElem from "./roundButton";
import { useState } from "react";
import { breakpoints } from "./breakpoints";

const FAQItemWrapper = styled.div`
border-top: 1px solid var(--borderGrey);
border-bottom: 1px solid var(--borderGrey);

`
const FAQItemInner = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 3em;
padding: 1em 1em 1em 0;
cursor: pointer;

@media (max-width: ${breakpoints.mobile}){
        padding-right: 0;
    }
`
const FAQParagraph = styled(Paragraph)`
white-space: pre-line;
padding: 0 0 2em 1em;
width: 78%;

@media (max-width: ${breakpoints.mobile}){
    width: 85%;
}
`
export default function FAQItem({title, content}){
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return(
        <FAQItemWrapper>
            <FAQItemInner onClick={handleToggle}>
                <TitleH4>{title}</TitleH4>
                <RoundButtonElem minusHidden={isOpen}/>
            </FAQItemInner>
            {isOpen && <FAQParagraph>{content}</FAQParagraph>}
        </FAQItemWrapper>
    )
}

