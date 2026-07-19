import React, { useState, forwardRef, useImperativeHandle } from "react";
import { INTERESTS_LIST, STEP_2_ERROR_STATE } from "./utils/constants";
import { validateCountry, validateInterests } from "./utils/validation";

const PreferencesStep = forwardRef(({ formData, updateFields }, ref) => {
  const [localErrors, setLocalErrors] = useState(STEP_2_ERROR_STATE);

  const validate = () => {
    const countryError = validateCountry(formData.country);
    const interestsError = validateInterests(formData.interests);

    setLocalErrors({
      country: countryError,
      interests: interestsError,
    });

    return !countryError && !interestsError;
  };

  useImperativeHandle(ref, () => ({
    validate,
  }));

  const handleInterestChange = (interest, checked) => {
    const updatedInterests = checked
      ? [...formData.interests, interest]
      : formData.interests.filter((item) => item !== interest);

    updateFields({ interests: updatedInterests });

    if (updatedInterests.length > 0 && localErrors.interests) {
      setLocalErrors((prev) => ({ ...prev, interests: false }));
    }
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    updateFields({ country: selectedCountry });

    if (selectedCountry && localErrors.country) {
      setLocalErrors((prev) => ({ ...prev, country: false }));
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-gray-800">Preferences</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <select
          value={formData.country}
          onChange={handleCountryChange}
          className={`mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-indigo-500 outline-none bg-white transition-all ${
            localErrors.country
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300"
          }`}
        >
          <option value="">Select a country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="KSA">KSA</option>
          <option value="USA">USA</option>
        </select>
        {localErrors.country && (
          <p className="text-red-500 text-xs mt-1">Please select a country</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Interests
        </label>
        <div
          className={`space-y-2 p-3 border rounded-lg transition-all ${
            localErrors.interests
              ? "border-red-500 bg-red-50/10"
              : "border-gray-100"
          }`}
        >
          {INTERESTS_LIST.map((interest) => (
            <label
              key={interest}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={(e) =>
                  handleInterestChange(interest, e.target.checked)
                }
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="text-sm text-gray-700">{interest}</span>
            </label>
          ))}
        </div>
        {localErrors.interests && (
          <p className="text-red-500 text-xs mt-1">
            Please pick at least one interest
          </p>
        )}
      </div>
    </div>
  );
});

PreferencesStep.displayName = "PreferencesStep";

export default PreferencesStep;
