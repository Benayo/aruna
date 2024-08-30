import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../component/PageHeader/Header";
import InvestCriteriaCard from "../../component/Cards/InvestCriteriaCard";
import health from "../../assests/Image/healthcare.jpg";
import industry from "../../assests/Image/industry.jpg";
import aerospace from "../../assests/Image/aerospace.jpg";

const Focuspage = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetSection = document.getElementById(hash.slice(1));
      if (targetSection) {
        let navbarHeight = document.querySelector("nav").offsetHeight;

        // Adjust navbarHeight for mobile view (if necessary)
        if (window.innerWidth <= 768) {
          navbarHeight = 120; // Example height for mobile navbar, adjust as needed
        }

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <section>
      <Header title="Focus" />

      <div className="pb-20">
        {/* Approach Section */}
        <div className="py-4 md:py-16 bg-white-100 px-4 md:px-16 ">
          <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4 lg:mb-0 ">
            Approach
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-10 md:gap-x-20 text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-primary-200 font-semibold md:leading-snug">
              We partner with and invest in small businesses.
            </h1>

            <div>
              <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
                Choosing the right investment partner is a crucial decision that
                can shape the future of any business. At Aruna Investment
                Partners, we recognize the importance of this choice and are
                committed to being more than just a capital provider; we are
                your dedicated partner in growth.
                <br />
                <br />
                For years, Aruna has been at the forefront of empowering small
                and medium-sized businesses in North America, providing them
                with the strategic capital and operational support they need to
                realize their ambitious growth objectives. Our approach
                transcends traditional investment models by offering a holistic
                partnership that aligns with the unique needs of business
                owners, management teams, and our firm.
              </p>
            </div>
          </div>
        </div>

        {/* Investing Criteria Section */}
        <div
          id="criteria"
          className="py-16 px-4 md:px-16  md:py-[6.25rem] bg-white-100 flex flex-col justify-center items-center "
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
            Investing Criteria
          </h1>

          <div className=" grid md:grid-cols-3 py-12 md:py-16 gap-8">
            <InvestCriteriaCard
              title="Revenue"
              value="$2 - $10M+"
              percentage={75}
              text="$2 - $10M+"
              description="Our expertise lies in acquiring specialized manufacturing and distribution companies with annual revenues ranging from $2M to over $10M."
            />

            <InvestCriteriaCard
              percentage={20}
              text="20%+"
              title="EBITDA Margin"
              value="20%+"
              description="We target businesses that regularly achieve profit margins of at least 20% before accounting for interest, taxes, depreciation, and amortization."
            />

            <InvestCriteriaCard
              percentage={20}
              text="Positive"
              title="Cashflow"
              value="Positive"
              description="We focus on acquiring niche manufacturing and value-added distribution businesses that consistently maintain a positive cash flow."
            />
          </div>
        </div>

        {/* Focus Sector Section */}
        <div className="py-16 px-4 md:px-16  md:py-[6.25rem] bg-white-300 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
            Focus Sector
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-12 pt-12">
            <div className="bg-white-100 rounded-md overflow-hidden ">
              <img
                src={health}
                alt="Health"
                className="w-full h-80 object-cover"
              />

              <div className="bg-white-100 px-6 py-10 text-left">
                <h2 className="font-main text-lg md:text-xl font-medium pb-4">
                  Healthcare
                </h2>
                <p className="font-body text-sm leading-8 pr-4">
                  Differentiated providers of healthcare services, healthcare
                  equipment and supplies and technologies supporting healthcare
                  businesses
                </p>
              </div>
            </div>

            <div className="bg-white-100 rounded-md overflow-hidden ">
              <img
                src={industry}
                alt="Industry"
                className="w-full h-80 object-cover"
              />

              <div className="bg-white-100 px-6 py-10 text-left">
                <h2 className="font-main text-lg md:text-xl font-medium pb-4">
                  Industrials
                </h2>
                <p className="font-body text-sm leading-8 pr-4">
                  Manufacturers and suppliers of components serving OEMs and
                  Tier 1 and Tier 2 suppliers
                </p>
              </div>
            </div>

            <div className="bg-white-100 rounded-md overflow-hidden ">
              <img
                src={aerospace}
                alt="Aerospace"
                className="w-full h-80 object-cover"
              />

              <div className="bg-white-100 px-6 py-10 text-left">
                <h2 className="font-main text-lg md:text-xl font-medium pb-4">
                  Aerospace
                </h2>
                <p className="font-body text-sm leading-8 pr-4">
                  Manufacturers and suppliers of components serving OEMs, Tier 1
                  and Tier 2 suppliers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Type Section */}
        <div className="py-16 px-4 md:px-16  md:py-[6.25rem] bg-white-100">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main pb-6">
            Transaction Type
          </h1>
          <p className="font-body font-normal leading-8">
            We make majority investments or significant minority investments in
            businesses with aligned managements leveraging equity, debt and
            convertible notes as required for individual deals.
          </p>
          <ul className="list-none pl-0 my-8 font-body">
            <li className="relative pl-6 mb-6">
              <span
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#347856" }}
              ></span>
              <strong>Secondaries</strong>
            </li>
            <li className="relative pl-6 mb-6">
              <span
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#347856" }}
              ></span>
              <strong>Divestiture or Spin-off</strong>
            </li>
            <li className="relative pl-6 mb-6">
              <span
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#347856" }}
              ></span>
              <strong>Management Buy-outs</strong>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Focuspage;
