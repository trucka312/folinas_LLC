import type { Metadata } from "next";

import Container from "../../components/Commons/Container";
import ContactMap from "../../components/Sections/ContactMap";
import ContactMethod from "../../components/Sections/ContactMethod";

export const metadata: Metadata = {
  title: "Contact - Folinas LLC",
  description: "Contact us to become a partner or report your problem to us",
};

const ContactPage = () => {
  return (
    <div>
      <Container>
        <ContactMethod />
        <ContactMap />
      </Container>
    </div>
  );
};

export default ContactPage;
