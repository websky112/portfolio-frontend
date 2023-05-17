import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { BsArrowLeftShort, BsLink45Deg } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";

import { PORTFOLIOS } from "../assets/images/Portfolios/PortfolioList";

export const Portfolio = () => {
  const { pathname } = useLocation();

  const data = useMemo(() => {
    return PORTFOLIOS.find((portfolio) => portfolio.route === pathname);
  }, [pathname]);

  if (!data) {
    return <></>;
  }

  return (
    <div className="w-full p-8 lg:p-12 xl:p-16 pt-28 lg:pt-28 xl:pt-28">
      <div className="text-white text-6xl font-bold my-8 flex gap-4 items-center">
        <Link
          to={-1}
          className="w-14 h-14 mt-1 rounded-full flex justify-center items-center hover:bg-green-950"
        >
          <BsArrowLeftShort />
        </Link>
        {data.label}
        <a
          href={data.externalLink}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 mt-1 rounded-full flex justify-center items-center hover:bg-green-950"
        >
          <BsLink45Deg className="text-gray-200 text-4xl" />
        </a>
      </div>
      <p className="text-white text-2xl max-w-3xl mb-20">{data.description}</p>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <h3 className="text-3xl font-semibold text-white mt-16 mb-5">Features</h3>
      <p className="text-lg text-white">{data.features}</p>
      <h3 className="text-3xl font-semibold text-white mt-16 mb-5">
        Core functionalities
      </h3>
      <p className="text-lg text-white">{data.functionalities}</p>
      <h3 className="text-3xl font-semibold text-white mt-16 mb-5">
        Challenges
      </h3>
      <p className="text-lg text-white">{data.challenges}</p>
    </div>
  );
};
