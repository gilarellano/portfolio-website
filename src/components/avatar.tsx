import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <div className="mb-8 w-full flex flex-row justify-start gap-4 items-center">
      {/* Circular Picture */}
      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
        {/*<div className="border-custom w-20 h-20 lg:w-24 lg:h-24 rounded-full border-custom-width flex items-center justify-center overflow-hidden flex-shrink-0">*/}
        <Image
          src="/headshot.webp"
          alt="Avatar"
          width={384}
          height={384}
          priority
          quality={95}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col items-start">
        {" "}
        {/* Text Section, Header then subheader */}
        <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-primary-text">
          {/*<h1 className="text-3xl lg:text-5xl font-bold text-primary-text sm:text-4xl">*/}

          <a href="/">Gilberto Arellano</a>
        </h1>
        <h2 className="ml-0.5 lg:ml-1 lg:text-xl font-light tracking-tight text-secondary-text sm:text-xl">
          Software Engineer
        </h2>
      </div>
    </div>
  );
};

export default Avatar;
