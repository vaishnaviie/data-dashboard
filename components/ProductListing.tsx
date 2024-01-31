import { data } from "@/data/Data";
import Image from "next/image";
import React from "react";

const ProductListing = () => {
  return (
    <>
      <div className="flex ">
        <div className=" w-[306px] h-[50px] pl-[30px] pr-[30px]  text-[#B1B1B1] font-['Roboto'] text-[14px] font-normal leading-[22px] flex gap-[10px] items-center ">
          <span>Name</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M6 8.5L1 3.5L11 3.5L6 8.5Z" fill="#B1B1B1" />
          </svg>
        </div>
        <div className="w-[344px] h-[50px] pl-[30px] pr-[30px]  text-[#B1B1B1] font-['Roboto'] text-[14px] font-normal leading-[22px] flex gap-[10px] items-center ">
          <span>Email</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M6 8.5L1 3.5L11 3.5L6 8.5Z" fill="#B1B1B1" />
          </svg>
        </div>
        <div className="w-[208px] h-[50px] pl-[30px] pr-[30px]  text-[#B1B1B1] font-['Roboto'] text-[14px] font-normal leading-[22px] flex gap-[10px] items-center ">
          <span>Status</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M6 8.5L1 3.5L11 3.5L6 8.5Z" fill="#B1B1B1" />
          </svg>
        </div>
        <div className="w-[258px] h-[50px] pl-[30px] pr-[30px]  text-[#B1B1B1] font-['Roboto'] text-[14px] font-normal leading-[22px] flex gap-[10px] items-center ">
          <span>Role</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path d="M6 8.5L1 3.5L11 3.5L6 8.5Z" fill="#B1B1B1" />
          </svg>
        </div>
      </div>
      <div>
        {data.map(({ profile, name, email, status, role }, index) => (
          <div
            className={`text-[black] flex ${
              index % 2 === 0 ? `bg-[#F8F8F8]` : `bg-[#FFF]`
            }  ${index === 9 && `rounded-[30px]`} `}
            key={index}
          >
            <div className=" w-[306px] h-[50px] pl-[30px] pr-[30px] flex gap-[20px] items-center ">
              <div>
                <Image src={profile} alt="profile" width={30} height={30} />
              </div>

              {name}
            </div>
            <div className="w-[344px] h-[50px] pl-[30px] pr-[30px] flex items-center ">
              {email}
            </div>
            <div className="w-[208px] h-[50px] pl-[30px] pr-[30px] flex items-center ">
              {status}
            </div>
            <div className="w-[258px] h-[50px] pl-[30px] pr-[30px] flex justify-between items-center ">
              <div>{role}</div>
              <div className="flex gap-[15px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g clip-path="url(#clip0_33_266)">
                    <path
                      d="M12 1.33334L14.6667 4"
                      stroke="#757D8A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.99992 13.6667L12.6666 6L9.99992 3.33334L2.33325 11L1.33325 14.6667L4.99992 13.6667Z"
                      stroke="#757D8A"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_33_266">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M2 4H3.33333H14"
                    stroke="#757D8A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.33325 4V2.66667C5.33325 2.31305 5.47373 1.97391 5.72378 1.72386C5.97383 1.47381 6.31296 1.33334 6.66659 1.33334H9.33325C9.68687 1.33334 10.026 1.47381 10.2761 1.72386C10.5261 1.97391 10.6666 2.31305 10.6666 2.66667V4M12.6666 4V13.3333C12.6666 13.687 12.5261 14.0261 12.2761 14.2761C12.026 14.5262 11.6869 14.6667 11.3333 14.6667H4.66659C4.31296 14.6667 3.97382 14.5262 3.72378 14.2761C3.47373 14.0261 3.33325 13.687 3.33325 13.3333V4H12.6666Z"
                    stroke="#757D8A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.66675 7.33334V11.3333"
                    stroke="#757D8A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.33325 7.33334V11.3333"
                    stroke="#757D8A"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
