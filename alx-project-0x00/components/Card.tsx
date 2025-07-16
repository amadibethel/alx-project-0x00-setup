import Image from "next/image";
import React from "react";
import Pill from "./Pill";
import HOUSE_IMAGE from "@/public/assets/images/house.png";
import STAR_IMAGE from "@/public/assets/images/star.png";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image className="rounded-lg" src={HOUSE_IMAGE} width={378.56} height={299.37} alt="house image" />

      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>

      <div className="flex items-center justify-between mt-2">
        <div>
          <h3 className="font-semibold text-[22px]">Villa Arrecife Beach House</h3>
          <p className="text-[#929292] text-[17px]">Sideman, Bali, Indonesia</p>
        </div>
        <div className="flex items-center">
          <Image src={STAR_IMAGE} alt="star" width={18} height={18} />
          <p className="ml-2 text-[17px] font-medium">4.76</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          <div className="flex items-center">
            {/* Icon 1 */}
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2456 9.22324..." fill="#131212" />
              <path d="M15.0837 3.40576..." fill="#131212" />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">4</p>
          </div>
          <div className="flex items-center">
            {/* Icon 2 */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.10254 12.1843..." fill="#131212" />
              <path d="M2.10119 9.18778..." fill="#131212" />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">2</p>
          </div>
          <div className="flex items-center">
            {/* Icon 3 */}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.9053 14.1692..." fill="#131212" />
            </svg>
            <p className="ml-1 text-[12.95px] font-medium">2-4</p>
          </div>
        </div>

        <p className="text-[22px] font-semibold">
          $2,450<span className="text-[14px] text-[#787878]">/n</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
