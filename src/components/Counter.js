import React from 'react';
import useCountDown from '../hooks/useCountDown'; 
import timerBg from "../assest/timer_bg.png";

const Counter = () => {
  const { days, hours, minutes, seconds } = useCountDown("Mar 14,2023");

    return (
        <div className="grid grid-cols-4 gap-3 md:gap-10 mx-5">
          <div className="relative mx-auto">
            <div className="absolute left-0 right-0 mt-2 md:mt-6 lg:mt-10">
              <h4 className="text-white text-center font-bold md:text-5xl lg:text-8xl">
                0{days}
              </h4>
              <h4 className="text-white text-center text-xs md:text-2xl lg:text-5xl font-bold">
                Days
              </h4>
            </div>
            <img src={timerBg} className="w-fit" alt="" />
          </div>
          <div className="relative mx-auto">
            <div className="absolute left-0 right-0 mt-2 md:mt-6 lg:mt-10">
              <h4 className="text-white text-center font-bold md:text-5xl lg:text-8xl">
                {hours}
              </h4>
              <h4 className="text-white text-center text-xs md:text-2xl lg:text-5xl font-bold">
                Hours
              </h4>
            </div>
            <img src={timerBg} className="w-fit" alt="" />
          </div>
          <div className="relative mx-auto">
            <div className="absolute left-0 right-0 mt-2 md:mt-6 lg:mt-10">
              <h4 className="text-white text-center font-bold md:text-5xl lg:text-8xl">
                {minutes}
              </h4>
              <h4 className="text-white text-center text-xs md:text-2xl lg:text-5xl font-bold">
                Minutes
              </h4>
            </div>
            <img src={timerBg} className="w-fit" alt="" />
          </div>
          <div className="relative mx-auto">
            <div className="absolute left-0 right-0 mt-2 md:mt-6 lg:mt-10">
              <h4 className="text-white text-center font-bold md:text-5xl lg:text-8xl">
                {seconds}
              </h4>
              <h4 className="text-white text-center text-xs md:text-2xl lg:text-5xl font-bold">
                Seconds
              </h4>
            </div>
            <img src={timerBg} className="w-fit" alt="" />
          </div>
        </div>
    );
};

export default Counter;