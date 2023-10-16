"use client";

import Heading from "@/components/Heading";
import Head from "next/head";
import { useState } from "react";

export default function Contact() {
  // Get form logic
  const [query, setQuery] = useState({
    name: "",
    email: "",
  });

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    // TODO: have evan create get form account and give the endpoint url
    fetch("https://getform.io/{your-form-endpoint}", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "", message: "" }));
  };
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <Heading
        pageTitle="Contact"
        headingText="Contact"
        bgImg="/img/contact-heading-img.png"
        alt="evan connecting with someone"
        imgPosition="object-[bottom_right]"
      />

      <div className="font-unna text-base m-4">
        <p>
          I offer fair, honest, and skillful work in podcast/video production
          and editing. Through my exceptional communication, reliability, and
          enthusiasm I aim to bring your visions to life. I look forward to
          collaborating with you. Fill out the form below to get started.{" "}
        </p>
        <form
          onSubmit={formSubmit}
          className="grid grid-cols-2 grid-rows-[8] gap-6 mt-3"
        >
          <div className="col-span-2 flex flex-col gap-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="form-control text-black p-1"
              value={query.name}
              onChange={handleParam()}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="form-control text-black p-1"
              value={query.email}
              onChange={handleParam()}
            />
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              className="form-control text-black p-1"
              rows={5}
              value={query.message}
              onChange={handleParam()}
            ></textarea>
          </div>
          <div className="w-full">
            <button type="submit" className="bg-gray-accent w-full p-2">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
