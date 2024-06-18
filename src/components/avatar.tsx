import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
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
      <div className="flex flex-col items-start">
        {" "}
        {/* Text Section, Header then subheader */}
        <h1 className="text-4xl font-bold text-primary-text sm:text-5xl">
          <a href="/">Gilberto Arellano</a>
        </h1>
        <h2 className="ml-1 text-base font-light tracking-tight text-secondary-text sm:text-xl">
          Software Engineer
        </h2>
      </div>
    </div>
  );
};

export default Avatar;
