import React from "react";

interface props {
  title: string;
  svg: React.ReactElement;
  value: number;
}

const NavbarCards = ({ title, svg, value }: props) => {
  return (
    <div
      className={`flex justify-between items-center  w-[210px] ml-[20px] mr-[20px] ${
        title === "Data Table" && `bg-[#FFF] rounded-[5px]`
      } `}
    >
      <div className="  justify-between items-center flex ml-[15px] mt-[10px] mb-[10px]   ">
        {svg}
        <div className="text-[#757D8A] font-['Roboto'] text-[14px] font-normal leading-[22px] ml-[15px] ">
          {title}
        </div>
      </div>
      {value > 1 && (
        <div className="w-[30px] h-[24px] rounded-[100px] bg-[#5B6AD0] text-[#FFF] font-['Roboto'] text-[14px] font-bold leading-[22px] flex justify-center items-center">
          {value}
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="mr-[15px]"
      >
        <path
          d="M4 12H20"
          stroke="#757D8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 6H20"
          stroke="#757D8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 18H20"
          stroke="#757D8A"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default NavbarCards;
