import React from "react";
import Header from "../../component/PageHeader/Header";
import vision from "../../assests/Image/vision.png";

const Aboutpage = () => {
  return (
    <section>
      <Header title="About us" />

      <div className="pb-20">
        {/* About Us Section */}
        <section className="py-8 md:py-16 bg-white-100 px-4 md:px-16">
          <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4 lg:mb-0 ">
            About Us
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-10 md:gap-x-20 text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-[2.8rem]  font-main text-primary-200 font-semibold md:leading-snug">
              We are here to help small businesses succeed
            </h1>

            <div>
              <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
                Aruna Investment Partners (“Aruna”) is an investment management
                firm established to operate as an independent Sponsor to owners
                and managers of small-medium sized businesses operating in
                select segments of the North American economy. We provide
                long-term catalytic capital that empowers founders and managers
                to embark on ambitious growth objectives and the operational
                support to help them achieve their full potential.
                <br />
                <br />
                We understand that businesses need more than capital to succeed.
                We support businesses to better understand the markets they
                operate in, position for growth and adopt best-in-class
                operational practices leveraging technology and our broad
                network of ecosystem relationships. We work side by side with
                our management teams to co- create and execute on unique
                strategies to differentiate their business from the pack,
                propelling them to outpace the competition in an often crowded
                marketplace.
                <br />
                <br />
                Aruna is a US-based Delaware incorporated affiliate of the
                CardinalStone Group – a Multi-Asset Investment Management Firm
                based in Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bg-white-200 py-16 md:py-[6.25rem] px-4 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-20 text-left">
            {/* Vision Image */}
            <div className="order-2 md:order-1">
              <img src={vision} alt="vision" className="w-full rounded-md" />
            </div>

            {/* Vision Content */}
            <div className="flex flex-col justify-center order-1 md:order-2">
              <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
                Our Vision
              </h1>
              <p className="font-body font-normal text-sm xl:text-base my-2 md:my-4 leading-6 xl:leading-8">
                We aim to become the premier catalyst for transformative growth,
                empowering small and medium-sized businesses in North America to
                achieve market leadership through strategic capital investment,
                operational excellence, and unparalleled ecosystem partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* <section className="py-8 md:py-16 bg-white-100 px-4 md:px-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-main text-secondary-100 font-semibold mb-4">
              Expert Team
            </h2>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
              We Have An Exclusive Team
            </h1>
          </div>

          <div className="flex flex-col items-center py-12 md:py-24">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-8">
              <div className="text-center col-span-2">
                <img
                  src={image1}
                  alt="Joe Bridges"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Joe Bridges
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Founder
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2">
                <img
                  src={image2}
                  alt="Jeffrey Walters"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Jeffrey Walters
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2">
                <img
                  src={image3}
                  alt="Jason Reed"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Jason Reed
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Managing Director
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2">
                <img
                  src={image4}
                  alt="Nellie Padilla"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Nellie Padilla
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Senior Operating Partner
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2 md:col-start-2">
                <img
                  src={image5}
                  alt="Dean Bell"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Dean Bell
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Business Development Officer
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2 md:col-span-2">
                <img
                  src={image6}
                  alt="Pearl Brooks"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Pearl Brooks
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Executive Assistant
                  </p>
                </div>
              </div>

              <div className="text-center col-span-2  col-start-2   md:col-span-2">
                <img
                  src={image7}
                  alt="Isaiah Griffin"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="md:text-xl font-medium text-primary-200 font-main">
                    Isaiah Griffin
                  </h3>
                  <p className=" text-sm md:text-base font-body font-light leading-8">
                    Chief Financial Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </section>
  );
};

export default Aboutpage;
