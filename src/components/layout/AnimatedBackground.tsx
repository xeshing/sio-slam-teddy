
import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Animated gradient shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-pastel-gray opacity-40 blur-[80px] animate-slow-float"></div>
      <div className="absolute top-[60%] left-[60%] w-[30%] h-[30%] rounded-full bg-pastel-red opacity-30 blur-[70px] animate-slow-float-delay"></div>
      <div className="absolute top-[40%] left-[10%] w-[25%] h-[25%] rounded-full bg-pastel-blue opacity-30 blur-[60px] animate-slower-float"></div>
      <div className="absolute top-[10%] right-[20%] w-[20%] h-[20%] rounded-full bg-pastel-peach opacity-30 blur-[50px] animate-slower-float-delay"></div>
    </div>
  );
};

export default AnimatedBackground;
