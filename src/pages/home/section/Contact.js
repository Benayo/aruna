import React, { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";

import location from "../../../assests/Svg/location.svg";
import envelop from "../../../assests/Svg/envelop.svg";
import person from "../../../assests/Svg/person.svg";
import phone from "../../../assests/Svg/phone.svg";
import subject from "../../../assests/Svg/subject.svg";
import edit from "../../../assests/Svg/edit.svg";

const Contact = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const form = useRef();
  let statusTimeout = useRef(null); // For storing the timeout

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get("name")) errors.name = "Name is required.";
    if (!formData.get("email") || !/\S+@\S+\.\S+/.test(formData.get("email")))
      errors.email = "Valid email is required.";
    if (!formData.get("message")) errors.message = "Message cannot be empty.";
    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://api.arunaip.com/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      setStatus("Success! Your message has been sent.");
      form.current.reset();
      setErrors({});
    } catch (error) {
      setStatus("Failed to send the message. Please try again.");
      console.error("Failed to send email:", error);
    } finally {
      setLoading(false);
    }

    statusTimeout.current = setTimeout(() => {
      setStatus("");
    }, 10000);
  };

  useEffect(() => {
    return () => {
      if (statusTimeout.current) {
        clearTimeout(statusTimeout.current);
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors };

      // Clear error if value is valid or the field is not required
      if (value) {
        delete updatedErrors[name];
      }

      // Check and remove specific errors
      if (name === "email" && value && /\S+@\S+\.\S+/.test(value)) {
        delete updatedErrors.email;
      }
      if (name === "name" && value) {
        delete updatedErrors.name;
      }
      if (name === "message" && value) {
        delete updatedErrors.message;
      }

      return updatedErrors;
    });
  };

  return (
    <section className="py-16 px-4 md:px-16 md:py-[6.25rem] bg-primary-100 text-white-100">
      <h2
        className={`text-xl md:text-2xl font-main text-white-100 font-semibold ${
          textInView ? "animate-moveInLeft" : ""
        }`}
      >
        Get in Touch!
      </h2>
      <div
        ref={textRef}
        className="grid lg:grid-cols-2 gap-4 xl:gap-20  items-center "
      >
        {/* Contact Information */}
        <div>
          <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-white-100 font-semibold md:leading-snug my-6 md:my-0">
            Contact Us
          </h1>
          <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
            Stay connected with us for timely updates and support. We value your
            feedback and look forward to hearing from you!
          </p>
          <div className="py-4 font-body">
            <div className="flex items-center mb-6 font-light">
              <img src={location} alt="location" className="w-6 md:w-8" />
              <span className="ml-4 text-sm md:text-base">
                900 S. Stonebridge, Suite number 102, McKinney Texas, 75070
              </span>
            </div>
            <div className="flex items-center mb-6 font-light">
              <img src={envelop} alt="envelop" className="w-6 md:w-8" />
              <span className="ml-4 text-sm md:text-base">
                info@arunaip.com
              </span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-6">
            <div className=" col-span-2 md:col-span-1 ">
              <div className=" py-2 flex items-center border-b  ">
                <img src={person} alt="person" className="w-5 lg:w-6" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full pl-3 bg-transparent text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>
              {errors.name && (
                <p className="text-white-100 text-xs pt-2">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="  col-span-2 md:col-span-1">
              <div className=" py-2 flex items-center border-b ">
                <img src={envelop} alt="envelop" className="w-5 lg:w-6" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full pl-3 bg-transparent text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>
              {errors.email && (
                <p className="text-white-100 text-xs pt-2">{errors.email}</p>
              )}
            </div>

            {/* Phone Input */}
            <div className="flex items-center border-b py-2 col-span-2 md:col-span-1">
              <img src={phone} alt="phone" className="w-5 lg:w-6" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="w-full pl-3 bg-transparent text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>

            {/* Subject Input */}
            <div className="flex items-center border-b py-2 col-span-2 md:col-span-1">
              <img src={subject} alt="subject" className="w-5 lg:w-6" />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full pl-3 bg-transparent text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>

            {/* Message Input */}
            <div className="  col-span-2">
              <div className=" py-2 flex items-baseline border-b ">
                <img src={edit} alt="edit" className="w-5 lg:w-6" />
                <textarea
                  name="message"
                  placeholder="How can we help you? Feel free to get in touch!"
                  onChange={handleChange}
                  className="w-full pl-3 bg-transparent text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>
              {errors.message && (
                <p className="text-white-100 text-xs pt-2">{errors.message}</p>
              )}
            </div>
          </div>
          <div className="mt-8 lg:mt-12 flex flex-col items-center lg:items-end">
            <button
              type="submit"
              className="w-full md:w-auto py-4 px-8 rounded-md font-body text-base flex justify-center items-center text-center font-medium bg-white-100 text-primary-100  hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 transition-colors duration-300"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  Submitting...
                </div>
              ) : (
                "Send a Message"
              )}
            </button>
            {status && (
              <p
                className={`mt-4 text-center ${
                  status.startsWith("Success")
                    ? "text-white-100"
                    : "text-white-100"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
