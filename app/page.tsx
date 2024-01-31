import LeftSidebar from "@/components/LeftSidebar";
import MainContainer from "@/components/MainContainer";

export default function Home() {
  return (
    <div className="flex w-[1366px] h-[941px] bg-[#FFF] rounded-[30px]  shadow-[0_4px_50px_0_rgba(0,0,0,0.10)]]">
      <LeftSidebar />
      <MainContainer />
    </div>
  );
}
