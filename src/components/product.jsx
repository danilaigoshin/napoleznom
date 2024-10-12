import styled from "styled-components";
import { TitleH5 } from "./Texts";
import ButtonElem from "./button";
import { useNavigate } from "react-router-dom";
import { breakpoints } from "./breakpoints";

const ProductItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    background-color: var(--whiteColor);
    border: 1px solid var(--borderGrey);
    border-radius: 20px;
    overflow: hidden;
    
    @media (max-width: ${breakpoints.extraSmallMobile}){
        border-radius: 14px;
    }
`;

const ProductItemImage = styled.img`
    width: 100%;
    max-height: 270px;
    aspect-ratio: 1.4 / 1;
    object-fit: cover;
`;

const ProductItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
    padding: 1.5em;
`;

const ProductItemTitle = styled(TitleH5)`
    flex-grow: 1;
    height: fit-content;

    @media (max-width: ${breakpoints.mobile}){
        font-size: 18px;
    }
`;

const ProductItemButton = styled(ButtonElem)`
    width: 100%;
    margin: 1.5em auto;

    @media (max-width: ${breakpoints.extraSmallMobile}){
        font-size: 14px;
    }
`;

const ProductItemLink = styled.a`
    font-weight: 600;
    color: var(--mainGreen);
    text-align: center;
    text-wrap: pretty;
    font-family: var(--font-family-2);
    font-size: 16px;
    line-height: 1.5em;
    cursor: pointer;

    &:hover {
        color: var(--mainGreenHovered);
    }

    @media (max-width: ${breakpoints.extraSmallMobile}){
        font-size: 14px;
    }
`;



export default function ProductItem({ id, image, title, price, details, onLinkClick }) {
    const navigate = useNavigate();
    const handleLinkClick = () => {
        navigate(`/Igoshina/productDetails/${id}`);
        window.scrollTo(0, 0);
    };

    return (
        <ProductItemWrapper>
            <ProductItemImage src={image} />
            <ProductItemContent>
                <ProductItemTitle>{title}</ProductItemTitle>
                <ProductItemButton isColored>Купить — {price}</ProductItemButton>
                <ProductItemLink onClick={handleLinkClick}>{details}</ProductItemLink>
            </ProductItemContent>
        </ProductItemWrapper>
    );
}

