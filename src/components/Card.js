import React from "react";
import line from "../assest/line.png";
import imgBorder from "../assest/img-border.png";
import topBadgeOne from "../assest/top1_badge.png";
import topBadgeTwo from "../assest/top2_badge.png";
import topBadgeThree from "../assest/top3_badge.png";
import coin_bg from "../assest/coin_bg.png";
import angel from "../assest/demo badges/angel.png";
import arab_money from "../assest/demo badges/arab_money.png";
import gentle_guy from "../assest/demo badges/gentle_guy.png";
import kiss_star from "../assest/demo badges/kiss_star.png";
import marks_man from "../assest/demo badges/marks_man.png";

const Card = ({ data }) => {
  return (
    <div className="mx-5 mt-4">
      <div className="relative">
        <div className="absolute pl-5 md:pl-10 lg:pl-20 lg:pr-16 py-3 md:py-5 lg:py-11 2xl:py-16 flex justify-between h-full w-full">
          <div className="flex">
            <div className="flex flex-col items-center justify-between md:py-5 mr-2 md:mr-5">
              <img
                src={
                  (data?.badge == "top1" && topBadgeOne) ||
                  (data?.badge == "top2" && topBadgeTwo) ||
                  topBadgeThree
                }
                className="w-4 md:w-8 lg:w-full"
                alt=""
              />
              <img
                src={data?.countryImg}
                className="w-5 md:w-12 border border-[#ffeb8a] rounded-full p-[2px] md:p-2"
                alt=""
              />
            </div>
            <div className="relative pt-2 w-[50px] md:w-[125px] mr-3 md:mr-10 lg:mr-0 lg:w-[185px] overflow-hidden">
              <img src={data?.userImg} className="h-full" alt="" />
              <img src={imgBorder} className="absolute h-full top-0" alt="" />
            </div>
          </div>
          <div className="md:pt-5 w-full lg:w-auto">
            <h4 className="text-white text-xs md:text-2xl lg:text-5xl font-bold">
              {data?.name.slice(0, 10)}...
            </h4>
            <h4 className="text-[#ffeb8a] text-xs md:text-2xl lg:text-5xl font-semibold lg:mt-4">
              Hive ID: {data?.hiveId}
            </h4>
            <div className="flex gap-2 md:gap-5 mt-1 lg:mt-4">
              <p className="bg-[#e0bc08] px-1 lg:px-4 text-[5px] md:text-[10px] lg:text-sm rounded-full text-white">
                VIP5
              </p>
              <p className="bg-red-500 px-1 lg:px-4 text-[5px] md:text-[10px] lg:text-sm rounded-full text-white">
                {data?.gender}
              </p>
              <p className="px-1 lg:px-4 text-[5px] md:text-[10px] lg:text-sm rounded-tl-lg rounded-br-lg bg-gradient-to-r from-[#e0bc08] via-[#e0bc08] to-[#998001] text-white">
                35
              </p>
              <p className="px-1 lg:px-4 text-[5px] md:text-[10px] lg:text-sm rounded-tl-lg rounded-br-lg bg-gradient-to-r from-sky-500 via-purple-500 to-indigo-500 text-white">
                2000
              </p>
            </div>
            <div className="flex gap-2 mt-1 md:mt-2 lg:mt-4 ">
              <img src={angel} className="w-3 md:w-7 lg:w-full" alt="" />
              <img src={arab_money} className="w-3 md:w-7 lg:w-full" alt="" />
              <img src={gentle_guy} className="w-3 md:w-7 lg:w-full" alt="" />
              <img src={kiss_star} className="w-3 md:w-7 lg:w-full" alt="" />
              <img src={marks_man} className="w-3 md:w-7 lg:w-full" alt="" />
            </div>
          </div>
          <div className="mt-2 md:mt-6 lg:mt-10 mr-1 md:mr-8">
            <h4 className="text-white text-xs md:text-2xl lg:text-5xl font-bold text-center mb-1 md:mb-2">
              HIVES
            </h4>
            <div className="relative">
              <p className="absolute right-0 left-0 mx-auto text-center text-[#ebc50b] text-[10px] md:text-lg lg:text-5xl font-semibold mt-1 md:mt-2 lg:mt-5">
                {data?.hives}
              </p>
              <img
                src={coin_bg}
                className=" w-[70%] mx-auto md:w-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <img src={line} className="w-full" alt="" />
      </div>
    </div>
  );
};

export default Card;
