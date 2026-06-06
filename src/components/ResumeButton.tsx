import React from "react";
import { ResumeIcon } from "@/assets/icons";
import { Button } from "@headlessui/react";

const ResumeButton = () => {
  return (
    <a
      href="/ArellanoGilbertoResume.pdf"
      target="_blank"
      aria-label="Download résumé"
      className="inline-block"
    >
      <Button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3.5 py-2 text-sm/6 font-semibold text-primary-text shadow-md shadow-emerald-900/40 ring-1 ring-inset ring-emerald-400/40 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-500/40 active:translate-y-0 active:bg-emerald-700">
        <ResumeIcon className="h-[18px] w-[18px] stroke-primary-text stroke-2" />
        Resume
      </Button>
    </a>
  );
};

export default ResumeButton;
