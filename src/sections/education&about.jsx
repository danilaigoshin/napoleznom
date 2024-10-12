import styled from "styled-components";
import Image from "../components/Images";
import { Paragraph, TitleH3 } from "../components/Texts";
import {EducationItem} from "../components/educationItem";
import { educationTexts } from "../JS/educationTexts";
import ButtonElem from "../components/button";
import {Section} from "../components/section&container";
import { breakpoints } from "../components/breakpoints";


  const EducationInner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3em;
  background-color: var(--whiteColor);
  border-radius: 60px;
  gap: 2em;
  max-width: 1240px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 2em;
    border-radius: 40px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    flex-direction: column;
    margin-top: 25px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1em;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    padding: 0.7em;
    border-radius: 14px;
  }
`;

export const EducationText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media(max-width: ${breakpoints.smallTablet}){
        width: 100%;
    }
`
export const EducationTitle = styled(TitleH3)`
margin: .5em 0;
`

export const EducationSectionTitle = styled(TitleH3)`
margin: 0;
`

export const EducationPhoto = styled.div`
width: 45%;

img {
  border-radius: 40px;
  height: 100%;
  object-fit: cover;
  object-position: top;

  @media (max-width: ${breakpoints.smallTablet}) {
    aspect-ratio: 3 / 2;
    object-position: 0% 20%;
    border-radius: 20px;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    border-radius: 8px;
  }
}

@media (max-width: ${breakpoints.smallTablet}) {
  width: 100%;
}
`

export const EducationParagraph = styled(Paragraph)`
@media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }

  @media (max-width: ${breakpoints.smallTablet}) {
    width: 90%;
  }
`
export const EducationButton = styled(ButtonElem)`
    margin-top: 30px;
    @media (max-width: ${breakpoints.smallMobile}) {
        align-self: center;
      }
}

`
export function EducationSection(){
    return(
        <Section>
            <EducationInner>
                <EducationPhoto>
                    <img src={Image.AboutHeader} alt="" />
                </EducationPhoto>
                <EducationText>
                    <div>
                      <EducationSectionTitle>Меня зовут</EducationSectionTitle>
                      <EducationSectionTitle>Игошина Анастасия</EducationSectionTitle>
                    </div>
                    <AboutParagraph style={{ paddingTop: 20, paddingBottom: 20 }}>Я практикующий нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</AboutParagraph>
                    <AboutParagraph>В рамках своих консультаций я использую интегративный подход. Мои рекомендации всегда строго персонализированы и индивидуальны.</AboutParagraph>
                    <Paragraph style={{fontWeight: "600", marginTop: "2em"}}>Образование</Paragraph>
                    {educationTexts.map((educationText) => (
                            <EducationItem key={educationText.id} {...educationText} />
                        ))}
                    <EducationButton to="/Igoshina/about">Подробнее обо мне</EducationButton>
                </EducationText>
            </EducationInner>
        </Section>
    )
}

const AboutInner = styled(EducationInner)`
  height: 594px;
  margin-top: 10px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    height: fit-content;
  }

  @media (max-width: ${breakpoints.smallMobile}) {
    padding: 0;
  }
`
const AboutPhoto = styled(EducationPhoto)`

& > img{
    @media (max-width: ${breakpoints.smallMobile}){
        border-radius: 20px 20px 0 0;
    }
}
`
const AboutText = styled(EducationText)`
justify-content: center;
gap: 16px;
padding: 0 1em 1em;
`
const AboutParagraph = styled(EducationParagraph)`
@media (max-width: ${breakpoints.tablet}){
    font-size: clamp(14px, 2vw, 16px);
}
`

const ButtonsBlock = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;

    @media (max-width: ${breakpoints.smallMobile}){
        padding: 20px 0;
        flex-direction: column;
        align-items: center;
        
    }
`
const EducationButtonStyled = styled(EducationButton)`
width: 155px;

&:hover {
  background-color: var(--mainGreen);
  color: var(--whiteColor);
}

@media (max-width: ${breakpoints.tablet}) {
  width: 133px;
}

@media (max-width: ${breakpoints.smallMobile}) {
  width: 250px;
  margin-top: 0;
}
`
export function AboutSection(){
    return(
        <Section>
            <AboutInner>
                <AboutPhoto>
                    <img src={Image.AboutHeader} alt="" />
                </AboutPhoto>
                <AboutText>
                    <div >
                      <EducationSectionTitle>Меня зовут</EducationSectionTitle>
                      <EducationSectionTitle>Игошина Анастасия</EducationSectionTitle>
                    </div>
                    <AboutParagraph>Я практикующий нутрициолог и член Ассоциации Нутрициологов и Коучей по Здоровью.</AboutParagraph>
                    <AboutParagraph>В рамках своих консультаций я использую интегративный подход. Мои рекомендации всегда строго персонализированы и индивидуальны.</AboutParagraph>
                    <ButtonsBlock>
                        <EducationButtonStyled href="https://t.me/igoshinanastasia">Телеграм</EducationButtonStyled>
                        <EducationButtonStyled>WhatsApp</EducationButtonStyled>
                        <EducationButtonStyled href="mailto:Igoshina94@gmail.com">Почта</EducationButtonStyled>
                    </ButtonsBlock>
                </AboutText>
            </AboutInner>
        </Section>
    )
}

