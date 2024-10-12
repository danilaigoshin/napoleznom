import FeedbackSection from "../sections/feedback";
import WorkFormatSection from "../sections/workFormat";
import { Helmet } from "react-helmet-async";

export default function WorkFormatsPage(){
    return(
        <>
         <Helmet>
            <title>Форматы работы</title>
            <meta name="description" content="Форматы работы" />
        </Helmet>
        <WorkFormatSection/>
        <FeedbackSection/>
        </>
    )
    
}