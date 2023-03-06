import "./App.css";
import headerBanner from "./assest/header-banner.png";
import Crazy_bubble_shooter from "./assest/demo-gifts/Crazy_bubble_shooter.png";
import Queen_of_money from "./assest/demo-gifts/Queen_of_money.png";
import White_fairy from "./assest/demo-gifts/White_fairy.png";
import Love_hug from "./assest/demo-gifts/Love_hug.png";
import gift_bg from "./assest/gift_bg.png";
import inactive_button from "./assest/inactive_button.png";
import active_button from "./assest/active_button.png";
import Card from "./components/Card";
import sender_reward from "./assest/sender_reward.png";
import { useEffect, useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("data.json");
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app-bg 2xl:container mx-auto">
      <img src={headerBanner} className="w-full" alt="" />

      <div className="border-4 md:border-8 border-[#ffeb8a] rounded-lg pt-10 mx-5 md:mx-10">
        <Counter />

        <div className="relative mx-5 my-8 md:my-16">
          <div className="grid grid-cols-4 gap-5 absolute top-0 bottom-0 my-auto items-center px-10">
            {[Crazy_bubble_shooter, Queen_of_money, White_fairy, Love_hug].map(
              (image) => (
                <div>
                  <img src={image} alt="" />
                </div>
              )
            )}
          </div>
          <img src={gift_bg} className="w-full" alt="" />
        </div>

        <div className="backdrop-blur-sm bg-white/30 pt-5 md:pt-10 lg:pt-20 pb-10">
          <div className="flex items-center justify-between gap-6 lg:gap-0 mx-5">
            <button className="relative">
              <span className="text-white absolute right-0 left-0 mx-auto top-0 bottom-0 mt-2 md:mt-7 lg:mt-12 font-semibold text-center md:text-4xl lg:text-7xl">
                Hosts
              </span>
              <img src={inactive_button} alt="" />
            </button>
            <button className="relative">
              <span className="text-white absolute right-0 left-0 mx-auto top-0 bottom-0 mt-2 md:mt-7 lg:mt-12 font-semibold text-center md:text-4xl lg:text-7xl">
                Senders
              </span>
              <img src={active_button} alt="" />
            </button>
          </div>

          <div>
            {data.map((userData) => (
              <Card data={userData} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-10 py-10">
        <img className="mx-auto w-full" src={sender_reward} alt="" />
      </div>
    </div>
  );
}

export default App;
