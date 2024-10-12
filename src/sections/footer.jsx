import styled from "styled-components";
import { Paragraph } from "../components/Texts";
import { Container } from "../components/section&container";
import { breakpoints } from "../components/breakpoints";
import { Link } from "react-router-dom";

const FooterWrapper = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 1fr 44px;
    gap: 25px;
    padding: 50px 0 20px;
    grid-template-areas: "date links paragraph toTop";

    @media ( ${breakpoints.mobile} <= max-width: ${breakpoints.tablet}){
        padding: 20px 30px;
        }

        @media (max-width: ${breakpoints.tablet}){
        grid-template-columns: 50px 1fr 44px;
        grid-template-rows: auto auto;
        gap: 10px;
        grid-template-areas:
            "date links toTop"
            "paragraph paragraph paragraph";
            padding: 20px 10px;
    }

    @media (max-width: ${breakpoints.mobile}){
        grid-template-columns: 50px 1fr;
        grid-template-rows: repeat(4, auto);
        gap: 30px 5px;
        grid-template-areas:
            "date date"
            "links links"
            "span toTop"
            "paragraph paragraph";
    }
    
`
const DateParagraph = styled(Paragraph)`
    font-size: 14px;
    text-wrap: nowrap;
    color: var(--greyText);
    grid-area: date;
`

const FooterLinks = styled.div`
    display: flex;
    gap: 25px;
    padding: 0 2vw;
    grid-area: links;

    @media (max-width: ${breakpoints.smallTablet}){
        gap: 15px;
        padding: 0 1vw;
    }
    @media (max-width: ${breakpoints.mobile}){
        gap: 15px;
        padding: 0;
    }
    @media (max-width: ${breakpoints.smallMobile}){
        flex-direction: column;
        
    }
`

const FooterLink = styled(Link)`
    font-family: var(--font-family-2);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.55em;
    color: var(--greyText);
    text-wrap: nowrap;
    

    &:hover, &:focus{
        color: var(--blackText);
    }
`
const FooterParagraph = styled(Paragraph)`
    font-size: 12px; 
    color: var(--greyText); 
    max-width: 492px;
    text-wrap: wrap;
    grid-area: paragraph;

    @media (max-width: ${breakpoints.smallTablet}){
    }
`
const ToTopButton = styled.a`
    display: block;
    width: 44px;
    height: 44px;
    border: 1px solid var(--borderGreen);
    border-radius: 50%;
    background-color: transparent;
    position: relative;
    grid-area: toTop;

    &:hover, &:focus{
        border-color: var(--borderGreenHovered);
    }

    @media (max-width: ${breakpoints.smallMobile}){
        margin-bottom: 10px;
    }
`
const Arrow = styled.div`
    width: 11px;
    height: 11px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    color: transparent;
    transform: translate(-50%, -25%) rotate(45deg);
    border-color: var(--mainGreen) transparent transparent var(--mainGreen) ;
    border-style: solid;
    border-width: 1.5px;
`
export default function FooterElem() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Container>
            <FooterWrapper>
                <DateParagraph>2024 ©</DateParagraph>
                <FooterLinks>
                    <FooterLink to="/Igoshina/contacts">Контакты</FooterLink>
                    <FooterLink href="#">Политика конфиденциальности</FooterLink>
                    <FooterLink href="#">Договор оферты</FooterLink>
                </FooterLinks>
                <FooterParagraph>
                    Информация, размещенная на сайте не является призывом к действию, не несет медицинских диагнозов и носит исключительно ознакомительный характер
                </FooterParagraph>
                <ToTopButton onClick={scrollToTop}>
                    <Arrow />
                </ToTopButton>
            </FooterWrapper>
        </Container>
    );
}