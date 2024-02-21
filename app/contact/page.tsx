<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import Container from "../components/Commons/Container";
import HandPointRightIcon from "@/public/icons/handPointRight";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    note: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Do something with the form data, for example, send it to a server
    console.log("Form data submitted:", formData);
  };

  return (
    <Container>
      <div>
        <h1 className="text-4xl font-semibold my-8 text-center">CONTACT US</h1>
        <div className="my-8 w-full h-[34rem] max-h-[40rem]">
          <p className="pb-4 flex text-lg">
            <div className="flex">
              Visit our store:{" "}
              <HandPointRightIcon
                className="w-6 h-6 mx-4 text-center align-middle pt-2"
                color="grey"
              />
            </div>
            <a href="fousel.com" target="_blank" className="text-[red] text-lg">
              fousel.com
            </a>
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3488493061554!2d105.82525148899822!3d21.017146059539236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0073c731ef%3A0x2b5e8b8e47773783!2sFolinas!5e0!3m2!1svi!2s!4v1708332884964!5m2!1svi!2s"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="my-20 text-2xl leading-10 flex">
          <div className="w-[25%]">
            <p className="text-[grey]">
              Drop us a line about your comments or feedback at
              contact@folinas.com or via the contact form, and we will get back
              to you within one business day.
            </p>
            <p className="mt-4 text-[grey]">
              All submitted information will be kept confidential.
            </p>
          </div>

          <div className="w-[75%]">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg overflow-hidden shadow-lg p-6 max-w-sm mx-auto bg-white"
            >
              <div className="mb-4">
                <label
                  className="block text-[grey] text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none border text-lg rounded-full w-full py-2 px-3 text-[grey] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Input your name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[grey] text-sm font-bold mb-2"
                  htmlFor="phoneNumber"
                >
                  Your phonenumber:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="appearance-none border text-lg rounded-full w-full py-2 px-3 text-[grey] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Nhập số điện thoại của bạn"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-[grey] text-sm font-bold mb-2"
                  htmlFor="note"
                >
                  Note:
                </label>
                <textarea
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="appearance-none border text-lg rounded-lg w-full py-2 px-3 text-[grey] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Your comment or feedback about us"
                ></textarea>
              </div>
              <div className="flex items-center justify-between w-full">
                <button
                  type="submit"
                  className="bg-pink-500 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
=======
import type { Metadata } from 'next'

import Container from "../components/Commons/Container";
import ContactMap from '../components/Sections/ContactMap';
import ContactMethod from '../components/Sections/ContactMethod';

export const metadata: Metadata = {
    title: 'Contact - Folinas LLC',
    description: 'Contact us to become a partner or report your problem to us',
}

const ContactPage = () => {
  return (
    <div>
        <Container>
            <ContactMap/>
            <ContactMethod/>
        </Container>
    </div>
  );
};

export default ContactPage;
>>>>>>> 002810cf11cb56d40b5af35622f1e49e053f3154
