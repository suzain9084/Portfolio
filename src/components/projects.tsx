import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Sementic Review classifiication",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  },
  {
    title: "Image Classification Modal",
    description:
      "A technology company that builds economic infrastructure for the internet.",
  },
  {
    title: "AI Based Grievance Management System",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
  },
  {
    title: "Video Call Web application",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
  },
  {
    title: "Real time Chat appplication",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
  },
  {
    title: "Photo Gallery web",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  },
];

export const Projects = () => {
  return (
    <div className="bg-gray-100 w-full items-center relative">
      <div className="max-w-7xl text-center m-auto mt-16">
        <h1 className="text-4xl bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          My Projects
        </h1>
        <p>
          A collection of projects that showcase my skills and passion for
          creating exceptional digital experiences.
        </p>
      </div>
      <div className="max-w-7xl w-full m-auto">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};
