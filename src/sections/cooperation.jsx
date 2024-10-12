import styled from "styled-components";
import { TitleH3 } from "../components/Texts";
import { coopTexts } from "../JS/cooperationTexts";
import CooperationItem from "../components/cooperationItem";
import { Section, Container } from "../components/section&container";


const CooperationContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;
`;

export default function CooperationSection() {
    return (
        <Section>
            <Container>
                <TitleH3>Форматы работы</TitleH3>
                <CooperationContent>
                    {coopTexts.map((coopText, index) => (
                        <CooperationItem
                            key={coopText.title}
                            {...coopText}
                            $isLast={index === coopTexts.length - 1}
                        />
                    ))}
                </CooperationContent>
            </Container>
        </Section>
    );
}