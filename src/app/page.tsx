import Image from "next/image";
import GithubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";
import XIcon from "../assets/icons/x.svg";
import InstagramIcon from "../assets/icons/instagram.svg";
import SourceCodeIcon from "../assets/icons/source_code.svg";
import BioIcon from "../assets/icons/bio_icon.svg";
import ProjectIcon from "../assets/icons/projects_icon.svg";
import ExperienceIcon from "../assets/icons/experience_icon.svg";
import ResumeIcon from "../assets/icons/resume_icon.svg";

export default function Home() {
  return (
    <main className="bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Column */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">

          <div>
            {/* Avatar */}
            <div className="w-full flex flex-row justify-start gap-4 items-center">
              {/* Circular Picture */}
              <div className="border-custom w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image 
                  src="/headshot.webp" 
                  alt="Avatar" 
                  width={96} 
                  height={96} 
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start"> { /* Text Section, Header then subheader */}
                <h1 className="text-4xl font-bold text-primary-text sm:text-5xl">
                  <a href="/">Gilberto Arellano</a>
                </h1>
                <h2 className="ml-1 text-base font-light tracking-tight text-secondary-text sm:text-xl">
                  Software Engineer
                </h2>
              </div>
            </div>

            {/* Area Chart #1
            <div className="mt-8 w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3">
              <p>Area Chart #1</p>
            </div>
            */}

            {/* Area Chart #2
            <div className="mt-8 w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3">
              <p>Area Chart #2</p>
            </div>
            */}

            {/* Sidebar Navigation */}
            <nav className="nav hidden lg:block">
            <div className="mt-8 flex flex-col p-4 items-start border-2 border-custom rounded-custom gap-4 w-fit h-fit">
              <div className="flex flex-row gap-2 items-center">
                <BioIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="#bio" className="text-secondary-text text-base">Bio</a>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ProjectIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="#projects" className="text-secondary-text text-base">Projects</a>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ExperienceIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="#experience" className="text-secondary-text text-base">Experience</a>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ResumeIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="/ArellanoGilbertoResume.pdf" className="text-secondary-text text-base">Resume</a>
              </div>
            </div>
            </nav>
          </div>

          {/* Social Media Links */}
          <div className="flex mt-8 gap-5 items-center">
            <GithubIcon className="text-secondary w-6 h-6 shrink-0" />
            <LinkedInIcon className="text-secondary w-6 h-6 shrink-0" />
            <XIcon className="text-secondary w-6 h-6 shrink-0" />
            <InstagramIcon className="text-secondary w-6 h-6 shrink-0" />
            <SourceCodeIcon className="stroke-custom stroke-2 w-6 h-6 shrink-0" />
          </div>

        </div>

        {/* Right Column */}
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <section id="bio" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div className="leading-relaxed text-secondary-text text-base font-light">
              {/* 1st Paragraph */}
              <p className="mb-4">
                As a recent graduate from Chapman University with a Bachelors in Software Engineering, I bring a blend of technical skills and hands-on experience. I ran a small taqueria in Berkeley, where I learned business operations and how to manage a team. Currently, Im helping manage my familys wood window manufacturing business in San Francisco, focusing on transitioning to digital systems. One of my key projects is a Window Quote Calculator that speeds up quote generation.
              </p>

              {/* 2nd Paragraph */}
              <p className="mb-4">
                Ive planned, designed, developed, tested, and deployed various projects using technologies like React, Next.js, TypeScript, PostgreSQL, and AWS. I enjoy combining business insights with software development to create practical solutions that meet both operational and customer needs. This approach helps me see the bigger picture and understand how technology impacts business performance
              </p>
            </div>
          </section>

          <section id="projects">
            {/* Project Header*/}
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>

            {/* List of Projects */}
            <div className="flex flex-col gap-y-12 pb-36">
              <div className="flex flex-row gap-x-4">
                  {/*Screenshot image of project*/}
                  <Image
                    src="/project_screenshot.webp"
                    alt="Academic Advising Tool Screenshot"
                    width={86}
                    height={68}
                    className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
                  />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-xl font-bold">Academic Advising Tool</h3>
                  <p className="text-secondary-text text-xs">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                    <li>AWS</li>
                    <li>Typescript</li>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Jest</li>
                    <li>SonarQube</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-row gap-x-4">
                {/*Screenshot image of project*/}
                <Image
                  src="/project_screenshot.webp"
                  alt="Academic Advising Tool Screenshot"
                  width={86}
                  height={68}
                  className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
                />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-xl font-bold">Window Quote Project</h3>
                  <p className="text-secondary-text text-xs">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                    <li>C++</li>
                    <li>Documentation</li>
                    <li>CI/CD</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-row gap-x-4">
                {/*Screenshot image of project*/}
                <Image
                    src="/project_screenshot.webp"
                    alt="Academic Advising Tool Screenshot"
                    width={86}
                    height={68}
                    className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
                />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-xl font-bold">Long Short Term Memory: Speech Emulation</h3>
                  <p className="text-secondary-text text-xs">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                    <li>sci-kit learn</li>
                    <li>API</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-row gap-x-4">
                {/*Screenshot image of project*/}
                <Image
                  src="/project_screenshot.webp"
                  alt="Academic Advising Tool Screenshot"
                  width={86}
                  height={68}
                  className="mt-1 shrink-0 w-[86px] h-[68px] border-2 border-custom rounded-custom"
                />
                <div className="flex flex-col gap-y-2">
                  <h3 className="text-primary-text text-xl font-bold">Game Of Life: Showcasing OOP Practices</h3>
                  <p className="text-secondary-text text-xs">Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.</p>
                  <ul className="flex flex-grid flex-wrap pt-2 gap-3 text-primary text-xs font-extralight *:rounded-full *:border *:border-green-950 *:bg-green-950 *:px-3 *:py-1">
                    <li>C++</li>
                  </ul>
                </div>
              </div>
            </div>

          </section>

          {/* List of Experience */}
          <section id="experience">
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

        </div>
      </div>
    </main>
  );
}
