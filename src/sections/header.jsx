import styled from "styled-components";
import ButtonElem from "../components/button";
import { useEffect, useState, useRef} from "react";
import TelegramIcon from "../components/telegram";
import { Container } from "../components/section&container";
import { Link } from "react-router-dom";
import { breakpoints } from "../components/breakpoints";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    padding: 10px 40px;
    border-bottom: ${({ $fixed }) => ($fixed ? '1px solid var(--borderGrey)' : '')};
    background-color: ${({ $fixed }) => ($fixed ? 'var(--backgroundColor)' : '')};

    @media (max-width: ${breakpoints.tablet}){
        padding: 15px 40px;
    }
    @media (max-width: ${breakpoints.mobile}){
        padding: 15px 20px;
    }
    @media (max-width: ${breakpoints.smallMobile}){
        padding: 15px;
    }
`;

const HeaderInner = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media (${breakpoints.tablet}  <= max-width: 1080px){
        padding: 0 60px;
    }
    @media (max-width: ${breakpoints.tablet}){
        padding: 0;
    }
`

const Logo = styled(Link)`
    display: block;
    font-family: var(--font-family-2);
    font-weight: 500;
    font-size: 24px;
    color: ${({$visible}) => ($visible ? "transparent" : "var(--secondaryText)")};

    @media (max-width: ${breakpoints.mobile}){
        font-size: clamp(14.5px, 3.8vw, 24px);
        
    }
`;
const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.4em;

    @media (max-width: ${breakpoints.tablet}){
        display: none;
    }
`;

const NavItem = styled(Link)`
    display: block;
    font-family: var(--font-family-2);
    font-size: clamp(12px, 1.2vw, 16px);
    font-weight: 400;
    line-height: 1.5em;
    color: var(--secondaryText);
    text-wrap: nowrap;
    text-decoration: none;

    &:hover{
        color: var(--blackText);
    }

    @media (max-width: ${breakpoints.tablet}){
        font-size: 16px;
    }
`;
const NavItemBurger = styled(NavItem)`
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5em;
    margin: 7px 0;
`
const Triangle = styled.span`
width: 0;
height: 0;
transition: transform 0.3s linear;
border-style: solid;
border-width: 8px 5px 0 5px;
border-color: var(--secondaryText) transparent transparent transparent;
`;

const Submenu = styled.div`
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    position: absolute;
    top: 100%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, 20%);
    padding: 1em;
    border: 1px solid var(--borderGrey);
    border-radius: 8px;
    text-align: center;
    background-color: var(--backgroundColor);
    transition: all, .2s linear;

    
    &::before{
        content: "";
        position: absolute;
        top: -17%;
        left: 50%;
        border: solid var(--borderGrey);
        border-width: 0 1px 1px 0;
        padding: 7px;
        display: inline-block;
        transform: rotate(-135deg) translate(0%, -50%);
        -webkit-transform: rotate(-135deg) translate(0%, -50%);
        background-color: var(--backgroundColor);
    }
    `;
const SubmenuBurger = styled(Submenu)`
display: none;
position: relative;
top: 0;
left: 0;
transform: translate(0, 0);
text-align: left;
padding: 0;
background-color: #fff;
border: none;

&::before{
    display: none;
}
`
const SubmenuWrapper = styled.div`
    position: relative;
    vertical-align: top; 
    cursor: pointer;
    display: flex;
    flex-direction: ${({$visible}) => ($visible ? "column" : "row")};
    align-items: ${({$visible}) => ($visible ? "start" : "center")};
    gap: ${({$visible}) => ($visible ? "0" : "7px")};
    font-family: var(--font-family-2);
    font-size: clamp(12px, 1.2vw, 16px);
    font-weight: 400;
    line-height: 1.5em;
    color: var(--secondaryText);
    text-wrap: nowrap;

    &:hover{
        color: var(--blackText);
    }

    
    &:hover ${Triangle} {
        transform: rotate(180deg);
    }

    &:hover ${Submenu} {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
        transform: translate(-50%, 0);
    }
    &:hover ${SubmenuBurger} {
        display: block;
        transform: translate(0, 0);
    }
`
const SubmenuInner = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 7px;
margin: 7px 0;
font-size: 16px;
font-weight: 600;
`
const BurgerMenu = styled.div`
    display: none;


    @media (max-width: ${breakpoints.tablet}){
        display: block;
    }
`;

const BurgerIcon = styled.div`
    cursor: pointer;
    width: 24px;
    height: 24px;
    position: relative;

    @media (max-width: ${breakpoints.mobile}){
        width: 20px;
        height: 20px;
    }
`;
const BurgerSpan = styled.span`
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({$visible}) => ($visible ? "transparent" : "var(--blackText)")};
    border-radius: 2px;
    font-size: 0;
    position: relative;
    transition: all .1s linear;
    top: 10px;

    &::before,
    &::after {
    content: "";
    width: 100%;
    height: 100%;
    background-color: var(--blackText);
    border-radius: 2px;
    position: absolute;
    left: 0;
    z-index: 10;
    transition: transform .1s linear;
}

    &::before {
        top: ${({$visible}) => ($visible ? "50%" : "8px")};
        transform: ${({$visible}) => ($visible ? "rotate(-45deg) translateY(-70%)" : "")};
    }

    &::after {
        bottom: ${({$visible}) => ($visible ? "50%" : "8px")};
        transform: ${({$visible}) => ($visible ? "rotate(45deg) translateY(70%)" : "")};
    }
`;

