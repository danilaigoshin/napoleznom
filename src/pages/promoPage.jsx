import styled from "styled-components";
import { promocodes } from "../JS/promoTexts";
import { Container, Section } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import PromoItem from "../components/promoItem";

export function PromoPage(){
    return(
        <Section>
            <Container>
                <TitleH3>Промокоды</TitleH3>
                    {promocodes.map((promoItem) => (
                        <PromoItem key={promoItem.id} {...promoItem}/>
                    ))}
            </Container>
        </Section>
    )
}