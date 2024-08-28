import React from "react";
import Header from "../../component/PageHeader/Header";

const Portfoliopage = () => {
  return (
    <section>
      <Header title="Portfolio" />
      <div className="pb-20">
        {/* About Us Section */}
        <section className="py-8 md:py-16 bg-white-100 px-4 md:px-16">
          <h2 className="text-lg md:text-2xl font-main text-secondary-100 font-semibold mb-4">
            Portfolio
          </h2>

          <div className="text-left">
            <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight">
              Our Capital Portfolio Companies
            </h1>

            <p className="font-body font-normal leading-8 py-6">
              We believe that achieving successful outcomes starts and ends with
              exceptional people united by a shared vision. We collaborate with
              skilled entrepreneurs and management teams to foster remarkable
              organic growth.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 font-body font-medium py-6">
            {/* Select Dropdown 1 */}
            <div className="flex items-center justify-between bg-[#F1F7F5] border-primary-200 rounded-md overflow-hidden pr-4">
              <select
                name="current"
                id="current"
                className="w-full md:w-[12rem] px-4 py-5 bg-[#F1F7F5] border-primary-200"
              >
                <option value="current">Former</option>
              </select>
            </div>

            {/* Select Dropdown 2 */}
            <div className="flex items-center justify-between bg-[#F1F7F5] border-primary-200 rounded-md overflow-hidden pr-4">
              <select
                name="focusSector"
                id="focusSector"
                className="w-full md:w-[12rem] px-4 py-5 bg-[#F1F7F5] border-primary-200"
              >
                <option value="focusSector">Focus Sector</option>
              </select>
            </div>
          </div>

          <div className=" xl:flex justify-between items-start space-y-10 xl:space-y-0 py-8">
            <div className="bg-[#0E1B23] p-8 rounded-md w-full md:w-[20rem] flex justify-center items-center">
              <img
                src={`https://tensileinvestments.com/img/tensile1.svg`}
                alt="tensile logo"
                className="max-w-full h-auto"
              />
            </div>
            <div className="xl:w-[70%]">
              <div className="pb-6 xl:pr-20">
                <h1 className="text-lg md:text-2xl font-main text-primary-200 font-semibold mb-4">
                  Tensile Investments
                </h1>
                <p className="font-body font-normal leading-8 text-sm md:text-base">
                  Provider of clean mobility solution for communities and
                  cities. Develops smart mobility hubs and funds clean first to
                  last mile transportation
                </p>
              </div>

              <div className="pb-6">
                <h4 className="md:text-xl font-main text-primary-200 font-semibold mb-4">
                  Website
                </h4>

                <a
                  className="italic font-body hover:underline hover:text-[#0E1B23] underline md:no-underline"
                  href="https://tensileinvestments.com"
                >
                  <span>https://tensileinvestments.com</span>
                </a>
              </div>

              <div className="pb-6">
                <h4 className="md:text-xl font-main text-primary-200 font-semibold mb-4">
                  Investment year
                </h4>
                <p className="font-body font-normal">2020</p>
              </div>

              <div>
                <h4 className="md:text-xl font-main text-primary-200 font-semibold mb-4">
                  Status
                </h4>
                <p className="font-body font-normal">Exited</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Portfoliopage;
