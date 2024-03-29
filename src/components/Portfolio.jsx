import React from "react";
import videogames from "../assets/portfolio/videogames.png";
import hangman from "../assets/portfolio/hangman.png";
import rockPaperScissors from "../assets/portfolio/rockPaperScissors.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: videogames,
      link: "https://pi-videogames-pablo.vercel.app/",
      code: "https://github.com/Pablo333333/PI-Videogames-main",
    },
    {
      id: 2,
      src: hangman,
      link: "https://hangman-pablo.vercel.app/",
      code: "https://github.com/Pablo333333/Hangman",
    },
    {
      id: 3,
      src: rockPaperScissors,
      link: "https://rock-paper-or-scissors-pablo.vercel.app/",
      code: "https://github.com/Pablo333333/rock-paper-or-scissors",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={link}>Demo </a>
               </button>
               <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href= {code}>Code </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;