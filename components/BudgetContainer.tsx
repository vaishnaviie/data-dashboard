import React from "react";
import BudgetCard from "./reusableComponents/BudgetCard";
import { title } from "process";

const BudgetContainer = () => {
  return (
    <div className="mb-[30px]">
      <div className="flex justify-between   ">
        <div className="flex flex-col ml-[31px] mt-[30px] mb-[29px] ">
          <span className="text-[#404D61] font-['Roboto'] text-[24px] font-medium leading-[22px] ">
            Employee
          </span>
          <span className="text-[#757D8A] font-['Roboto'] text-[16px] font-normal leading-[22px] ">
            18 results found
          </span>
        </div>
        <div className="w-[483px] h-[44px] flex gap-[20px] mr-[30px] mt-[32px] mb-[30px] ">
          <div className="w-[60px] h-[44px] px-[20px] py-[10px] border-[1px] border-solid border-[#E0E0E0] rounded-[10px] flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className=" w-[183px] h-[44px] px-[20px] py-[10px] border-[1px] border-solid border-[#E0E0E0] rounded-[10px] flex justify-center items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 5H21"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 9H18"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 13H15"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 17L6 20L9 17"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 18V4"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-[#757D8A] font-['Roboto'] text-[14px] font-normal leading-[22px]">
              Sort: Chronological
            </span>
          </div>

          <div className=" w-[200px] h-[44px] px-[20px] py-[10px] border-[1px] border-solid border-[#E0E0E0] rounded-[10px] flex justify-between items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-[#757D8A] font-['Roboto'] text-[14px] font-normal leading-[22px] block">
              August, 2021
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#757D8A"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-[50px] ml-[30px] mr-[32px]">
        <BudgetCard
          title="Total Budget"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path d="M9 13.25L1.5 5.75L16.5 5.75L9 13.25Z" fill="#F63F3F" />
            </svg>
          }
        />

        <div className="bg-[#5B6AD0] w-[226px] h-[130px] rounded-[10px]  ">
          <div className="flex flex-col gap-[15px] pl-[20px] pt-[20px] ">
            <div className="flex gap-[5px]">
              <span className="text-[#FFF] font-['Roboto'] text-[16px] font-normal leading-[22px]">
                Monthly Budget
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path d="M9 13.25L1.5 5.75L16.5 5.75L9 13.25Z" fill="white" />
              </svg>
            </div>

            <span className="text-[#FFF] font-['Roboto'] text-[22px] font-bold leading-[22px] block">
              $85,125.00
            </span>
          </div>
        </div>

        <BudgetCard
          title=" Weekly Budget"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path d="M9 5.75L16.5 13.25L1.5 13.25L9 5.75Z" fill="#44C5E2" />
            </svg>
          }
        />

        <BudgetCard
          title=" Todays Budger"
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path d="M9 5.75L16.5 13.25L1.5 13.25L9 5.75Z" fill="#44C5E2" />
            </svg>
          }
        />
      </div>
    </div>
  );
};

export default BudgetContainer;
