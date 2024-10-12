import {EducationSection} from "../sections/education&about";
import FAQSection from "../sections/FAQ";
import CooperationSection from "../sections/cooperation";
import MainSection from "../sections/intro";
import PrefSection from "../sections/prefs";
import TelegramChannelSection from "../sections/telegramChannel";
import ContactsSection from "../sections/contacts";
import { Helmet } from "react-helmet-async";


export default function MainPage(){
    return(
            <>
            <Helmet>
                <title>Главная</title>
                <meta name="description" content="Домашняя страница" />
            </Helmet>
            <MainSection/>
            <PrefSection/>
            <CooperationSection/>
            <FAQSection/>
            <EducationSection/>
            <TelegramChannelSection/>
            <ContactsSection/>
            </>
    )
}