import React from "react";

interface IButtonExploreAllProps {
  className?: string;
}

const ButtonExploreAll: React.FC<IButtonExploreAllProps> = ({
  className = "w-full mt-2 md:mt-12  mb-12 px-4 md:px-[8%]",
}) => {
  return (
    <div className={className}>
      <button className="text-white w-full py-2 bg-[#0A0A0A] text-[18px] md:text-[26px] font-semibold shadow">
        Explore all work
      </button>
    </div>
  );
};

export default ButtonExploreAll;
