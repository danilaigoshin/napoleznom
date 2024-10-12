import styled from "styled-components";
import { useState } from "react";
import { Section, Container } from "../components/section&container";
import {EducationTitle, EducationText, EducationPhoto, EducationButton} from "./education&about";
import { educationTypeTexts } from "../JS/educationTexts";
import { EducationTypeItem } from "../components/educationItem";
import Image from "../components/Images";
import DiplomItem from "../components/diplomDialog";
import { breakpoints } from "../components/breakpoints";

const EducationTypeTitle = styled(EducationTitle)`
@media (max-width: ${breakpoints.smallTablet}){
    display: none;
}
`
const EducationTypeTitleHidden = styled(EducationTitle)`
display:none;
@media (max-width: ${breakpoints.smallTablet}){
    display: block;
    margin: 40px 0 30px;
}
@media (max-width: ${breakpoints.smallMobile}){
    margin: 20px 0 10px;
}
`
const EducationContent = styled.div`
    display: flex;
    gap: 5%;

    @media (max-width: ${breakpoints.smallTablet}){
        flex-direction: column-reverse;
        margin-top: 20px;
    }
`
const EducationTypePhoto =styled(EducationPhoto)`
    & > img{
        @media(${breakpoints.smallTablet} <= max-width: 1960px){
            height: clamp(530px, 40vw, 690px);
    }
}
`

export default function EducationSectionType() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const openModal = (index) => {
        setSlideIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Section style={{ marginBottom: "40px" }} id="modal-nest">
            <DiplomItem open={isModalOpen} onClose={closeModal} initialSlideIndex={slideIndex} />
            <Container>
                <EducationTypeTitle>Образование</EducationTypeTitle>
                <EducationContent>
                    <EducationText>
                        {educationTypeTexts.map((educationTypeText, index) => (
                            <EducationTypeItem
                                key={educationTypeText.id}
                                {...educationTypeText}
                                onLinkClick={openModal}
                                slideIndex={index}
                            />
                        ))}
                        <EducationButton onClick={() => openModal(0)}>Дипломы и сертификаты</EducationButton>
                    </EducationText>
                    <EducationTypeTitleHidden>Образование</EducationTypeTitleHidden>
                    <EducationTypePhoto>
                        <img src={Image.AboutMePhoto} alt="" />
                    </EducationTypePhoto>
                </EducationContent>
            </Container>
        </Section>
    );
}