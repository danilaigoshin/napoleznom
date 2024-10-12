import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Container, Section } from "../components/section&container";
import ButtonElem from "../components/button";
import ProductDetailsItem from "../components/productDetailsItem";
import { products } from "../JS/productTexts";




export default function ProductDetails() {
    const navigate = useNavigate();
    const { productId } = useParams();

    const scrollToTop = () => {
        window.scrollTo({top: 0});
    }

    const goBack = () => {
        navigate(-1);
        setTimeout(scrollToTop, 1);
    }

    useEffect(() => {
        scrollToTop();
    }, []);


    const product = products.find((p) => p.id === parseInt(productId));


    return (
        <Section>
            <Container>
                <ButtonElem onClick={goBack} style={{gap: ".3em"}}>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 9.5H4" stroke="#739544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9 15.5L4 10L9 4.5" stroke="#739544" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Назад</span>
                </ButtonElem>
                <ProductDetailsItem
                    id={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                />
            </Container>
        </Section>
    );
}
