export default function Home() {
  return (
    <main className="bg-background mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">

        {/* Left Column */}
        <div className="sticky top-0 flex max-h-screen w-1/2 flex-col justify-between py-24 gap-y-8">

          {/* Avatar */}
          <div className="w-full flex flex-row justify-start gap-4 items-center">
            <div className="border-custom w-24 h-24 rounded-full border-2 flex items-center justify-center overflow-hidden flex-shrink-0"></div> {/* Circular Image */}
            <div className="flex flex-col items-start"> { /* Text Section, Header then subheader */}
              <h1 className="text-4xl font-bold text-primary-text sm:text-5xl">
                <a href="/">Gilberto Arellano</a>
              </h1>
              <h2 className="text-small font-light tracking-tight text-secondary-text sm:text-xl">
                Software Engineer
              </h2>
            </div>
          </div>

          {/* Area Chart #1 */}
          <div className="w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3">
            <p>Area Chart #1</p>
          </div>

          {/* Area Chart #2 */}
          <div className="w-[514px] p-4 border-2 border-custom rounded-custom flex flex-col items-center gap-3">
            <p>Area Chart #2</p>
          </div>

          {/* Sidebar Navigation */}
          <div className="flex flex-col p-4 items-start border-2 border-custom rounded-custom gap-4 w-fit h-fit">
            <p>Menu Item #1</p>
            <p>Menu Item #2</p>
            <p>Menu Item #3</p>
            <p>Menu Item #4</p>
          </div>

          <div className="mt-8 flex items-center">
            {/* Social Media Links */}
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
