import styled from "styled-components";
import { Paragraph, TitleH3, TitleH5 } from "./Texts";
import ButtonElem from "./button";
import { breakpoints } from "./breakpoints";

const ProductDetailsItemWrapper = styled.div`
    display: flex;
    max-height: fit-content;
    margin: 2vw auto;

    @media (max-width: ${breakpoints.mobile}){
        flex-direction: column;
        margin: 3vw auto;
    }
`;

const ProductDetaisItemImage = styled.img`
    width: 44%;
    max-height: 505px;
    object-fit: cover;
    border-radius: 20px;
    flex-shrink: 0;

    @media (max-width: ${breakpoints.tablet}){
        width: 50%;
    }
    @media (max-width: ${breakpoints.mobile}){
        width: 100%;
        aspect-ratio: 3 / 2;
    }
`;

const ProductDetailsItemContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    padding: 0 4vw 2vw;

    @media (max-width: ${breakpoints.mobile}){
        padding: 0 0 2vw;
    }
`;

const ProductDetailsItemPrice = styled(TitleH5)`
    font-size: 24px;
    margin: 2.5vw 0 1em;

    @media (max-width: ${breakpoints.mobile}){
        font-size: clamp(18px, 4vw, 24px)
    }
`;

const ProductDetailsItemButton = styled(ButtonElem)`
    min-width: 195px;

    @media (max-width: ${breakpoints.mobile}){
        width: 100%;
    }
`;

export default function ProductDetailsItem({ id, image, title, description, price }) {
    return (
        <ProductDetailsItemWrapper>
            <ProductDetaisItemImage src={image} />
            <ProductDetailsItemContent>
                <TitleH3>{title}</TitleH3>
                <Paragraph>{description}</Paragraph>
                <ProductDetailsItemPrice>{price}</ProductDetailsItemPrice>
                <ProductDetailsItemButton isColored>Купить</ProductDetailsItemButton>
            </ProductDetailsItemContent>
        </ProductDetailsItemWrapper>
    );
}
