import Heading from "@/components/Heading";
import Head from "next/head";
import { useState, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [token, setToken] = useState(null);
  const [postSubmissionMessage, setPostSubmissionMessage] = useState("");
  const recaptchaRef = createRef(null);
  const [showForm, setShowForm] = useState(true);
  const [isFormDisabled, setIsFromDisabled] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
  });

  const handleParam = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const verifyCaptcha = async () => {
    const res = await fetch("/api/form/validate", {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    return res.success;
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    setIsFromDisabled(true);
    const isValidToken = await verifyCaptcha();

    if (isValidToken) {
      const formData = new FormData();

      Object.entries(query).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await fetch(process.env.NEXT_PUBLIC_GET_FORM_URL, {
        method: "POST",
        body: formData,
      })
        .then(() => setQuery({ name: "", email: "", message: "" }))
        .catch((err) => console.log(err));

      setShowForm(false);
      setPostSubmissionMessage(
        "Your inquiry was sent successfully. I'll be in contact with you soon!"
      );
    } else {
      setShowForm(false);
      setPostSubmissionMessage(
        "Sorry, something went wrong please try again later."
      );
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
                className="form-control text-black p-1 disabled:opacity-70 disabled:bg-white disabled:cursor-not-allowed"
                value={query.name}
                onChange={handleParam()}
                disabled={isFormDisabled}
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <label>Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="form-control text-black p-1 disabled:opacity-70 disabled:bg-white disabled:cursor-not-allowed"
                value={query.email}
                onChange={handleParam()}
                disabled={isFormDisabled}
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                className="form-control text-black p-1 disabled:opacity-70 disabled:bg-white disabled:cursor-not-allowed"
                rows={5}
                value={query.message}
                onChange={handleParam()}
                disabled={isFormDisabled}
              ></textarea>
            </div>

            <div>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={(token) => setToken(token)}
              />
            </div>

            <div className="w-full row-start-5">
              <button
                type="submit"
                className="bg-gray-accent w-full md:w-2/3 p-2 hover:scale-110 transition-transform disabled:bg-gray-700 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={isFormDisabled}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}

      {!showForm && (
        <div className="m-4 font-unna text-center md:text-desktop-base">
          <div className="w-3/4 h-[1px] bg-off-white mx-auto my-4"></div>
          <p className="">{postSubmissionMessage}</p>
          <div className="w-3/4 h-[1px] bg-off-white mx-auto my-4"></div>
        </div>
      )}
    </>
  );
}
