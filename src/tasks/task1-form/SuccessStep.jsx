import React from "react";
import { FaCheck } from "react-icons/fa6";

const SuccessStep = ({ onReset }) => {
  return (
    <div className="text-center py-6 space-y-4 animate-fade-in">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
        <FaCheck className="h-10 w-10 text-green-600" />
      </div>

      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-gray-950">
          Submission Successful!
        </h3>
        <p className="text-sm text-gray-500 max-w-xs mx-auto">
          Thank you! Your information has been received.
        </p>
      </div>

      <div className="pt-4">
        <button
          type="button"
          onClick={onReset}
          className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Fill Form Again
        </button>
      </div>
    </div>
  );
};

export default SuccessStep;
