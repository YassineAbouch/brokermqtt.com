import LeftContent from "./components/left-content";
import MiddleContent from "./components/middle-content";
import RightContent from "./components/right-content";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftContent />
      <div className="p-4 gap-[2rem]  w-full flex container">
        <MiddleContent />
        <RightContent />
      </div>
    </div>
  );
}
