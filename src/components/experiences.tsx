import React from "react";

const ListOfExperiences = () => {
    return (
        <section id="experiences">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>

            <div className="flex flex-col gap-y-12">
            {/* Job 1 */}
              <div className="flex flex-row gap-x-4">
                <p className="pt-0.5 w-[86px] shrink-0 text-secondary-text font-light text-xs sm:col-span-2">2014 - PRESENT</p>
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <div className="pb-2">
                      <h3 className="text-primary-text text-xl font-bold">Operations Manager & Systems Developer</h3>
                      <h4 className="text-secondary-text text-xs font-bold">Gilberto Arellano Windows, San Francisco</h4>
                    </div>
                    <p className="text-secondary-text text-xs font-base">Managed daily operations, staffing, inventory, and customer service to ensure a high-quality dining experience. Collaborated on menu development, marketing strategies, and financial planning, driving significant growth and establishing our taqueria as a beloved local spot.</p>
                  </div>
                  <ul className="flex flex-grid pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                    <li>CRM</li>
                    <li>Quickbooks</li>
                  </ul>
                </div>
              </div>

              {/* Job 2 */}
              <div className="flex flex-row gap-x-4">
                <p className="pt-0.5 w-[86px] shrink-0 text-secondary-text font-light text-xs sm:col-span-2">2016 - 2019</p>
                <div className="flex flex-col">
                  <div className="flex flex-col pb-2">
                    <div className="pb-2">
                      <h3 className="text-primary-text text-xl font-bold">Restaurant Co-Owner</h3>
                      <h4 className="text-secondary-text text-xs font-bold">La Capilla, Berkeley</h4>
                    </div>
                    <p className="text-secondary-text text-xs font-base">Managed daily operations, staffing, inventory, and customer service to ensure a high-quality dining experience. Collaborated on menu development, marketing strategies, and financial planning, driving significant growth and establishing our taqueria as a beloved local spot.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
};

export default ListOfExperiences;