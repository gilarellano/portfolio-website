import Image from 'next/image';
import GithubIcon from '../assets/icons/github.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';
import XIcon from '../assets/icons/x.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import SourceCodeIcon from '../assets/icons/source_code.svg';
import BioIcon from '../assets/icons/bio_icon.svg';
import ProjectIcon from '../assets/icons/projects_icon.svg';
import ExperienceIcon from '../assets/icons/experience_icon.svg';
import ResumeIcon from '../assets/icons/resume_icon.svg';

export default function Home() {
  return (
    <main className="bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="flex justify-between gap-4">

        {/* Left Column */}
        <div className="sticky top-0 flex min-h-screen w-1/2 flex-col justify-between py-24">

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
                <h1 className="text-5xl font-bold text-primary-text sm:text-5xl">
                  <a href="/">Gilberto Arellano</a>
                </h1>
                <h2 className="ml-1 text-base font-light tracking-tight text-secondary-text sm:text-xl">
                  Software Engineer
                </h2>
              </div>
            </div>

            {/* Area Chart #1 */}
            <div className="mt-8 w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3">
              <p>Area Chart #1</p>
            </div>

            {/* Area Chart #2 */}
            <div className="mt-8 w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3">
              <p>Area Chart #2</p>
            </div>

            {/* Sidebar Navigation */}
            <div className="mt-8 flex flex-col p-4 items-start border-2 border-custom rounded-custom gap-4 w-fit h-fit">
              <div className="flex flex-row gap-2 items-center">
                <BioIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="#bio" className='text-secondary-text text-base'>Bio</a>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ProjectIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="#projects" className='text-secondary-text text-base'>Projects</a>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ExperienceIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="#experience" className='text-secondary-text text-base'>Experience</a>
              </div>

              <div className="flex flex-row gap-2 items-center">
                <ResumeIcon className="w-6 h-6 stroke-custom shrink-0"/>
                <a href="/ArellanoGilbertoResume.pdf" className='text-secondary-text text-base'>Resume</a>
              </div>
            </div>
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
          {/* Bio */}
          {/* List of Projects */}
          {/* List of Experience */}
        </div>
      </div>
    </main>
  );
}
