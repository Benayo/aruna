import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Header from "../../component/PageHeader/Header";

const Careerpage = () => {
  const location = useLocation();

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const { hash } = location;

    if (hash) {
      const targetSection = document.getElementById(hash.slice(1));

      if (targetSection) {
        const nav = document.querySelector("nav");
        let navbarHeight = nav ? nav.offsetHeight : 0;

        if (window.innerWidth <= 768) {
          navbarHeight = 120;
        }

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return (
    <section>
      <Header title="Careers" />

      <div ref={textRef} >
        {/* Job Overview */}
        <div className="py-12 md:py-20 px-4 md:px-16 bg-white-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h2
                className={`text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4 ${
                  textInView ? "animate-moveInLeft" : ""
                }`}
              >
                Join Our Team
              </h2>

              <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem] font-main text-primary-200 font-semibold md:leading-snug">
                Vice President, Financial Analyst
              </h1>

              <p className="font-body text-sm md:text-base leading-7 mt-6 max-w-xl">
                Aruna Investment Partners LLC is seeking a Vice President,
                Financial Analyst to support investment activities, deal
                execution, portfolio recommendations, and value creation
                initiatives across various sectors.
              </p>
            </div>

            <div className="bg-white-300 rounded-md p-6 md:p-8">
              <div className="mb-6">
                <p className="font-body text-xs uppercase tracking-wider text-secondary-100 mb-2">
                  Employer
                </p>
                <p className="font-main text-lg text-primary-200 font-medium">
                  Aruna Investment Partners LLC
                </p>
              </div>

              <div className="mb-6">
                <p className="font-body text-xs uppercase tracking-wider text-secondary-100 mb-2">
                  Location
                </p>
                <p className="font-body text-sm md:text-base leading-6">
                  6060 N Central Expressway, Ste 500
                  <br />
                  Dallas, TX 75206
                </p>
              </div>

              <div>
                <p className="font-body text-xs uppercase tracking-wider text-secondary-100 mb-2">
                  Schedule
                </p>
                <p className="font-body text-sm md:text-base">
                  Monday through Friday, 40 hours/week
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div
          id="responsibilities"
          className="py-12 md:py-[6.25rem] px-4 md:px-16 bg-white-300"
        >
          <h1
            className={`text-3xl md:text-4xl font-semibold text-primary-200 font-main pb-8 ${
              textInView ? "animate-moveInLeft" : ""
            }`}
          >
            Responsibilities
          </h1>

          <div className="max-w-5xl">
            <p className="font-body text-sm md:text-base leading-8 mb-8">
              The Vice President, Financial Analyst will support the company's
              investment activities and portfolio management efforts, including
              deal execution, investment sourcing, financial analysis, due
              diligence, and post-acquisition value creation.
            </p>

            <ul className="list-none pl-0 font-body">
              <li className="relative pl-7 mb-6 text-sm md:text-base leading-7">
                <span
                  className="absolute left-0 top-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#347856" }}
                ></span>
                Support the company's deal execution, portfolio recommendations,
                and investment sourcing across various sectors.
              </li>

              <li className="relative pl-7 mb-6 text-sm md:text-base leading-7">
                <span
                  className="absolute left-0 top-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#347856" }}
                ></span>
                Identify and evaluate potential investment opportunities,
                conduct financial analysis, lead due diligence, and present
                portfolio strategies to decisionmakers.
              </li>

              <li className="relative pl-7 mb-6 text-sm md:text-base leading-7">
                <span
                  className="absolute left-0 top-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#347856" }}
                ></span>
                Structure and oversee the end-to-end deal process and drive
                value creation initiatives in portfolio companies.
              </li>

              <li className="relative pl-7 mb-6 text-sm md:text-base leading-7">
                <span
                  className="absolute left-0 top-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#347856" }}
                ></span>
                Represent the investor in management discussions and support
                operating cadence, KPI development, and strategic initiatives
                post-acquisition.
              </li>

              <li className="relative pl-7 mb-6 text-sm md:text-base leading-7">
                <span
                  className="absolute left-0 top-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#347856" }}
                ></span>
                Cultivate relationships with industry leaders, financial
                institutions, and other key partners.
              </li>

              <li className="relative pl-7 text-sm md:text-base leading-7">
                <span
                  className="absolute left-0 top-3 w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#347856" }}
                ></span>
                Monitor business and economic trends to identify potential
                obstacles or opportunities.
              </li>
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div
          id="requirements"
          className="py-12 md:py-[6.25rem] px-4 md:px-16 bg-white-100"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h1
                className={`text-3xl md:text-4xl font-semibold text-primary-200 font-main pb-6 ${
                  textInView ? "animate-moveInLeft" : ""
                }`}
              >
                Requirements
              </h1>

              <p className="font-body text-sm md:text-base leading-8">
                Qualified candidates must meet the following requirements:
              </p>
            </div>

            <div>
              <ul className="list-none pl-0 font-body">
                <li className="relative pl-7 mb-7 text-sm md:text-base leading-7">
                  <span
                    className="absolute left-0 top-3 w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#347856" }}
                  ></span>
                  Master's degree in Business Administration (MBA).
                </li>

                <li className="relative pl-7 mb-7 text-sm md:text-base leading-7">
                  <span
                    className="absolute left-0 top-3 w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#347856" }}
                  ></span>
                  30 months of experience at the Associate level or higher in a
                  management or investment consulting environment performing
                  portfolio optimization, gap analysis, due diligence, and
                  financial modelling.
                </li>

                <li className="relative pl-7 text-sm md:text-base leading-7">
                  <span
                    className="absolute left-0 top-3 w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#347856" }}
                  ></span>
                  Must be a Chartered Financial Analyst (CFA).
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Application */}
        <div
          id="apply"
          className="py-12 md:py-[6.25rem] px-4 md:px-16 bg-primary-200 text-white"
        >
          <div className="max-w-4xl text-white-100 ">
            <h1
              className={`text-3xl md:text-4xl font-semibold font-main pb-6  ${
                textInView ? "animate-moveInLeft" : ""
              }`}
            >
              How to Apply
            </h1>

            <p className="font-body text-sm md:text-base leading-8 mb-8 ">
              Qualified applicants should submit a resume by email or mail to
              Aruna Investment Partners LLC.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-white/20 rounded-md p-6">
                <p className="font-body text-xs uppercase tracking-wider text-white/70 mb-3">
                  Email
                </p>

                <a
                  href="mailto:infoarunaip@gmail.com"
                  className="font-main text-lg hover:underline break-all"
                >
                  infoarunaip@gmail.com
                </a>
              </div>

              <div className="border border-white/20 rounded-md p-6">
                <p className="font-body text-xs uppercase tracking-wider text-white/70 mb-3">
                  Mail
                </p>

                <p className="font-body text-sm md:text-base leading-7">
                  Aruna Investment Partners LLC
                  <br />
                  6060 N Central Expressway, Ste 500
                  <br />
                  Dallas, TX 75206
                </p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="mailto:infoarunaip@gmail.com?subject=Application%20-%20Vice%20President%2C%20Financial%20Analyst"
                className="inline-flex items-center justify-center bg-white text-primary-200 font-main font-medium px-7 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Submit Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careerpage;
