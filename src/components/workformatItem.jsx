import styled from "styled-components";
import { useState } from "react";
import { Paragraph, TitleH4 } from "./Texts";
import ButtonElem from "./button";
import TelegramIcon from "./telegram";
import WorkItem from "./WorkItem";
import { useMediaQuery } from 'react-responsive';
import { workTextsOne, workTextsTwo, workTextsThree, workTextsFour } from "../JS/workTexts";
import ConsultationDialog from "../components/consultationDialog";
import { breakpoints } from "./breakpoints";

const WorkFormatItemWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2%;
width: 100%;
margin: 0 auto 1em;
height: fit-content;
min-height: 429px;
background-color: var(--whiteColor);
border: 1px solid var(--borderGrey);
border-radius: 20px;
padding: 2.5em;

@media(${breakpoints.mobile} <= max-width: ${breakpoints.tablet}){
    border-radius: 40px;
    padding: 2em 1em;
}

@media (max-width: ${breakpoints.smallTablet}){
grid-template-columns: 1fr;
padding: 2em;
}

@media (max-width: ${breakpoints.mobile}){
    border-radius: 20px;
    padding: 2em 1em;
}

@media (max-width: ${breakpoints.extraSmallMobile}){
    border-radius: 14px;
    padding: 1em;
}
`
const WorkFormatItemSummary = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
`
const WorkFormatItemContent = styled.div`
display: flex;
flex-direction: column;
gap: .6em;

@media (max-width: ${breakpoints.smallTablet}){
    margin: 1.5em 0;
}
`
const WorkFormatItemTitle = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: .3em;

@media (max-width: ${breakpoints.mobile}){
    align-items: end;
}
`
const StyledTitleH4 = styled(TitleH4)`
    font-size: 30px;

    @media (max-width: ${breakpoints.tablet}){
        font-size: clamp(18px, 3.8vw, 30px);
    })

`

const TimeParagraph = styled(Paragraph)`
font-size: 20px;
font-weight: 600;
color: var(--mainGreen);

@media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
}
`
const WorkFormatItemDescription = styled.div`
display: flex;
flex-direction: column;
gap: 1.5em;
`
const StyledPrice = styled(TitleH4)`
@media (max-width: ${breakpoints.mobile}){
    font-size: clamp(18px, 5vw, 24px);
}
`

const WorkFormatItemParagraph = styled(Paragraph)`
color: var(--greyText);
text-wrap: balance;

@media (max-width: ${breakpoints.mobile}){
    font-size: clamp(14px, 3vw, 16px);
}
`
const WorkItemSuptitle = styled(Paragraph)`
font-weight:500;

& > span{
    color: var(--mainGreen);
    cursor: pointer;

    &:hover{
        color: var(--mainGreenHovered);
    }
}
`
const WorkButtonElem = styled(ButtonElem)`
@media (max-width: ${breakpoints.mobile}){
    width: 100%;
}
`

export default function WorkFormatItem({ id, index, title, subtitle, price, description, openModal }) {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 892px)' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = () => {
        setIsModalOpen(true);
    };
    
    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    let workTexts = [];

    switch (index) {
        case 1:
            workTexts = workTextsOne;
            break;
        case 2:
            workTexts = ["CONSULTATION_MARKER", ...workTextsTwo];
            break;
        case 3:
            workTexts = ["CONSULTATION_MARKER", ...workTextsThree, "BONUS_MARKER", ...workTextsFour];
            break;
        default:
            break;
    }

    const DynamicWorkFormatItemContent = (
        <WorkFormatItemContent>
            {workTexts.map((workText, i) => {
                if (workText === "CONSULTATION_MARKER") {
                    return (
                        <WorkItemSuptitle key={`consultation-${i}`}>
                            В дополнение к услугам <span onClick={openModalHandler}>Консультации:</span>
                        </WorkItemSuptitle>
                    );
                }
                if (workText === "BONUS_MARKER") {
                    return <WorkItemSuptitle key={`bonus-${i}`}>Бонусы:</WorkItemSuptitle>;
                }
                return <WorkItem key={i} {...workText} />;
            })}
        </WorkFormatItemContent>
    );

    return (
        <>
            <WorkFormatItemWrapper>
                <WorkFormatItemSummary>
                    <WorkFormatItemTitle>
                        <StyledTitleH4>{title}</StyledTitleH4>
                        <TimeParagraph>{subtitle}</TimeParagraph>
                    </WorkFormatItemTitle>
                    {isSmallScreen && DynamicWorkFormatItemContent}
                    <WorkFormatItemDescription>
                        <StyledPrice>{price}</StyledPrice>
                        <WorkFormatItemParagraph>{description}</WorkFormatItemParagraph>
                        <WorkButtonElem>
                            Записаться<TelegramIcon variant="default" />
                        </WorkButtonElem>
                    </WorkFormatItemDescription>
                </WorkFormatItemSummary>
                {!isSmallScreen && DynamicWorkFormatItemContent}
            </WorkFormatItemWrapper>
            <ConsultationDialog open={isModalOpen} onClose={closeModalHandler} />
        </>
    );
}