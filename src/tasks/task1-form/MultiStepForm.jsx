import React, { useState, useRef } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import PreferencesStep from "./PreferencesStep";
import ReviewStep from "./ReviewStep";
import SuccessStep from "./SuccessStep";
import ProgressBar from "./Components/ProgressBar";
import FormNavigation from "./Components/FormNavigation";
import { INITIAL_FORM_STATE } from "./utils/constants";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const activeStepRef = useRef(null);

  const updateFields = (fields) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  const handleNext = () => {
    if (
      activeStepRef.current &&
      typeof activeStepRef.current.validate === "function"
    ) {
      const isValid = activeStepRef.current.validate();
      if (!isValid) return;
    }

    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <ProgressBar currentStep={currentStep} isSubmitted={isSubmitted} />

      <form onSubmit={(e) => e.preventDefault()}>
        {isSubmitted ? (
          <SuccessStep onReset={handleReset} />
        ) : (
          <>
            {currentStep === 1 && (
              <PersonalInfoStep
                ref={activeStepRef}
                formData={formData}
                updateFields={updateFields}
              />
            )}

            {currentStep === 2 && (
              <PreferencesStep
                ref={activeStepRef}
                formData={formData}
                updateFields={updateFields}
              />
            )}

            {currentStep === 3 && <ReviewStep formData={formData} />}

            <FormNavigation
              currentStep={currentStep}
              onBack={handleBack}
              onNext={handleNext}
            />
          </>
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
