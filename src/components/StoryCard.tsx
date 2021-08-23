import React, { FC, HTMLAttributes } from "react";

export type StoryCardProps = HTMLAttributes<HTMLElement> & {
  bgURL?: string;
  svg?: JSX.Element;
  description: string;
  title: string;
};
const StoryCard: FC<StoryCardProps> = (props) => {
  const {
    bgURL = "http://lorempixel.com/1200/1200/",
    svg = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
    ),
    title,
    description,
  } = props;
  return (
    <section
      {...props}
      className={`bg-texture bg-gray-600 bg-blend-multiply text-white p-10 bg-cover bg-center ${props.className}`}
      style={{ backgroundImage: 'url("' + bgURL + '")' }}
    >
      {svg}
      <h3 className="text-4xl">{title}</h3>
      <p>{description}</p>
    </section>
  );
};

export default StoryCard;
