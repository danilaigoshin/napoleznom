import styled from "styled-components";
import { useState } from "react";
import { Section, Container } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import ProductItem from "../components/product";
import { products } from "../JS/productTexts";
import ButtonElem from "../components/button";
import { Helmet } from "react-helmet-async";
import { breakpoints } from "../components/breakpoints";

export const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    gap: 20px;

    @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.smallMobile}){
        grid-template-columns: 1fr;
    }
`

const ProductsButton = styled(ButtonElem)`
    margin: 2em auto;

    @media (max-width: ${breakpoints.tablet}){
        width: 100%;
    }
`

export default function ProductsSection() {
    const [visibleProducts, setVisibleProducts] = useState(6);

    const loadMoreProducts = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };


    const displayedProducts = products.slice(0, visibleProducts);

    return (
        <>
        <Helmet>
            <title>Сборники продуктов</title>
            <meta name="description" content="Сборники продуктов" />

        </Helmet>
        <Section>
            <Container>
                <TitleH3>Сборники рецептов</TitleH3>
                <ProductsWrapper>
                    {displayedProducts.map((product) => (
                        <ProductItem
                            key={product.id}
                            {...product}
                        />
                    ))}
                </ProductsWrapper>
                {visibleProducts < products.length && (
                    <ProductsButton onClick={loadMoreProducts}>
                        Показать еще
                    </ProductsButton>
                )}
            </Container>
        </Section>
        </>
        
    );
}