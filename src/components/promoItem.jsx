import styled from "styled-components";
import { TitleH4, Paragraph } from "./Texts";
import { breakpoints } from "./breakpoints";

const PromoItemWrapper = styled.a`
display: flex;
justify-content: space-between;
gap: 10px;
max-width: max(fit-content, 792px);
height: max-content;
background-color: var(--whiteColor);
margin: 1em auto;
border: 1px solid var(--borderGrey);
border-radius: 15px;
padding: 1em 1.5em;

@media(max-width: ${breakpoints.mobile}){
    flex-direction: column;
    justify-content: center;
}
`

const PromoItemIcon = styled.div`
flex-grow: 0;
margin: auto;
`
const PromoItemDescription = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
justify-content: center;
gap: .5em;
text-align: center;

@media(max-width: ${breakpoints.tablet}){
    align-items: end;
}
@media(max-width: ${breakpoints.mobile}){
    align-items: center;
}
`

const PromoItemTitle = styled(TitleH4)`
color: var(--mainGreen);
text-transform: uppercase;
font-family: var(--font-family-1), sans-serif;
`

const PromoItemContent = styled(Paragraph)`
text-wrap: wrap;
`
export default function PromoItem({id, icon, title, content, link}){
    return(
        <PromoItemWrapper href={link}>
            <PromoItemIcon>{icon}</PromoItemIcon>
            <PromoItemDescription>
                <PromoItemTitle>{title}</PromoItemTitle>
                <PromoItemContent>{content}</PromoItemContent>
            </PromoItemDescription>
        </PromoItemWrapper>
    )
}

function createSVGElement(svgString) {
    return (
        <span
            dangerouslySetInnerHTML={{ __html: svgString }}
            aria-hidden="true"
        />
    );
}

export {createSVGElement}