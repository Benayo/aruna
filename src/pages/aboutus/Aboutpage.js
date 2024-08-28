import React from "react";
import Header from "../../component/PageHeader/Header";
import vision from "../../assests/Image/vision.png";

import image1 from "../../assests/Image/happiness-good-whiskey-a-good-cigar-and-a-great-conversation.jpg";
import image2 from "../../assests/Image/gonna-marry-a-woman-of-my-life.png";
import image3 from "../../assests/Image/looking-at-the-day-ahead.jpg";
import image4 from "../../assests/Image/ready-for-a-date.svg";
import image5 from "../../assests/Image/thoughtful-handsome-young-man.png";
import image6 from "../../assests/Image/whatever-happens-im-ready-to-face-it.png";
import image7 from "../../assests/Image/well-im-not-in-the-mood-for-any-jokes-today.png";

const Aboutpage = () => {
  return (
    <section>
      <Header title="About us" />

      <div className="pb-20">
        {/* About Us Section */}
        <section className="py-8 md:py-16 bg-white-100 px-4 md:px-16">
          <h2 className="text-lg md:text-2xl font-main text-secondary-100 font-semibold mb-4">
            About Us
          </h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 gap-x-10 md:gap-x-20 text-left">
            <h1 className="text-2xl md:text-[2.8rem] font-main text-primary-200 font-semibold leading-tight">
              We are here to support small scale businesses and ensure they
              succeed.
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
              <p className="font-body font-normal leading-8 py-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                sit amet accumsan arcu. Sed vel lectus nec purus dapibus
                ultricies. Vestibulum vel urna eu augue posuere vehicula et non
                magna. Nulla facilisi. Ut in turpis tincidunt, ultricies eros
                vel, viverra mi. Curabitur vel tincidunt lorem. Nam varius orci
                vel libero cursus, non hendrerit mi efficitur.
              </p>
            </div>
          </div>
        </section>

        {/* Expert Team Section */}
        <section className="py-8 md:py-16 bg-white-100 px-4 md:px-16">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl font-main text-secondary-100 font-semibold mb-4">
              Expert Team
            </h2>
            <h1 className="text-3xl md:text-4xl font-semibold text-primary-200 font-main">
              We Have An Exclusive Team
            </h1>
          </div>

          <div className="flex flex-col items-center py-12 md:py-24">
            <div className="grid grid-cols-4 md:grid-cols-3 md:grid-cols-8 gap-8">
              {/* Team Member 1 */}
              <div className="text-center col-span-2 md:col-span-2">
                <img
                  src={image1}
                  alt="Joe Bridges"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Joe Bridges
                  </h3>
                  <p className="font-body font-light leading-8">Founder</p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="text-center col-span-2 md:col-span-2">
                <img
                  src={image2}
                  alt="Jeffrey Walters"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Jeffrey Walters
                  </h3>
                  <p className="font-body font-light leading-8">
                    Chief Executive Officer
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="text-center col-span-2 md:col-span-2">
                <img
                  src={image3}
                  alt="Jason Reed"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Jason Reed
                  </h3>
                  <p className="font-body font-light leading-8">
                    Managing Director
                  </p>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="text-center col-span-2 md:col-span-2">
                <img
                  src={image4}
                  alt="Nellie Padilla"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Nellie Padilla
                  </h3>
                  <p className="font-body font-light leading-8">
                    Senior Operating Partner
                  </p>
                </div>
              </div>

              {/* Team Member 5 */}
              <div className="text-center col-span-2 md:col-span-2 md:col-start-2">
                <img
                  src={image5}
                  alt="Dean Bell"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Dean Bell
                  </h3>
                  <p className="font-body font-light leading-8">
                    Business Development Officer
                  </p>
                </div>
              </div>

              {/* Team Member 6 */}
              <div className="text-center col-span-2 md:col-span-2">
                <img
                  src={image6}
                  alt="Pearl Brooks"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Pearl Brooks
                  </h3>
                  <p className="font-body font-light leading-8">
                    Executive Assistant
                  </p>
                </div>
              </div>

              {/* Team Member 7 */}
              <div className="text-center col-span-2 col-start-2  md:col-span-2">
                <img
                  src={image7}
                  alt="Isaiah Griffin"
                  className="w-full rounded-md"
                />
                <div className="py-6">
                  <h3 className="text-xl font-medium text-primary-200 font-main">
                    Isaiah Griffin
                  </h3>
                  <p className="font-body font-light leading-8">
                    Chief Financial Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Aboutpage;
