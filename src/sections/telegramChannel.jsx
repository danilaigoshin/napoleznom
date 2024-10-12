import styled from "styled-components";
import { TitleH4, Paragraph } from "../components/Texts";
import ButtonElem from "../components/button";
import Image from "../components/Images";
import { Container } from "../components/section&container";
import { breakpoints } from "../components/breakpoints";

const TelegramContainer = styled(Container)`
    margin: 50px auto;
`

const TelegramElem = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 236px;
    margin: 20px auto;
    background-color: var(--lineGreen);
    border-radius: 24px;

    @media (max-width: ${breakpoints.mobile}){
        flex-direction: column;
        
    }

    @media (max-width: ${breakpoints.extraSmallMobile}){
        border-radius: 14px;
    }

    & > img{
        position: absolute;
        bottom: 0;
        right: 6%;
        width: 330px;

        @media (max-width: ${breakpoints.tablet}){
            width: clamp(250px, 42vw, 330px);
        }

        @media (max-width: ${breakpoints.smallTablet}){
            right: 0;
        }

        @media (max-width: ${breakpoints.mobile}){
            position: static;
            margin: 0 15px 0 auto;
        }
    }
`
const TelegramElemText = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;
    padding: 2em;
    justify-content: space-between;

    @media (max-width: ${breakpoints.mobile}){
        width: 100%;
        margin: 0 auto;
    }
`
const TelegramTitle = styled(TitleH4)`
    text-wrap: nowrap;
    @media (max-width: ${breakpoints.tablet})
    {
    font-size: clamp(18px, 2.8vw, 24px);
}

    & > span{
        color: var(--mainGreen);
        margin-left: .5em;

        @media(max-width: 1148px){
            display: block;
            margin-left: 0;
        }
    }
`

const TelegramParagraph = styled(Paragraph)`
    color: var(--secondaryText);
    text-wrap: balance;
    padding: 1em 0;

`
const TelegramButton = styled(ButtonElem)`
@media (max-width: ${breakpoints.smallMobile}){
        width: 250px;
        font-size: 14px;
        align-self: center;
    }
`

export default function TelegramChannelSection(){
    return(
            <TelegramContainer>
                <TelegramElem>
                    <TelegramElemText>
                        <TelegramTitle>Автор телеграм-канала<span>"Что-то на полезном"</span></TelegramTitle>
                        <TelegramParagraph>В нем я регулярно делюсь своими знаниями и мотивирую тысячи людей вести здоровый образ жизни </TelegramParagraph>
                        <TelegramButton href="https://t.me/napoleznom">Перейти в телеграм-канал</TelegramButton>
                    </TelegramElemText>
                        <img src={Image.IceCream} alt=""/>
                </TelegramElem>
            </TelegramContainer>
    )
}