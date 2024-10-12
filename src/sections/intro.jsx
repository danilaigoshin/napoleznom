import styled from "styled-components";
import { TitleH1, TitleH2, Paragraph } from "../components/Texts";
import ButtonElem from "../components/button";
import Image from "../components/Images";
import TelegramIcon from "../components/telegram";
import { Section, Container } from "../components/section&container";
import { breakpoints } from "../components/breakpoints";

const IntroWrapper = styled(Section)`

@media (max-width: ${breakpoints.mobile}){
    flex-direction: column-reverse;
}

@media (max-width: ${breakpoints.extraSmallMobile}){
}
`

const IntroContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 54%;

@media (max-width: ${breakpoints.mobile}){
    width: 100%;
}

`
const IntroParagraph = styled(Paragraph)`
    margin: 20px 0 30px;
    width: 80%;

    @media (max-width: ${breakpoints.extraSmallMobile}){
        width: 93%;
    }
`

const IntroPhoto = styled.div`
width: 46%;

& > img{
    border-radius: 40px;
    height: 100%;
    object-fit: cover;
}
@media (max-width: ${breakpoints.mobile}){
    width: 100%;
    & > img{
        border-radius: 20px;
        aspect-ratio: 3 / 2;
        transition: height 0.3s ease-in-out;
    }
}

`


const IntroButton = styled(ButtonElem)`
    font-size: 20px;
    min-width: 290px;

    @media (max-width: ${breakpoints.mobile}){
        font-size: clamp(14px, 4vw, 20px);
    }
    @media (max-width: ${breakpoints.smallMobile}){
        align-self: center;
    }
`

export default function MainSection(){
    return(
       <Container>
            <IntroWrapper>
                <IntroContent>
                    <TitleH2>Превентивный нутрициолог</TitleH2>
                    <TitleH1>Игошина Анастасия</TitleH1>
                    <IntroParagraph>Докажу, что здоровый образ жизни — это легко и вкусно!
                                Научу заботиться о себе в рамках ваших возможностей
                    </IntroParagraph>
                    <IntroButton isColored href='https://t.me/igoshinanastasia'>Связаться со мной
                        <TelegramIcon variant="light" />  
                    </IntroButton>
                </IntroContent>
                <IntroPhoto>
                    <img
                    src={Image.IntroImage}
                    alt="Игошина Анастасия"
                />
                </IntroPhoto>
            </IntroWrapper>
        </Container>
    )

}