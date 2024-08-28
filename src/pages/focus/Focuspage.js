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

      <div className="pb-[6.25rem]">
        {/* Approach Section */}
        <div className="py-4 md:py-16 bg-white-100 px-4 md:px-16 ">
          <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
            Approach
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-20 text-left">
            <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight">
              We partner with and invest in small businesses.
            </h1>

            <div>
              <p className="font-body font-normal leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sit amet accumsan arcu. Sed vel lectus nec purus dapibus
                ultricies. Vestibulum vel urna eu augue posuere vehicula et non
                magna. Nulla facilisi. Ut in turpis tincidunt, ultricies eros
                vel, viverra mi. Curabitur vel tincidunt lorem. Nam varius orci
                vel libero cursus, non hendrerit mi efficitur.
                <br />
                <br />
                Mauris venenatis, dolor vel convallis euismod, metus eros
                fermentum sem, id condimentum libero dui vel magna. Donec
                tincidunt velit et ligula sagittis, a sagittis purus luctus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Cras sit amet volutpat urna.
                Phasellus a leo lacus. Fusce consectetur tortor id sem feugiat,
                at vehicula libero scelerisque.
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

          <div className="flex flex-col md:flex-row justify-center items-center py-12 md:py-16 gap-8">
            <InvestCriteriaCard
              title="Revenue"
              value="$5 - $10M+"
              percentage={75}
              text="Positive"
              description="Purus in massa tempor nec. Magna etiam tempor orci eDonec tincidunt velit et ligula sagittis."
            />
            <InvestCriteriaCard
              percentage={20}
              text="$5-10M"
              title="EBITDA Margin"
              value="20%+"
              description="Purus in massa tempor nec. Magna etiam tempor orci eDonec tincidunt velit et ligula sagittis."
            />
            <InvestCriteriaCard
              percentage={20}
              text="20%"
              title="Cashflow"
              value="Positive"
              description="Purus in massa tempor nec. Magna etiam tempor orci eDonec tincidunt velit et ligula sagittis."
            />
          </div>
        </div>

        {/* Focus Sector Section */}
        <div className="py-16 px-4 md:px-16  md:py-[6.25rem] bg-white-200 flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
            Focus Sector
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-12 py-12 md:py-16">
            <div className="bg-white-100 rounded-md overflow-hidden shadow-sm">
              <img
                src={health}
                alt="Health"
                className="w-full h-80 object-cover"
              />

              <div className="bg-white-100 px-6 py-10 text-left">
                <h2 className="text-lg font-medium font-main pb-4">
                  Healthcare
                </h2>
                <p className="font-body text-sm leading-8 pr-4">
                  Differentiated providers of healthcare services, healthcare
                  equipment and supplies and technologies supporting healthcare
                  businesses
                </p>
              </div>
            </div>

            <div className="bg-white-100 rounded-md overflow-hidden shadow-sm">
              <img
                src={industry}
                alt="Industry"
                className="w-full h-80 object-cover"
              />

              <div className="bg-white-100 px-6 py-10 text-left">
                <h2 className="text-lg font-medium font-main pb-4">
                  Industrials
                </h2>
                <p className="font-body text-sm leading-8 pr-4">
                  Manufacturers and suppliers of components serving OEMs and
                  Tier 1 and Tier 2 suppliers
                </p>
              </div>
            </div>

            <div className="bg-white-100 rounded-md overflow-hidden shadow-sm">
              <img
                src={aerospace}
                alt="Aerospace"
                className="w-full h-80 object-cover"
              />

              <div className="bg-white-100 px-6 py-10 text-left">
                <h2 className="text-lg font-medium font-main pb-4">
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
          <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main pb-8">
            Transaction Type
          </h1>
          <p className="font-body font-normal leading-8">
            We make majority investments or significant minority investments in
            businesses with aligned managements leveraging equity, debt and
            convertible notes as required for individual deals.
          </p>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 pt-12">
            <div>
              <h4 className="text-lg font-main font-semibold pb-4">
                Secondaries
              </h4>
              <p className="font-body font-normal leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sit amet accumsan arcu. Sed vel lectus nec purus dapibus
                ultricies. Vestibulum vel urna eu augue posuere vehicula et non
                magna. Nulla facilisi.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-main font-semibold pb-4">
                Divestiture or spin-off
              </h4>
              <p className="font-body font-normal leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sit amet accumsan arcu. Sed vel lectus nec purus dapibus
                ultricies. Vestibulum vel urna eu augue posuere vehicula et non
                magna. Nulla facilisi.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-main font-semibold pb-4">
                Management buy-outs
              </h4>
              <p className="font-body font-normal leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sit amet accumsan arcu. Sed vel lectus nec purus dapibus
                ultricies. Vestibulum vel urna eu augue posuere vehicula et non
                magna. Nulla facilisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Focuspage;
