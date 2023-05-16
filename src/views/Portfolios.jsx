import { BsLinkedin, BsTelegram, BsFilePdfFill } from "react-icons/bs";

import { PortoflioCard } from "../components/shared";

import { PORTFOLIOS } from "../assets/images/Portfolios/PortfolioList";

export const Portfolios = () => {
  return (
    <div className="w-full p-8 lg:p-12 xl:p-16 pt-28 lg:pt-28 xl:pt-28">
      <h1
        className="text-white text-6xl text-center font-bold mb-4"
        style={{ fontFamily: "Caveat" }}
      >
        Watson Zhao
      </h1>
      <p className="text-white text-2xl text-center mb-4">
        Senior Full Stack Engineer
      </p>
      <div className="flex gap-6 mb-20 justify-center">
        <a
          href="https://drive.google.com/file/d/1YBuf74eWltCQJP-_hwLvNqYBpoVHr8hL/view"
          target="_blank"
          rel="noreferrer"
        >
          <BsFilePdfFill color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/watson-zhao-2a92441a4/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin color="white" />
        </a>
        <a href="https://t.me/silverstar009" target="_blank" rel="noreferrer">
          <BsTelegram color="white" />
        </a>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {PORTFOLIOS.map((portfolio) => (
          <PortoflioCard key={portfolio.id} data={portfolio} />
        ))}
      </div>
    </div>
  );
};
