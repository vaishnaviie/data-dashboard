import React from "react";

const Searchbar = () => {
  return (
    <div className="h-[114px] w-[1116px] flex items-center gap-[211px] mx-[30px] ">
      <span className=" block w-[133px] h-[22px]  mt-[46px] mb-[46px] text-[#404D61] font-['Roboto'] text-[28px] font-bold leading-[22px]">
        Data Table
      </span>

      <div className="flex gap-[20px]   ">
        <div className="w-[470px] h-[44px] flex gap-[298px] items-center border-[1px] border-solid border-[#5B6AD0] rounded-[10px] pl-[15px] pr-[15px] pt-[10px] pb-[10px]">
          <div className="flex gap-[10px] items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.9999 21L16.6499 16.65"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span className="block  text-[#404D61] font-['Roboto'] text-[16px] font-normal leading-[22px]">
              Employee|
            </span>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-[15px]"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#757D8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 9L9 15"
              stroke="#757D8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 9L15 15"
              stroke="#757D8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <button className=" w-[142px] h-[45px] text-[#FFF] font-['Roboto'] text-[16px] font-normal leading-[22px] border-[1px] border-solid border-[#5B6AD0] bg-[#5B6AD0] px-[20px] py-[13px] rounded-[10px] flex justify-center items-center">
          Add Employee
        </button>

        <div className="w-[50px] h-[45px] p-[13px] border-[1px] border-solid border-[#E0E0E0] rounded-[10px] flex justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 2L22 6"
              stroke="#757D8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.5 20.5L19 9L15 5L3.5 16.5L2 22L7.5 20.5Z"
              stroke="#757D8A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