const BurgerNav = styled.nav`
display: ${props => (props.$visible ? 'flex' : 'none')};
flex-direction: row;
justify-content: flex-end;
width: 100vw;
height: 100dvh;
position: fixed;
top: 0;
right: 0;
overflow: hidden;
background-color: oklch(0% 0 0 / 40%);
transform: translateX(${({$visible}) => ($visible ? '0' : '250%')});
transition: transform 0.3s linear;

@media (max-width: ${breakpoints.smallMobile}){
    width: 100%;
}
`;

const BurgerNavInner = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 85px 35px 40px;
background-color: #fff;
opacity: 1;
position: fixed;
top: 0;
right: 0;
width: 320px;
height: 100%;
overflow: hidden;

@media (max-width: ${breakpoints.smallMobile}){
    width: 100%;
}
`
const BurgerNavContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

`
const HeaderButton = styled(ButtonElem)`
    font-size: clamp(12px, 1.2vw, 16px);

    @media (max-width: ${breakpoints.tablet}){
        display: none;
    }
`

export default function HeaderElem({ isModalOpen }) {
    const [isFixed, setIsFixed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const burgerNavRef = useRef(null);
    const burgerIconRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsFixed(window.scrollY > 0);
        };

        const handleClickOutside = (event) => {
            if (
                burgerNavRef.current &&
                !burgerNavRef.current.contains(event.target) &&
                burgerIconRef.current &&
                !burgerIconRef.current.contains(event.target)
            ) {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const scrollY = window.scrollY;
            document.body.style.top = `-${scrollY}px`;
            document.body.classList.add('body__locked');
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.classList.remove('body__locked');
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isVisible]);

    const toggleBurgerNav = () => {
        setIsVisible((prev) => !prev);
    };

    const handleClickInside = () => {
        setIsVisible(false);
    };

    return (
        <Header $fixed={isFixed} id="header">
            <Container>
                <HeaderInner>
                    <Logo $visible={isVisible} to="/Igoshina/">Игошина Анастасия</Logo>
                    <Nav>
                        <NavItem to="/Igoshina/workFormats">Форматы работы</NavItem>
                        {/* <SubmenuWrapper style={{ height: "60px" }}>Инфопродукты<Triangle/>
                            <Submenu>
                                <NavItem>Инфопродукты</NavItem>
                                <NavItem  to="/Igoshina/products">Сборники рецептов</NavItem>
                            </Submenu>
                        </SubmenuWrapper> */}
                        <NavItem to="/Igoshina/promo">Промокоды</NavItem>
                        <NavItem to="/Igoshina/about">Обо мне</NavItem>
                    </Nav>
                    <BurgerMenu>
                        <BurgerIcon ref={burgerIconRef} onClick={toggleBurgerNav}>
                            <BurgerSpan $visible={isVisible}/>
                        </BurgerIcon>
                        <BurgerNav  $visible={isVisible}>
                            <BurgerNavInner ref={burgerNavRef}>
                                <BurgerNavContent>
                                    <Logo to="/Igoshina/" style={{marginBottom: "30px", fontSize: "20px"}} onClick={handleClickInside}>Игошина Анастасия</Logo>
                                    <NavItemBurger to="/Igoshina/workFormats" onClick={handleClickInside}>Форматы работы</NavItemBurger>
                                    <SubmenuWrapper $visible={isVisible}>
                                        <SubmenuInner>Инфопродукты<Triangle/>
                                        </SubmenuInner>
                                        <SubmenuBurger>
                                            <NavItem to="/Igoshina/products" style={{margin: "6px 0"}} onClick={handleClickInside}>Сборники рецептов</NavItem>
                                            <NavItem onClick={handleClickInside}>Методички / Шпаргалки</NavItem>
                                        </SubmenuBurger>
                                    </SubmenuWrapper>
                                    <NavItemBurger to="/Igoshina/promo" onClick={handleClickInside}>Промокоды</NavItemBurger>
                                    <NavItemBurger to="/Igoshina/about" onClick={handleClickInside}>Обо мне</NavItemBurger>
                                </BurgerNavContent>
                                <ButtonElem to="/Igoshina/contacts" style={{alignSelf: "center"}} onClick={handleClickInside}>Связаться со мной
                                        <TelegramIcon variant="default" />
                                </ButtonElem>
                            </BurgerNavInner>
                        </BurgerNav>
                    </BurgerMenu>
                    <HeaderButton to="/Igoshina/contacts">Связаться со мной
                            <TelegramIcon  variant="default"/>
                    </HeaderButton>
                </HeaderInner>
            </Container>
        </Header>
    );
}