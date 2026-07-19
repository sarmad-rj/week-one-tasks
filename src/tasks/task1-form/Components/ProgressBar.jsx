import React from "react";

const ProgressBar = ({ currentStep, isSubmitted }) => {
  if (isSubmitted) return null;

  const currentProgress = ((currentStep - 1) / 2) * 100;

  return (
    <div className="text-center mb-2">
      <progress
        className="appearance-none w-full h-4"
        value={currentProgress}
        max={100}
      />
      <span className="text-sm font-medium text-gray-500">
        Step {currentStep} of 3
      </span>
    </div>
  );
};

export default ProgressBar;
