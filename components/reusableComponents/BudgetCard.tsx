import React from "react";

interface props {
  title: string;
  //   bgcolor: string;
  svg: React.ReactElement;
}

const BudgetCard = ({ title, svg }: props) => {
  return (
    <div className="bg-[#F8F8F8] w-[226px] h-[130px] rounded-[10px]  ">
      <div className="flex flex-col gap-[15px] pl-[20px] pt-[20px] ">
        <div className="flex gap-[5px]">
          <span className="text-[#757D8A] font-['Roboto'] text-[16px] font-normal leading-[22px]">
            {title}
          </span>

          {svg}
        </div>

        <span className="text-[#404D61] font-['Roboto'] text-[22px] font-bold leading-[22px] block">
          $85,125.00
        </span>
      </div>
    </div>
  );
};

export default BudgetCard;
