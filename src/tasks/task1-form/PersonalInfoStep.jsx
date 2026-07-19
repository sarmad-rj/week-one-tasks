import React, { useState, forwardRef, useImperativeHandle } from "react";
import { validateName, validateEmail } from "./utils/validation";
import { STEP_1_ERROR_STATE } from "./utils/constants";

const PersonalInfoStep = forwardRef(({ formData, updateFields }, ref) => {
  const [localErrors, setLocalErrors] = useState(STEP_1_ERROR_STATE);

  const validate = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);

    setLocalErrors({
      name: nameError,
      email: emailError,
    });

    return !nameError && !emailError;
  };

  useImperativeHandle(ref, () => ({
    validate,
  }));

  const handleInputChange = (field, value) => {
    updateFields({ [field]: value });
    if (localErrors[field]) {
      setLocalErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Personal Info</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          className={`mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
            localErrors.name
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
          placeholder="Sarmad"
        />
        {localErrors.name && (
          <p className="text-red-500 text-xs mt-1">{localErrors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={`mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none transition-all ${
            localErrors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
          placeholder="your@email.com"
        />
        {localErrors.email && (
          <p className="text-red-500 text-xs mt-1">{localErrors.email}</p>
        )}
      </div>
    </div>
  );
});

PersonalInfoStep.displayName = "PersonalInfoStep";

export default PersonalInfoStep;
