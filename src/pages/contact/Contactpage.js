import React from "react";
import { useInView } from "react-intersection-observer";

import ContactHeader from "../../component/PageHeader/ContactHeader";

import location from "../../assests/Svg/location.svg";
import envelop from "../../assests/Svg/envelop.svg";
import darkenvelop from "../../assests/Svg/dark-envelop.svg";
import person from "../../assests/Svg/dark-person.svg";
import phone from "../../assests/Svg/dark-phone.svg";
import subject from "../../assests/Svg/dark-subject.svg";
import edit from "../../assests/Svg/dark-edit.svg";
import MapCard from "../../component/Cards/MapCard";

const Contactpage = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section>
      <ContactHeader title="Contact us" />

      <section
        ref={textRef}
        className="py-16 md:py-[6.25rem] px-4 md:px-16 font-body"
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-10 md:gap-x-20 text-left">
          {/* Contact Information */}
          <div className="bg-primary-100 p-6 lg:p-8 rounded-md text-white-100">
            <h2
              className={`text-xl md:text-2xl font-main text-white-100 font-semibold ${
                textInView ? " animate-moveInLeft" : ""
              }`}
            >
              Get in Touch!
            </h2>
            <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-white-100 font-semibold md:leading-snug my-6 md:my-4">
              Contact Us
            </h1>
            <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
              Stay connected with us for timely updates and support. We value
              your feedback and look forward to hearing from you!
            </p>
            <div className="py-4 font-body">
              <div className="flex items-center mb-6 font-light">
                <img src={location} alt="location" className="w-5 lg:w-6" />
                <span className="ml-3 lg:ml-4 text-sm lg:text-base">
                  900 S. Stonebridge, Suite number 102, McKinney Texas, 75070
                </span>
              </div>
              <div className="flex items-center font-light">
                <img src={envelop} alt="envelop" className="w-5 lg:w-6" />
                <span className="ml-3 lg:ml-4 text-sm lg:text-base">
                  info@arunaip.com
                </span>
              </div>
            </div>

            <div className="container mx-auto py-8">
              <div className="rounded-md overflow-hidden">
                <MapCard />
              </div>

              <p className="mt-4 text-center">
                900 S. Stonebridge, Suite number 102, McKinney Texas, 75070
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="flex flex-col">
            <h1 className="pt-8 pb-10 lg:pb-16 font-main text-xl">
              Leave us a Message
            </h1>
            <div className="grid grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-8 lg:gap-y-16 mb-6">
              {/* Name Input */}
              <div className="flex items-center border-b border-[#B9B9B9] py-2 col-span-2  md:col-span-1">
                <img src={person} alt="person" className="w-5 lg:w-6" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-3 text-primary-200 placeholder:text-primary-200 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center border-b border-[#B9B9B9] py-2 col-span-2 md:col-span-1">
                <img src={darkenvelop} alt="envelop" className="w-5 lg:w-6" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-3 text-primary-200 placeholder:text-primary-200 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>

              {/* Phone Input */}
              <div className="flex items-center border-b border-[#B9B9B9] py-2 col-span-2 md:col-span-1">
                <img src={phone} alt="phone" className="w-5 lg:w-6" />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full pl-3 text-primary-200 placeholder:text-primary-200 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>

              {/* Subject Input */}
              <div className="flex items-center border-b border-[#B9B9B9] py-2 col-span-2 md:col-span-1">
                <img src={subject} alt="subject" className="w-5 lg:w-6" />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full pl-3 text-primary-200 placeholder:text-primary-200 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>

              {/* Message Input */}
              <div className=" flex items-baseline border-b border-[#B9B9B9] py-2 col-span-2">
                <img src={edit} alt="edit" className="w-5 lg:w-6" />
                <textarea
                  type="text"
                  placeholder="How can we help you? Feel free to get in touch!"
                  className=" w-full pl-3 text-primary-200 placeholder:text-primary-200 placeholder:font-body placeholder:font-light placeholder:text-sm outline-none"
                />
              </div>
            </div>

            <div className="mt-8 lg:mt-12 flex justify-center lg:justify-end">
              <button className="w-full lg:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-primary-100 text-white-100 rounded-md font-body font-medium text-base focus:outline-none focus:ring-2 focus:ring-primary-100 focus:ring-opacity-50 transition-colors duration-300">
                Send a Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contactpage;
