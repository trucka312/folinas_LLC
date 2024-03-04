"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Container from "../components/Commons/Container";
import Heading from "../components/Commons/Heading";
import ButtonAnimationPress from "../components/Button/ButtonAnimationPress";

interface PrivacyPolicyItem {
  title: string;
  content: any;
}

const PrivacyPolicy: React.FC = () => {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  const dataPrivacyPolicy: PrivacyPolicyItem[] = [
    {
      title: "1. Personal Data Collection",
      content: (
        <p className="mb-4">
          In general, no registration is required to access any information on
          our website. However, personal data may be collected from you
          voluntarily for some particular purposes or services. The data may
          include the following categories:
          <br />
          <div className="ml-4">
            (1) Personal Information
            <br />
            Your name, Email, Phone number, Company Name, Website
          </div>
          <br />
          <div className="ml-4">
            (2) Project Information
            <br />
            Information related to your service requirement (for example, your
            project objective, challenge, budget, and timeline).
          </div>
        </p>
      ),
    },
    {
      title: "2. Use of Personal Information",
      content: (
        <p className="mb-4">
          We may use your data for the following purposes:
          <br />
          <div className="ml-4">
            -To provide our services to you;
            <br />
            -To respond to any of your inquiries;
            <br />
            -For general marketing purposes;
            <br />
            -For general market research;
            <br />
            -For registration or enrollment of events, and campaigns organized
            by us or our partners ;
            <br />
            -To comply with regulations in applicable laws.
          </div>
          <br />
          The basis for our collection and use of your data are as follows:
          <br />
          <span className="ml-4">
            (1) Consent
            <br />
            We collect, store and process your personal information based on
            your consent. In addition, Folinas LLC requires explicit consent to
            process personal data, which must be provided clearly. When we ask
            you to provide personal data, we will always inform you of the
            purpose and use of the information. You can withdraw your consent at
            any moment by contacting us.
          </span>
        </p>
      ),
    },
    {
      title: "3.Marketing",
      content: (
        <p className="mb-4">
          We may use your data for marketing purposes. We may communicate
          newsletters, survey forms, or other promotions to you by post or
          online. As appropriate and where required, we will ask for your
          consent or provide you with the option to unsubscribe from our
          marketing program. You may also opt-out by contacting us via email to
          contact@folinas.com.
        </p>
      ),
    },
    {
      title: "4. Disclosure and Sharing of Personal Data",
      content: (
        <p className="mb-4">
          We do not disclose any personal data to any third parties except as
          requested by law or with your prior consent. For the purpose of
          marketing or providing service to you, we may share your data with our
          subsidiaries, our mother companies, our business partners, our
          authorized contractors, our agents, our advisors, and our employees.
          <br />
          We have no control over any act of any third party. The privacy
          protection stated in this Statement does not apply to the information
          disclosed to any third party incidental to or during our operation or
          in providing our services. We assume no responsibility for the privacy
          protection against such third parties.
        </p>
      ),
    },
    {
      title: "5. Data Retention",
      content: (
        <p className="mb-4">
          Your data will be retained for such period as may be necessary to
          carry out the purposes outlined in this Statement.
        </p>
      ),
    },
    {
      title: "6. Personal Data Access and Correction",
      content: (
        <p className="mb-4">
          You are entitled to be informed by us whether we hold your data. You
          have the right to access, correct, delete or transfer the Personal
          data that we hold.
          <br />
          Any such data request access has to be made in writing and sent to us
          by mail to contact@folinas.com.
        </p>
      ),
    },
    {
      title: "7.Updates",
      content: (
        <p className="mb-4">
          We reserve the right to revise, change or modify this Privacy Policy
          Statement from time to time at our sole discretion by updating this
          Statement. These changes will be effective on the date of their
          updates. Please remember to check our website casually for any
          updates. Your continued use of our website implies that you accept and
          agree with such amendments.
        </p>
      ),
    },
    {
      title: "8.Contact",
      content: <p className="mb-4">hihi</p>,
    },
  ];

  return (
    <Container>
      <div className="mt-10">
        <div>
          <Heading
            className="mb-5"
            headingTag="h2"
            heading="Thank you for visiting our Website."
          />
          <p>
            Folinas LLC shall be referred to as us in this following Statement.
            This Statement highlights our privacy practices regarding the
            personal information that we collect and store about you through our
            website and also for the personal information that you provide us
            while participating in our events and campaigns.
          </p>
        </div>
        <div className="my-6">
          {dataPrivacyPolicy.map((item, index) => (
            <div key={index}>
              <Heading className="mb-5" headingTag="h3" heading={item.title} />
              <>{item.content}</>
            </div>
          ))}
        </div>
        <div className="w-full my-6 align-middle text-center">
          <ButtonAnimationPress onClick={handleBack} text="Back to home" />
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
