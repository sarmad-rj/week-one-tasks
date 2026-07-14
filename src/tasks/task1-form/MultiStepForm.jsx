import React, { useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import PreferencesStep from "./PreferencesStep";
import ReviewStep from "./ReviewStep";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM_STATE = {
  name: "",
  email: "",
  country: "",
  interests: [],
};

const INITIAL_ERROR_STATE = {
  name: false,
  email: "",
  country: false,
  interests: false,
};

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState(INITIAL_ERROR_STATE);
  const [currentProgress, setCurrentProgress] = useState(0);

  const updateFields = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
    const updatedKeys = Object.keys(fields);
    
    setErrors((prev) => {
      const copy = { ...prev };
      updatedKeys.forEach((key) => {
        copy[key] = key === "email" ? "" : false;
      });
      return copy;
    });
  };

  const validateStep = () => {
    const newErrors = { ...INITIAL_ERROR_STATE };
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = true;
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
        isValid = false;
      } else if (!EMAIL_REGEX.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (currentStep === 2) {
      if (!formData.country) {
        newErrors.country = true;
        isValid = false;
      }
      if (formData.interests.length === 0) {
        newErrors.interests = true;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (currentStep < 3 && validateStep()) {
      setCurrentStep((prev) => prev + 1);
      setCurrentProgress(currentProgress + 50);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      setCurrentProgress(currentProgress - 50);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setErrors(INITIAL_ERROR_STATE);
    setCurrentProgress(0);
    setCurrentStep(1);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md border border-gray-100">
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

      <form onSubmit={(e) => e.preventDefault()}>
        {currentStep === 1 && (
          <PersonalInfoStep
            formData={formData}
            errors={errors}
            updateFields={updateFields}
          />
        )}
        {currentStep === 2 && (
          <PreferencesStep
            formData={formData}
            errors={errors}
            updateFields={updateFields}
          />
        )}
        {currentStep === 3 && (
          <ReviewStep formData={formData} onReset={handleReset} />
        )}

        {currentStep < 3 && (
          <div className="flex justify-between items-center pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={handleBack}
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
              onClick={handleNext}
              className="px-4 py-2 text-sm bg-indigo-500 text-white rounded-md font-medium hover:bg-indigo-600 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
