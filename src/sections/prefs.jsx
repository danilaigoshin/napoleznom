import { prefTexts } from "../JS/prefTexts";
import styled from "styled-components";
import PrefItem from "../components/prefItem";
import { TitleH3 } from "../components/Texts";
import { Section, Container } from "../components/section&container";
import { breakpoints } from "../components/breakpoints";

const PrefsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 0;
    }
`;

export default function PrefSection() {
    return (
        <Section>
            <Container>
                <TitleH3>Вместе со мной вы</TitleH3>
                <PrefsContent>
                    <div>
                        {prefTexts.slice(0, 4).map((prefText) => (
                            <PrefItem key={prefText.number} {...prefText} />
                        ))}
                    </div>
                    <div>
                        {prefTexts.slice(4).map((prefText) => (
                            <PrefItem key={prefText.number} {...prefText} />
                        ))}
                    </div>
                </PrefsContent>
            </Container>
        </Section>
    );
}

