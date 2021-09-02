import React, { FC, MouseEventHandler } from "react";

const DeveloperToolsCard: FC<{
  className: string | undefined;
  title: string;
  description: string;
  CTALink?: string;
  CTAText?: string;
  CTAHandler?: MouseEventHandler;
}> = ({
  title,
  description,
  CTALink = "#",
  CTAText = "Learn more",
  CTAHandler,
  className = "border-cyan-600 text-cyan-600",
}) => {
  return (
    <div className="bg-white border-2 border-gray-300 border-solid p-8 flex flex-col justify-between h-75 sm:h-100">
      <div className="flex">
        <h3 className={`text-3xl border-b-4 pb-5 border-solid ${className}`}>
          {title}
        </h3>
      </div>
      <p>{description}</p>
      <div className="flex flex-row gap-3 items-center">
        <div className="rounded-full border-2 border-black p-1">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
        <a href={CTALink} onClick={CTAHandler && CTAHandler}>
          {CTAText}
        </a>
      </div>
    </div>
  );
};

export default DeveloperToolsCard;
