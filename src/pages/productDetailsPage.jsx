import ProductDetails from "../sections/productDetailsSection";
import RecommendationSection from "../sections/recommendations";
import { Helmet } from "react-helmet-async";

export default function ProductDetailsPage() {
    return (
        <>
            <Helmet>
                <title>Сборники продуктов</title>
                <meta name="description" content="Сборники продуктов" />
            </Helmet>
            <ProductDetails />
            <RecommendationSection />
        </>
    );
}
