import React, { FC, MouseEventHandler } from "react";

const BuildWithFBCard: FC<{
  iconImgURL: string;
  title: string;
  description: string;
  CTALink: string;
  CTAText: string;
  CTAHandler?: MouseEventHandler;
}> = ({
  iconImgURL = "https://scontent-amt2-1.xx.fbcdn.net/v/t39.2365-6/226177888_798170684162453_8023468962600941236_n.svg?_nc_cat=106&ccb=1-5&_nc_sid=ad8a9d&_nc_ohc=wdNn9gMghdQAX_s9WYO&_nc_ht=scontent-amt2-1.xx&oh=4911bb5f967b8ea93c2d978bf9f11ca3&oe=61338173",
  title,
  description,
  CTALink = "#",
  CTAText,
  CTAHandler,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-10">
      <img className="w-12" src={iconImgURL} alt={iconImgURL} />
      <h3 className="text-2xl">{title}</h3>
      <p>{description}</p>
      <div className="flex-1" />
      <a
        href={CTALink}
        className="underline"
        onClick={CTAHandler && CTAHandler}
      >
        {CTAText}
      </a>
    </div>
  );
};

export default BuildWithFBCard;
