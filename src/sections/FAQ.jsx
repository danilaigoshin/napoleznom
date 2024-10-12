import styled from "styled-components";
import { TitleH3 } from "../components/Texts";
import { FAQTexts } from "../JS/FAQTexts";
import FAQItem from "../components/FAQItem";
import { Section, Container } from "../components/section&container";


export default function FAQSection(){
    return(
        <Section>
            <Container>
                <TitleH3>Часто задаваемые вопросы:</TitleH3>
                {FAQTexts.map((FAQText) => (
                        <FAQItem key={FAQText.title} {...FAQText} />
                    ))}
            </Container>
        </Section>
    )
}