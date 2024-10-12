import { useEffect } from "react";
import { TitleH3 } from "../components/Texts";
import { Container, Section } from "../components/section&container";
import ContactsSection from "../sections/contacts";
import { Helmet } from "react-helmet-async";

export default function ContactsPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",  
    });
  }, []);  
  return (
    <>
      <Helmet>
        <title>Контакты</title>
        <meta name="description" content="Мои контакты" />
      </Helmet>
      <Section>
        <Container>
          <TitleH3>Контакты</TitleH3>
          <ContactsSection />
        </Container>
      </Section>
    </>
  );
}