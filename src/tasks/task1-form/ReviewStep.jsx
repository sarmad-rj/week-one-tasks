import React from "react";

const ReviewStep = ({ formData, onSubmit }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Review & Confirm</h3>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-2 text-sm text-gray-700">
        <p className="border-b border-gray-200 pb-1">
          <strong>Name:</strong> {formData.name}
        </p>
        <p className="border-b border-gray-200 pb-1">
          <strong>Email:</strong> {formData.email}
        </p>
        <p className="border-b border-gray-200 pb-1">
          <strong>Country:</strong> {formData.country}
        </p>
        <p>
          <strong>Interests:</strong> {formData.interests.join(", ")}
        </p>
      </div>

      <div className="text-center">
        <button
          type="button"
          onClick={onSubmit}
          className="px-4 py-2 text-sm bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default ReviewStep;
