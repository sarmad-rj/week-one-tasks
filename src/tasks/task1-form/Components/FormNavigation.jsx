import React from "react";

const FormNavigation = ({ currentStep, onBack, onNext }) => {
  if (currentStep > 3) return null;

  return (
    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className={`px-4 py-2 text-sm rounded-md font-medium border transition-colors ${
          currentStep === 1
            ? "text-gray-300 border-gray-200 cursor-not-allowed"
            : "text-gray-700 border-gray-300 hover:bg-gray-50"
        }`}
      >
        Back
      </button>

      <button
        type="button"
        onClick={onNext}
        className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 transition-colors"
      >
        {currentStep === 3 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default FormNavigation;
