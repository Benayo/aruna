import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import Header from "../../component/PageHeader/Header";
import qualtheraLogo from "../../assests/Image/qualthera.jpeg";

// Add new portfolio companies here. `status` must be "current" or "former".
const companies = [
  {
    name: "Qualthera Health Corporation",
    logo: qualtheraLogo,
    logoAlt: "Qualthera logo",
    logoBg: "bg-white border border-gray-200 p-4",
    description:
      "Qualthera Health Corporation is a U.S.-based pharmaceutical compounding company providing personalized medications to patients through healthcare providers and pharmacy partners. The company operates across 503A and 503B pharmaceutical compounding, with a focus on sterile and non-sterile medications.",
    website: "https://qualthera.com",
    sector: "Healthcare",
    sectorLabel: "Healthcare | Pharmaceutical Compounding",
    year: "2026",
    status: "current",
  },
  {
    name: "Tensile Investments",
    logo: "https://tensileinvestments.com/img/tensile1.svg",
    logoAlt: "tensile logo",
    logoBg: "bg-[#0E1B23] p-8",
    description:
      "Tensile Investments is a clean mobility solutions company focused on providing sustainable transportation solutions for communities and cities. The company develops smart mobility hubs and finances clean first- and last-mile transportation solutions.",
    website: "https://tensileinvestments.com",
    sector: "Clean Mobility",
    sectorLabel: "Clean Mobility | Transportation",
    year: "2020",
    status: "former",
  },
];

const sectors = [...new Set(companies.map((c) => c.sector))];

const statusLabel = { current: "Active", former: "Exited" };

const DetailRow = ({ title, children, last }) => (
  <div className={last ? "" : "pb-4"}>
    <h4 className="md:text-xl font-main text-primary-200 font-semibold mb-2">
      {title}
    </h4>
    {children}
  </div>
);

const Portfoliopage = () => {
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [status, setStatus] = useState("all");
  const [sector, setSector] = useState("all");

  const filtered = companies.filter(
    (c) =>
      (status === "all" || c.status === status) &&
      (sector === "all" || c.sector === sector)
  );

  const selectClass =
    "w-full md:w-[12rem] px-4 py-5 bg-[#F1F7F5] border-primary-200 outline-none cursor-pointer";

  return (
    <section>
      <Header title="Portfolio" />
      <div ref={textRef} className="pb-20">
        <section className="py-4 md:py-16 bg-white-100 px-4 md:px-16">
          <h2
            className={`text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4 lg:mb-0 ${
              textInView ? " animate-moveInLeft" : ""
            }`}
          >
            Portfolio
          </h2>

          <div className="text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-primary-200 font-semibold md:leading-snug">
              Our Portfolio Companies
            </h1>

            <p className="font-body font-normal leading-8 py-4">
              We believe that achieving successful outcomes starts and ends with
              exceptional people united by a shared vision. We collaborate with
              skilled entrepreneurs and management teams to foster remarkable
              organic growth.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 font-body font-medium py-6">
            <div className="flex items-center justify-between bg-[#F1F7F5] border-primary-200 rounded-md overflow-hidden pr-4">
              <select
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={selectClass}
              >
                <option value="all">All Companies</option>
                <option value="current">Current</option>
                <option value="former">Former</option>
              </select>
            </div>

            <div className="flex items-center justify-between bg-[#F1F7F5] border-primary-200 rounded-md overflow-hidden pr-4">
              <select
                name="focusSector"
                id="focusSector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className={selectClass}
              >
                <option value="all">All Sectors</option>
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Company list */}
          {filtered.length === 0 ? (
            <p className="font-body py-8">
              No portfolio companies match the selected filters.
            </p>
          ) : (
            <div className="divide-y divide-gray-200">
              {filtered.map((c) => (
                <div
                  key={c.name}
                  className="xl:flex justify-between items-start space-y-10 xl:space-y-0 py-12 md:py-16 first:pt-8"
                >
                  <div
                    className={`${c.logoBg} rounded-md w-full md:w-[20rem] flex justify-center items-center`}
                  >
                    <img
                      src={c.logo}
                      alt={c.logoAlt}
                      className="max-w-full h-auto"
                    />
                  </div>

                  <div className="xl:w-[70%]">
                    <h1 className="text-lg md:text-2xl font-main text-primary-200 font-semibold mb-4">
                      {c.name}
                    </h1>

                    <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 pb-6">
                      <DetailRow title="Sector" last>
                        <p className="font-body font-normal text-sm xl:text-base leading-6 xl:leading-8">
                          {c.sectorLabel}
                        </p>
                      </DetailRow>

                      <DetailRow title="Investment year" last>
                        <p className="font-body font-normal text-sm xl:text-base leading-6 xl:leading-8">
                          {c.year}
                        </p>
                      </DetailRow>

                      <DetailRow title="Status" last>
                        <p className="font-body font-normal text-sm xl:text-base leading-6 xl:leading-8">
                          {statusLabel[c.status]}
                        </p>
                      </DetailRow>
                    </div>

                    <p className="font-body font-normal text-sm xl:text-base leading-6 xl:leading-8">
                      {c.description}
                    </p>

                    <a
                      className="inline-block mt-4 font-body font-semibold text-primary-200 underline hover:text-[#0E1B23] text-sm xl:text-base"
                      href={c.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
};

export default Portfoliopage;
