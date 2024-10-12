import styled from "styled-components";
import { Section, Container } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import { specializationTexts } from "../JS/specializationText";
import SpecializationItem from "../components/specializationItem";
import { breakpoints } from "../components/breakpoints";

const SpecializationInner = styled(Container)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(auto, 1fr);
    column-gap: 2.5%;
    width: 100%;
    height: auto;

    @media(width<=1080px){
        padding: 0;
    }

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.smallMobile}){
        grid-template-columns: 1fr;
    }
`

export default function SpecializationSection(){
    return(
        <Section>
            <Container style={{height: "fit-content"}}>
                <TitleH3>Специализация</TitleH3>
                <SpecializationInner>
                {specializationTexts.map((specializationText) => (
                        <SpecializationItem hasBorder key={specializationText.content} {...specializationText} />
                    ))}
                </SpecializationInner>
                
            </Container>
        </Section>
    )
}