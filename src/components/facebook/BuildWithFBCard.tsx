import React, { FC, MouseEventHandler } from "react";

const BuildWithFBCard: FC<{
  iconImgURL: string;
  title: string;
  description: string;
  CTALink: string;
  CTAText: string;
  CTAHandler?: MouseEventHandler;
}> = ({
  iconImgURL = "facebook-messenger.svg",
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
