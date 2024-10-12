import styled from "styled-components";
import { useState, useEffect } from "react";
import { Container, Section } from "../components/section&container";
import { TitleH3 } from "../components/Texts";
import { products } from "../JS/productTexts";
import ProductItem from "../components/product";
import { ProductsWrapper } from "../pages/products";
import ButtonElem from "../components/button";
import ProductDetailsItem from "../components/productDetailsItem";
import { useNavigate, useParams } from "react-router-dom";
import { breakpoints } from "../components/breakpoints";

const Recommendations = styled(Section)`
  padding-bottom: 50px;
`;

const RecommendationsButton = styled(ButtonElem)`
  margin: 2em auto;
  min-width: 255px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;

export default function RecommendationSection() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [buttonText, setButtonText] = useState("Все рецепты");

  const handleProductLinkClick = (productId) => {
    navigate(`/Igoshina/productDetails/${productId}`);
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 960) {
        setVisibleProducts(2);
      } else {
        setVisibleProducts(3);
      }

      if (window.innerWidth <= 640) {
        setButtonText("Показать еще");
      } else {
        setButtonText("Все рецепты");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredProducts = products.filter(
    (product) => product.id !== parseInt(productId)
  );

  return (
    <Recommendations>
      <Container>
        <TitleH3>Вам также может понравиться</TitleH3>
        <ProductsWrapper>
          {filteredProducts.slice(0, visibleProducts).map((product) => (
            <ProductItem
              key={product.id}
              {...product}
              onLinkClick={handleProductLinkClick}
            />
          ))}
        </ProductsWrapper>
        <RecommendationsButton to="/Igoshina/products">{buttonText}</RecommendationsButton>
        {selectedProduct && (
          <ProductDetailsItem
            id={selectedProduct.id}
            image={selectedProduct.image}
            title={selectedProduct.title}
            description={selectedProduct.description}
            price={selectedProduct.price}
          />
        )}
      </Container>
    </Recommendations>
  );
}

