import ContactsSection from "../sections/contacts"
import {AboutSection} from "../sections/education&about"
import SpecializationSection from "../sections/specialization"
import TelegramChannelSection from "../sections/telegramChannel"
import EducationSectionType from "../sections/educationSectionType";
import { Helmet } from "react-helmet-async";

export default function AboutPage(){
    return(
        <>  
            <Helmet>
                <title>Обо мне</title>
                <meta name="description" content="Обо мне" />
            </Helmet>
            <AboutSection/>
            <SpecializationSection/>
            <EducationSectionType/>
            <TelegramChannelSection/>
            <ContactsSection/>
        </>
    )
}