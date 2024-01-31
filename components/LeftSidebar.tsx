import Image from "next/image";
import React from "react";
import NavbarCards from "./reusableComponents/NavbarCards";

// opacity-[0.5]
const LeftSidebar = () => {
  return (
    <div className="w-[250px] h-[941px] bg-[#F1F2F6] relative">
      <div className="w-[250px] h-[114px] bg-[#F1F2F6] flex ">
        <div className="ml-[20px] mt-[40px] mb-[38px]  ">
          <Image src="/img/Ellipse.png" alt="profile" width={40} height={40} />
        </div>

        <div className="flex flex-col mt-[38px] mb-[32px] ml-[10px] mr-[30px] ">
          <span className="text-[#5A6474] font-['Roboto'] text-[12px] font-light leading-[22px]">
            Welcome back,
          </span>
          <span className="text-[#404D61] font-['Roboto'] text-[18px] font-medium leading-[22px]">
            Drax
          </span>
        </div>
        <div className="w-[50px] h-[40px] rounded-[5px] bg=[#FFF] border-t-[0.5px] border-solid border-[#E0E0E0] mt-[40px] mr-[20px] mb[34px] bg-[#FFF] flex justify-center items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12.22 2.5H11.78C11.2496 2.5 10.7409 2.71071 10.3658 3.08579C9.99072 3.46086 9.78 3.96957 9.78 4.5V4.68C9.77964 5.03073 9.68706 5.37519 9.51154 5.67884C9.33602 5.98248 9.08374 6.23464 8.78 6.41L8.35 6.66C8.04596 6.83554 7.70108 6.92795 7.35 6.92795C6.99893 6.92795 6.65404 6.83554 6.35 6.66L6.2 6.58C5.74107 6.31526 5.19584 6.24344 4.684 6.38031C4.17217 6.51717 3.73555 6.85154 3.47 7.31L3.25 7.69C2.98526 8.14893 2.91345 8.69416 3.05031 9.206C3.18717 9.71783 3.52154 10.1544 3.98 10.42L4.13 10.52C4.43228 10.6945 4.68362 10.9451 4.85905 11.2468C5.03448 11.5486 5.1279 11.891 5.13 12.24V12.75C5.1314 13.1024 5.03965 13.449 4.86405 13.7545C4.68844 14.0601 4.43521 14.3138 4.13 14.49L3.98 14.58C3.52154 14.8456 3.18717 15.2822 3.05031 15.794C2.91345 16.3058 2.98526 16.8511 3.25 17.31L3.47 17.69C3.73555 18.1485 4.17217 18.4828 4.684 18.6197C5.19584 18.7566 5.74107 18.6847 6.2 18.42L6.35 18.34C6.65404 18.1645 6.99893 18.0721 7.35 18.0721C7.70108 18.0721 8.04596 18.1645 8.35 18.34L8.78 18.59C9.08374 18.7654 9.33602 19.0175 9.51154 19.3212C9.68706 19.6248 9.77964 19.9693 9.78 20.32V20.5C9.78 21.0304 9.99072 21.5391 10.3658 21.9142C10.7409 22.2893 11.2496 22.5 11.78 22.5H12.22C12.7504 22.5 13.2591 22.2893 13.6342 21.9142C14.0093 21.5391 14.22 21.0304 14.22 20.5V20.32C14.2204 19.9693 14.3129 19.6248 14.4885 19.3212C14.664 19.0175 14.9163 18.7654 15.22 18.59L15.65 18.34C15.954 18.1645 16.2989 18.0721 16.65 18.0721C17.0011 18.0721 17.346 18.1645 17.65 18.34L17.8 18.42C18.2589 18.6847 18.8042 18.7566 19.316 18.6197C19.8278 18.4828 20.2645 18.1485 20.53 17.69L20.75 17.3C21.0147 16.8411 21.0866 16.2958 20.9497 15.784C20.8128 15.2722 20.4785 14.8356 20.02 14.57L19.87 14.49C19.5648 14.3138 19.3116 14.0601 19.136 13.7545C18.9604 13.449 18.8686 13.1024 18.87 12.75V12.25C18.8686 11.8976 18.9604 11.551 19.136 11.2455C19.3116 10.9399 19.5648 10.6862 19.87 10.51L20.02 10.42C20.4785 10.1544 20.8128 9.71783 20.9497 9.206C21.0866 8.69416 21.0147 8.14893 20.75 7.69L20.53 7.31C20.2645 6.85154 19.8278 6.51717 19.316 6.38031C18.8042 6.24344 18.2589 6.31526 17.8 6.58L17.65 6.66C17.346 6.83554 17.0011 6.92795 16.65 6.92795C16.2989 6.92795 15.954 6.83554 15.65 6.66L15.22 6.41C14.9163 6.23464 14.664 5.98248 14.4885 5.67884C14.3129 5.37519 14.2204 5.03073 14.22 4.68V4.5C14.22 3.96957 14.0093 3.46086 13.6342 3.08579C13.2591 2.71071 12.7504 2.5 12.22 2.5V2.5Z"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 15.5C13.6569 15.5 15 14.1569 15 12.5C15 10.8431 13.6569 9.5 12 9.5C10.3431 9.5 9 10.8431 9 12.5C9 14.1569 10.3431 15.5 12 15.5Z"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-col gap-10px">
        <NavbarCards
          title="Search"
          value={0}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 14L11.1 11.1"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />

        <NavbarCards
          title="Data Table"
          value={0}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M6.66667 2H2V8H6.66667V2Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 2H9.33337V5.33333H14V2Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 8H9.33337V14H14V8Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66667 10.6667H2V14H6.66667V10.6667Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />

        <NavbarCards
          title="Product"
          value={0}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6H14"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 10H14"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 2V14"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />

        <NavbarCards
          title="Analytics"
          value={0}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M9.66663 1.33334H3.99996C3.64634 1.33334 3.3072 1.47382 3.05715 1.72387C2.8071 1.97392 2.66663 2.31305 2.66663 2.66668V13.3333C2.66663 13.687 2.8071 14.0261 3.05715 14.2762C3.3072 14.5262 3.64634 14.6667 3.99996 14.6667H12C12.3536 14.6667 12.6927 14.5262 12.9428 14.2762C13.1928 14.0261 13.3333 13.687 13.3333 13.3333V5.00001L9.66663 1.33334Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.33337 1.33334V5.33334H13.3334"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6667 8.66666H5.33337"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6667 11.3333H5.33337"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66671 6H5.33337"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />

        <NavbarCards
          title="Calender"
          value={15}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26363 2 4.00001V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4.00001C14 3.26363 13.403 2.66667 12.6667 2.66667Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.6666 1.33333V3.99999"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.33337 1.33333V3.99999"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 6.66667H14"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />

        <NavbarCards
          title="Messanger"
          value={0}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 7.66667C14.0023 8.54658 13.7967 9.41459 13.4 10.2C12.9296 11.1412 12.2065 11.9328 11.3116 12.4862C10.4168 13.0396 9.3855 13.3329 8.33333 13.3333C7.45342 13.3356 6.58541 13.1301 5.8 12.7333L2 14L3.26667 10.2C2.86995 9.41459 2.66437 8.54658 2.66667 7.66667C2.66707 6.61451 2.96041 5.58324 3.51381 4.68837C4.06722 3.7935 4.85884 3.07038 5.8 2.6C6.58541 2.20329 7.45342 1.99771 8.33333 2H8.66667C10.0562 2.07666 11.3687 2.66318 12.3528 3.64724C13.3368 4.63131 13.9233 5.94377 14 7.33334V7.66667Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />

        <NavbarCards
          title="Crypto"
          value={0}
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M8.00004 15.1667C11.6819 15.1667 14.6667 12.1819 14.6667 8.5C14.6667 4.8181 11.6819 1.83334 8.00004 1.83334C4.31814 1.83334 1.33337 4.8181 1.33337 8.5C1.33337 12.1819 4.31814 15.1667 8.00004 15.1667Z"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 6.736C9.64172 6.3298 9.16823 6.04234 8.64254 5.91187C8.11685 5.78139 7.5639 5.81408 7.05725 6.0056C6.5506 6.19712 6.11429 6.53838 5.80636 6.98398C5.49843 7.42957 5.3335 7.95837 5.3335 8.5C5.3335 9.04164 5.49843 9.57044 5.80636 10.016C6.11429 10.4616 6.5506 10.8029 7.05725 10.9944C7.5639 11.1859 8.11685 11.2186 8.64254 11.0881C9.16823 10.9577 9.64172 10.6702 10 10.264"
                stroke="#757D8A"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          }
        />
      </div>
      <div className="flex flex-col gap-10px absolute bottom-0">
        <div className=" w-[210px] h-[42px] ml-[20px] mr-[20px] pl-[15px] pr-[15px] flex  items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M8 5.83334C9.10457 5.83334 10 4.93791 10 3.83334C10 2.72877 9.10457 1.83334 8 1.83334C6.89543 1.83334 6 2.72877 6 3.83334C6 4.93791 6.89543 5.83334 8 5.83334Z"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 15.1667V5.83334"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.33337 8.5H1.33337C1.33337 10.2681 2.03575 11.9638 3.286 13.214C4.53624 14.4643 6.23193 15.1667 8.00004 15.1667C9.76815 15.1667 11.4638 14.4643 12.7141 13.214C13.9643 11.9638 14.6667 10.2681 14.6667 8.5H12.6667"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="ml-[23px] text-[#757D8A] font-['Roboto'] text-[14px] font-normal leading-[22px]">
            Support
          </span>
        </div>

        <div className=" w-[210px] h-[42px] ml-[20px] mr-[20px] pl-[15px] pr-[15px] flex  items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M12.24 4.92667C13.079 5.76586 13.6502 6.83496 13.8816 7.99879C14.1129 9.16263 13.994 10.3689 13.5398 11.4652C13.0856 12.5614 12.3166 13.4984 11.3299 14.1576C10.3433 14.8168 9.18331 15.1686 7.99671 15.1686C6.8101 15.1686 5.65014 14.8168 4.66349 14.1576C3.67684 13.4984 2.9078 12.5614 2.45362 11.4652C1.99943 10.3689 1.8805 9.16263 2.11185 7.99879C2.3432 6.83496 2.91445 5.76586 3.75337 4.92667"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 1.83334V8.50001"
              stroke="#757D8A"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span className="ml-[23px] text-[#757D8A] font-['Roboto'] text-[14px] font-normal leading-[22px]">
            Sign Out
          </span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
