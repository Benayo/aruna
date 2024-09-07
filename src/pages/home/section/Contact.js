import React from "react";

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
          <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-white-100 font-semibold md:leading-snug my-6 md:my-4">
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
        <form className="flex flex-col">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 mb-6">
            {/* Name Input */}
            <div className="flex items-center border-b py-2 col-span-2 md:col-span-1">
              <img src={person} alt="person" className="w-6 md:w-8" />
              <input
                type="text"
                placeholder="Name"
                className="w-full pl-3 bg-primary-100 text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center border-b py-2 col-span-2 md:col-span-1">
              <img src={envelop} alt="envelop" className="w-6 md:w-8" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-3 bg-primary-100 text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center border-b py-2 col-span-2 md:col-span-1">
              <img src={phone} alt="phone" className="w-6 md:w-8" />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full pl-3 bg-primary-100 text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>

            {/* Subject Input */}
            <div className="flex items-center border-b py-2 col-span-2 md:col-span-1">
              <img src={subject} alt="subject" className="w-6 md:w-8" />
              <input
                type="text"
                placeholder="Subject"
                className="w-full pl-3 bg-primary-100 text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>

            {/* Message Input */}
            <div className="flex items-baseline border-b py-2 col-span-2">
              <img src={edit} alt="edit" className="w-6 md:w-8" />
              <textarea
                type="text"
                placeholder="How can we help you? Feel free to get in touch!"
                className="w-full pl-3 bg-primary-100 text-white-100 placeholder:text-white-100 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full md:w-auto py-4 px-8 rounded-md font-main text-base flex justify-center items-center text-center font-medium bg-white-100 text-primary-100  hover:bg-[#f1f1f1] focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
