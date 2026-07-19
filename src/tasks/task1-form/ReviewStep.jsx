import React from "react";

const ReviewStep = ({ formData }) => {
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
    </div>
  );
};

export default ReviewStep;
