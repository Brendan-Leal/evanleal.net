import Heading from "@/components/Heading";
import Head from "next/head";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const [formErr, setFormErr] = useState({
    css: "",
    errMsg: "",
  });
  const [showForm, setShowForm] = useState(true);

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

  const formSubmit = (e) => {
    e.preventDefault();

    if (captcha) {
      const formData = new FormData();

      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });

      fetch(process.env.NEXT_PUBLIC_GET_FORM_URL, {
        method: "POST",
        body: formData,
      }).then(() => setQuery({ name: "", email: "", message: "" }));

      setFormErr({
        css: "hidden",
        errMsg: "",
      });

      setShowForm(false);
    } else {
      setFormErr({
        css: "block text-red-600",
        errMsg: "* Please verify your human nature.",
      });
    }
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
        imgPosition="object-[bottom_right] object-cover"
      />

      {showForm && (
        <div className="font-unna text-base md:text-desktop-base m-4 max-w-xl md:mx-auto">
          <p>
            I look forward to collaborating in any way I can! Fill out the form
            below to get started.
          </p>
          <form
            onSubmit={formSubmit}
            className="grid grid-cols-2 auto-rows-auto gap-5 mt-3"
          >
            <div className="col-span-2 flex flex-col">
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

            <div className="col-span-2 flex flex-col">
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

            <div className="col-span-2 flex flex-col">
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

            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              className="col-span-2"
              onChange={setCaptcha}
            />
            <div className="w-full">
              <button
                type="submit"
                className="bg-gray-accent w-full md:w-2/3 p-2"
              >
                Send
              </button>
            </div>
            <p className={formErr.css}>{formErr.errMsg}</p>
          </form>
        </div>
      )}

      {!showForm && (
        <div className="m-4 font-unna text-center md:text-desktop-base">
          <div className="w-3/4 h-[1px] bg-off-white mx-auto my-4"></div>
          <p className="">
            Your inquiry was sent successfully. I&apos;ll be in contact with you
            soon!
          </p>
          <div className="w-3/4 h-[1px] bg-off-white mx-auto my-4"></div>
        </div>
      )}
    </>
  );
}
